import { sendInsuranceEmail } from "@/lib/email/mailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      email,
      canton,
      monthlyPremium,
      deductible,
      medicalExpenses,
      copayCap,
    } = body;

    const mp = parseFloat(monthlyPremium);
    const d = parseFloat(deductible);
    const me = parseFloat(medicalExpenses);
    const cc = parseFloat(copayCap);

    // Annual premium
    const annualPremium = mp * 12;

    // Out of pocket
    let outOfPocket = 0;
    if (me <= d) {
      outOfPocket = me;
    } else {
      const remaining = me - d;
      const tenPercent = remaining * 0.1;
      const cappedTenPercent = Math.min(tenPercent, cc);
      outOfPocket = d + cappedTenPercent;
    }

    // Reimbursement
    let reimbursement = me - outOfPocket;
    if (reimbursement < 0) reimbursement = 0;

    // Insurance gain/loss
    const insuranceBalance = annualPremium - reimbursement;
    const insuranceGains = insuranceBalance > 0;
    const insuranceLoses = insuranceBalance < 0;

    // Ratio
    const ratio = annualPremium > 0 ? (reimbursement / annualPremium) * 100 : 0;

    // Async email sending
    if (email) {
      // Background email sending without blocking response
      sendInsuranceEmail(email, {
        canton,
        monthlyPremium: mp,
        deductible: d,
        medicalExpenses: me,
        copayCap: cc,
        annualPremium,
        outOfPocket,
        reimbursement,
        insuranceBalance,
        insuranceGains,
        insuranceLoses,
        ratio,
      }).catch((err) => console.error("Failed to send insurance email:", err));
    }

    return NextResponse.json({
      success: true,
      data: {
        annualPremium,
        outOfPocket,
        reimbursement,
        insuranceBalance,
        insuranceGains,
        insuranceLoses,
        ratio,
        redirectUrl: process.env.REDIRECT_URL || "/",
      },
    });
  } catch (error) {
    console.error("Calculate Error:", error);
    return NextResponse.json(
      { success: false, error: "Invalid data" },
      { status: 400 },
    );
  }
}
