// import fs from "fs";
// import path from "path";
// import { calculateOutcome } from "../lib/insurance/outcomeEngine";
// import { calculatePremium } from "../lib/insurance/premiumEngine";

// const LOG_FILE = path.join(__dirname, "..", "test-report.log");

// function log(message: string) {
//   const timestamp = new Date().toISOString();
//   const logMessage = `[${timestamp}] ${message}\n`;
//   fs.appendFileSync(LOG_FILE, logMessage);
//   console.log(message);
// }

// function clearLog() {
//   if (fs.existsSync(LOG_FILE)) {
//     fs.unlinkSync(LOG_FILE);
//   }
// }

// function runTests() {
//   clearLog();
//   log("--- Starting Tests for Insurance Calculator ---");

//   const testCases = [
//     {
//       name: "Test Case 1: Standard model, low deductible, no accident (Adult ZH)",
//       form: {
//         firstName: "John",
//         lastName: "Doe",
//         phoneNumber: "0791234567",
//         dateOfBirth: "1990-01-01",
//         email: "john.doe@example.com",
//         canton: "ZH",
//         monthlyPremium: "400",
//         deductible: "300",
//         medicalExpenses: "1000",
//         copayCap: "700",
//         model: "Standard" as const,
//         adults: "1",
//         children: "0",
//         accident: false,
//       },
//     },
//     {
//       name: "Test Case 2: HMO model, high deductible, with accident (Child BE)",
//       form: {
//         firstName: "Jane",
//         lastName: "Smith",
//         phoneNumber: "0799876543",
//         dateOfBirth: "2015-05-15",
//         email: "jane.smith@example.com",
//         canton: "BE",
//         monthlyPremium: "150",
//         deductible: "2500",
//         medicalExpenses: "500",
//         copayCap: "350",
//         model: "HMO/Network" as const,
//         adults: "0",
//         children: "1",
//         accident: true,
//       },
//     },
//   ];

//   let passed = 0;
//   let failed = 0;

//   for (const tc of testCases) {
//     log(`\nRunning: ${tc.name}`);
//     try {
//       const premiumResult = calculatePremium(tc.form as any);
//       log(
//         `Premium Result: baseMonthlyTotal = ${premiumResult.baseMonthlyTotal}, Lowest Monthly = ${premiumResult.lowestMonthly}`,
//       );

//       const outcomeResult = calculateOutcome(
//         premiumResult.lowestMonthly,
//         Number(tc.form.deductible),
//         Number(tc.form.medicalExpenses),
//         Number(tc.form.copayCap),
//         premiumResult.diffYearly || 0,
//       );

//       log(
//         `Outcome Result: Annual Premium = ${outcomeResult.annualPremium}, OutOfPocket = ${outcomeResult.outOfPocket}, Ratio = ${outcomeResult.ratio.toFixed(2)}%`,
//       );

//       // Simple assertions to ensure we got finite numbers out
//       if (
//         !isFinite(premiumResult.lowestMonthly) ||
//         !isFinite(outcomeResult.annualPremium)
//       ) {
//         throw new Error(
//           "Non-finite number detected in results (calculation error)",
//         );
//       }

//       log(`SUCCESS: ${tc.name}`);
//       passed++;
//     } catch (err: any) {
//       log(`FAILED: ${tc.name}`);
//       log(`Error: ${err.message}`);
//       failed++;
//     }
//   }

//   log(`\n--- Test Run Complete ---`);
//   log(`Total: ${testCases.length}, Passed: ${passed}, Failed: ${failed}`);
// }

// runTests();
