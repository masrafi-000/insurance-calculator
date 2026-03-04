import { sendInsuranceEmail } from "@/lib/email/mailer";
import { calculateOutcome } from "@/lib/insurance/outcomeEngine";
import { calculatePremium } from "@/lib/insurance/premiumEngine";
import { calculatorSchema } from "@/validators/zod";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = calculatorSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation Error",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const data = parsed.data;

    const premiumResult = calculatePremium(data);

    const outcomeResult = calculateOutcome(
      premiumResult.lowestMonthly,
      Number(data.deductible),
      Number(data.medicalExpenses),
      Number(data.copayCap),
      premiumResult.diffYearly || 0,
    );

    if (data.email) {
      // Don't await perfectly to avoid blocking response on slow SMTP
      sendInsuranceEmail(data.email, {
        canton: data.canton,
        deductible: Number(data.deductible),
        medicalExpenses: Number(data.medicalExpenses),
        copayCap: Number(data.copayCap),
        currentMonthly: premiumResult.currentMonthly,
        lowestMonthly: premiumResult.lowestMonthly,
        diffMonthly: premiumResult.diffMonthly,
        diffYearly: premiumResult.diffYearly,
        annualPremium: outcomeResult.annualPremium,
        outOfPocket: outcomeResult.outOfPocket,
        reimbursement: outcomeResult.reimbursement,
        insuranceBalance: outcomeResult.insuranceBalance,
        ratio: outcomeResult.ratio,
        insuranceGains: outcomeResult.insuranceGains,
        insuranceLoses: outcomeResult.insuranceLoses,
      }).catch((err) => console.error("Email sending failed:", err));
    }

    return NextResponse.json(
      {
        success: true,
        message: "Premium calculated successfully",
        data: {
          ...premiumResult,
          ...outcomeResult,
        },
      },
      { status: 200 },
    );
  } catch (err: unknown) {
    console.error("Calculate Error:", err);
    return NextResponse.json(
      {
        success: false,
        message: err instanceof Error ? err.message : "Internal Error",
      },
      { status: 500 },
    );
  }
}
