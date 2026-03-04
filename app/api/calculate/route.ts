import { NextResponse } from "next/server";
import { calculatePremium } from "@/lib/insurance/premiumEngine";
import { calculateOutcome } from "@/lib/insurance/outcomeEngine";
import { calculatorSchema } from "@/validators/zod";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = calculatorSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // 1️⃣ Premium simulation
    const premiumResult = calculatePremium(data);

    // 2️⃣ Outcome simulation
    const outcomeResult = calculateOutcome(
      premiumResult.lowestMonthly,
      Number(data.deductible),
      Number(data.medicalExpenses),
      Number(data.copayCap)
    );

    return NextResponse.json({
      success: true,
      data: {
        ...premiumResult,
        ...outcomeResult
      }
    });

  } catch (err) {
    return NextResponse.json(
      { success: false, error: "Calculation failed" },
      { status: 400 }
    );
  }
}