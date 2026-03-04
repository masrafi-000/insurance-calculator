import { CalculatorSchema } from "@/validators/zod";

export function calculatePremium(form: CalculatorSchema) {
  const PRIME_ANNUAL: Record<
    string,
    { child: number; young: number; adult: number }
  > = {
    ZH: { child: 1342, young: 3486, adult: 4930 },
    BE: { child: 1328, young: 3459, adult: 5180 },
    LU: { child: 1127, young: 3000, adult: 4351 },
    UR: { child: 997, young: 2557, adult: 3882 },
    SZ: { child: 1123, young: 2974, adult: 4332 },
    OW: { child: 1064, young: 2841, adult: 4082 },
    NW: { child: 1068, young: 2860, adult: 4126 },
    GL: { child: 1091, young: 3041, adult: 4461 },
    ZG: { child: 1128, young: 3026, adult: 4166 },
    FR: { child: 1257, young: 3412, adult: 4857 },
    SO: { child: 1295, young: 3448, adult: 5090 },
    BS: { child: 1668, young: 4514, adult: 6270 },
    BL: { child: 1494, young: 3979, adult: 5751 },
    SH: { child: 1256, young: 3385, adult: 4958 },
    AR: { child: 1159, young: 3036, adult: 4442 },
    AI: { child: 941, young: 2329, adult: 3514 },
    SG: { child: 1194, young: 3098, adult: 4525 },
    GR: { child: 1176, young: 2965, adult: 4352 },
    AG: { child: 1237, young: 3256, adult: 4707 },
    TG: { child: 1229, young: 3121, adult: 4581 },
    TI: { child: 1515, young: 4141, adult: 5978 },
    VD: { child: 1534, young: 4113, adult: 5725 },
    VS: { child: 1200, young: 3329, adult: 4687 },
    NE: { child: 1508, young: 4004, adult: 5920 },
    GE: { child: 1645, young: 4903, adult: 6463 },
    JU: { child: 1363, young: 3491, adult: 5549 },
    CH: { child: 1335, young: 3563, adult: 5081 },
  };

  const MODEL_FACTOR: Record<string, number> = {
    Standard: 1.0,
    "Family Doctor": 0.93,
    Telmod: 0.91,
    "HMO/Network": 0.89,
  };

  const DEDUCTIBLE_FACTOR: Record<number, number> = {
    300: 1.1,
    500: 1.05,
    1000: 0.98,
    1500: 0.93,
    2000: 0.88,
    2500: 0.84,
  };

  const ACCIDENT_FACTOR: Record<string, number> = {
    true: 1.04,
    false: 0.97,
  };

  // Age
  const dob = new Date(form.dateOfBirth);
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;

  let ageGroup: "child" | "young" | "adult" = "adult";
  if (age <= 18) ageGroup = "child";
  else if (age <= 25) ageGroup = "young";

  const cantonRates = PRIME_ANNUAL[form.canton] || PRIME_ANNUAL.CH;

  const adults = Math.max(1, Number(form.adults));
  const children = Math.max(0, Number(form.children));

  const baseAnnual =
    cantonRates[ageGroup] * adults + cantonRates.child * children;

  const baseMonthly = baseAnnual / 12;

  const lowestMonthly = Math.round(
    baseMonthly *
      MODEL_FACTOR[form.model] *
      DEDUCTIBLE_FACTOR[Number(form.deductible)] *
      ACCIDENT_FACTOR[String(form.accident)],
  );

  const lowestYearly = lowestMonthly * 12;

  // Currently, the form schema maps `monthlyPremium` to what the user JS called `currentPremium`.
  const currentMonthly = Math.round(Number(form.monthlyPremium));
  const currentYearly = currentMonthly * 12;

  const diffMonthly = currentMonthly - lowestMonthly;
  const diffYearly = diffMonthly * 12;

  return {
    age,
    ageGroup,
    baseMonthlyTotal: Math.round(baseMonthly),
    lowestMonthly,
    lowestYearly,
    currentMonthly,
    currentYearly,
    diffMonthly,
    diffYearly,
  };
}
