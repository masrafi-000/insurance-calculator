export function calculateOutcome(
  monthlyPremium: number,
  deductible: number,
  medicalExpenses: number,
  copayCap: number
) {
  const annualPremium = monthlyPremium * 12;

  let outOfPocket = 0;

  if (medicalExpenses <= deductible) {
    outOfPocket = medicalExpenses;
  } else {
    const remaining = medicalExpenses - deductible;
    const tenPercent = remaining * 0.1;
    const capped = Math.min(tenPercent, copayCap);
    outOfPocket = deductible + capped;
  }

  const reimbursement = Math.max(0, medicalExpenses - outOfPocket);

  const insuranceBalance = annualPremium - reimbursement;

  return {
    annualPremium,
    outOfPocket,
    reimbursement,
    insuranceBalance,
    insuranceGains: insuranceBalance > 0,
    insuranceLoses: insuranceBalance < 0,
    ratio:
      annualPremium > 0
        ? (reimbursement / annualPremium) * 100
        : 0
  };
}