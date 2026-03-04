import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_PORT === "465",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendInsuranceEmail = async (
  to: string,
  data: {
    canton: string;
    currentMonthly: number;
    lowestMonthly: number;
    diffMonthly: number;
    diffYearly: number;
    deductible: number;
    medicalExpenses: number;
    copayCap: number;
    annualPremium: number;
    outOfPocket: number;
    reimbursement: number;
    insuranceBalance: number;
    ratio: number;
    insuranceGains: boolean;
    insuranceLoses: boolean;
  },
) => {
  const userMailOptions = {
    from: process.env.SMTP_USER || "noreply@example.com",
    to,
    subject: "Your Health Insurance Calculation Results",
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          @media max-width: 600px {
            .container { width: 100% !important; border-radius: 0 !important; border: left: 0 !important; border-right: 0 !important; }
            .content { padding: 24px 16px !important; }
            .metric-label { display: block !important; padding-bottom: 4px !important; border-bottom: none !important; }
            .metric-value { display: block !important; text-align: left !important; padding-top: 0 !important; }
          }
        </style>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 40px 0; color: #334155; -webkit-font-smoothing: antialiased;">
        <div class="container" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1); border: 1px solid #e2e8f0;">
          <!-- Header -->
          <div style="background-color: #ffffff; padding: 32px 32px 24px; text-align: center; border-bottom: 1px solid #f1f5f9;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: #0f172a; letter-spacing: -0.025em;">Health Insurance Analysis</h1>
            <p style="margin: 8px 0 0; font-size: 15px; color: #64748b;">Your personalized profitability simulation</p>
          </div>

          <div class="content" style="padding: 32px;">
            <!-- Verdict Banner -->
            <div style="background-color: ${data.insuranceGains ? "#fef2f2" : "#f0fdf4"}; border: 1px solid ${data.insuranceGains ? "#fecaca" : "#bbf7d0"}; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 32px;">
              <p style="margin: 0; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: ${data.insuranceGains ? "#dc2626" : "#16a34a"};">
                ${data.insuranceGains ? "⚠️ OUTCOME: YOU LOSE" : "✅ OUTCOME: YOU GAIN"}
              </p>
              <p style="margin: 12px 0 0; font-size: 36px; font-weight: 800; color: ${data.insuranceGains ? "#991b1b" : "#166534"}; line-height: 1;">
                ${Math.abs(data.insuranceBalance).toLocaleString("en-CH", { maximumFractionDigits: 0 })} <span style="font-size: 18px; opacity: 0.8; font-weight: 600;">CHF</span>
              </p>
              <p style="margin: 8px 0 0; font-size: 14px; color: ${data.insuranceGains ? "#b91c1c" : "#15803d"}; opacity: 0.8;">Total Net Balance</p>
            </div>

            <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.6; color: #475569;">Hello,</p>
            <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.6; color: #475569;">Thank you for using our calculator. Based on the information provided, here is the detailed breakdown of your simulated setup:</p>

            <!-- Data Table -->
            <table style="width: 100%; border-collapse: separate; border-spacing: 0; margin-bottom: 32px; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
              <!-- Group 1: Premiums -->
              <tr>
                <td colspan="2" style="background-color: #f8fafc; padding: 12px 16px; font-size: 13px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid #e2e8f0;">Monthly Premiums</td>
              </tr>
              <tr>
                <td class="metric-label" style="padding: 16px; font-size: 15px; color: #475569; border-bottom: 1px solid #f1f5f9;">Current Premium</td>
                <td class="metric-value" style="padding: 16px; font-size: 15px; font-weight: 600; color: #0f172a; text-align: right; border-bottom: 1px solid #f1f5f9;">CHF ${data.currentMonthly.toLocaleString("en-CH")}</td>
              </tr>
              <tr>
                <td class="metric-label" style="padding: 16px; font-size: 15px; color: #475569; border-bottom: 1px solid #f1f5f9;">Simulated Premium <span style="font-size: 13px; color: #94a3b8; display: block; margin-top: 4px;">For ${data.canton}</span></td>
                <td class="metric-value" style="padding: 16px; font-size: 15px; font-weight: 600; color: #0f172a; text-align: right; border-bottom: 1px solid #f1f5f9;">CHF ${data.lowestMonthly.toLocaleString("en-CH")}</td>
              </tr>
              <tr>
                <td class="metric-label" style="padding: 16px; font-size: 15px; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Difference</td>
                <td class="metric-value" style="padding: 16px; font-size: 16px; font-weight: 700; color: ${data.diffMonthly > 0 ? "#16a34a" : "#dc2626"}; text-align: right; border-bottom: 1px solid #e2e8f0;">
                  CHF ${Math.abs(data.diffMonthly).toLocaleString("en-CH")} / month<br>
                  <span style="font-size: 13px; font-weight: 500; opacity: 0.8;">(${data.diffMonthly > 0 ? "Cheaper" : "More Expensive"})</span>
                </td>
              </tr>

              <!-- Group 2: Policy Details -->
              <tr>
                <td colspan="2" style="background-color: #f8fafc; padding: 12px 16px; font-size: 13px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid #e2e8f0;">Annual Details</td>
              </tr>
              <tr>
                <td class="metric-label" style="padding: 16px; font-size: 15px; color: #475569; border-bottom: 1px solid #f1f5f9;">Selected Deductible</td>
                <td class="metric-value" style="padding: 16px; font-size: 15px; font-weight: 600; color: #0f172a; text-align: right; border-bottom: 1px solid #f1f5f9;">CHF ${data.deductible.toLocaleString("en-CH")}</td>
              </tr>
              <tr>
                <td class="metric-label" style="padding: 16px; font-size: 15px; color: #475569; border-bottom: 1px solid #f1f5f9;">Estimated Medical Expenses</td>
                <td class="metric-value" style="padding: 16px; font-size: 15px; font-weight: 600; color: #0f172a; text-align: right; border-bottom: 1px solid #f1f5f9;">CHF ${data.medicalExpenses.toLocaleString("en-CH")}</td>
              </tr>
              <tr>
                <td class="metric-label" style="padding: 16px; font-size: 15px; color: #475569; border-bottom: 1px solid #f1f5f9;">Annual Premium Paid</td>
                <td class="metric-value" style="padding: 16px; font-size: 15px; font-weight: 600; color: #0f172a; text-align: right; border-bottom: 1px solid #f1f5f9;">CHF ${data.annualPremium.toLocaleString("en-CH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
              </tr>
              <tr>
                <td class="metric-label" style="padding: 16px; font-size: 15px; color: #475569; border-bottom: 1px solid #f1f5f9;">Your Out of Pocket</td>
                <td class="metric-value" style="padding: 16px; font-size: 15px; font-weight: 600; color: #0f172a; text-align: right; border-bottom: 1px solid #f1f5f9;">CHF ${data.outOfPocket.toLocaleString("en-CH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
              </tr>
              <tr>
                <td class="metric-label" style="padding: 16px; font-size: 15px; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Insurance Reimbursement</td>
                <td class="metric-value" style="padding: 16px; font-size: 15px; font-weight: 700; color: #0ea5e9; text-align: right; border-bottom: 1px solid #e2e8f0;">CHF ${data.reimbursement.toLocaleString("en-CH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
              </tr>
            </table>

            <div style="text-align: center;">
              <a href="#" style="display: inline-block; background-color: #2563eb; color: #ffffff; font-size: 16px; font-weight: 600; padding: 14px 28px; border-radius: 8px; text-decoration: none; box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2);">Return to Website</a>
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color: #f8fafc; padding: 24px 32px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0; font-size: 13px; color: #64748b; line-height: 1.5;">This email was sent automatically from our calculator.<br>If you need assistance, please reply directly to this email.</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  const adminMailOptions = {
    from: process.env.SMTP_USER || "noreply@example.com",
    to: process.env.ADMIN_EMAIL || "admin@example.com",
    subject: `New Insurance Calculation - ${to}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 40px 0; color: #334155; -webkit-font-smoothing: antialiased;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); border: 1px solid #e2e8f0;">
          
          <!-- Admin Header -->
          <div style="background-color: #1e293b; padding: 24px 32px;">
            <h2 style="margin: 0; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8;">New Lead Alert</h2>
            <p style="margin: 8px 0 0; font-size: 20px; font-weight: 600; color: #f8fafc;">Insurance Calculation Submitted</p>
          </div>

          <div style="padding: 32px;">
            <!-- User Info Highlight -->
            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 32px;">
              <p style="margin: 0 0 8px; font-size: 14px; font-weight: 600; color: #64748b;">User Email</p>
              <p style="margin: 0; font-size: 18px; font-weight: 700; color: #0f172a;"><a href="mailto:${to}" style="color: #2563eb; text-decoration: none;">${to}</a></p>
            </div>

            <!-- Quick Verdict -->
            <div style="background-color: ${data.insuranceGains ? "#fef2f2" : "#f0fdf4"}; border-left: 4px solid ${data.insuranceGains ? "#dc2626" : "#16a34a"}; padding: 16px 20px; margin-bottom: 32px; border-radius: 0 8px 8px 0;">
              <p style="margin: 0; font-size: 15px; font-weight: 700; color: ${data.insuranceGains ? "#991b1b" : "#166534"};">
                User ${data.insuranceGains ? "Loses" : "Gains"}: ${Math.abs(data.insuranceBalance).toLocaleString("en-CH", { maximumFractionDigits: 0 })} CHF
              </p>
              <p style="margin: 4px 0 0; font-size: 13px; font-weight: 500; color: ${data.insuranceGains ? "#b91c1c" : "#15803d"}; opacity: 0.8;">
                 Payout Ratio: ${data.ratio.toFixed(2)}%
              </p>
            </div>

            <!-- Detailed Breakdown -->
            <h3 style="margin: 0 0 16px; font-size: 16px; font-weight: 700; color: #0f172a; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px;">Full Submission Details</h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <!-- Specs -->
              <tr>
                <td style="padding: 12px 0; color: #64748b; border-bottom: 1px dashed #e2e8f0;">Canton</td>
                <td style="padding: 12px 0; font-weight: 600; color: #0f172a; text-align: right; border-bottom: 1px dashed #e2e8f0;">${data.canton}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #64748b; border-bottom: 1px dashed #e2e8f0;">Selected Deductible</td>
                <td style="padding: 12px 0; font-weight: 600; color: #0f172a; text-align: right; border-bottom: 1px dashed #e2e8f0;">CHF ${data.deductible.toLocaleString("en-CH")}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #64748b; border-bottom: 1px dashed #e2e8f0;">Medical Expenses</td>
                <td style="padding: 12px 0; font-weight: 600; color: #0f172a; text-align: right; border-bottom: 1px dashed #e2e8f0;">CHF ${data.medicalExpenses.toLocaleString("en-CH")}</td>
              </tr>
              <!-- Premiums -->
              <tr>
                <td style="padding: 12px 0; color: #64748b; border-bottom: 1px dashed #e2e8f0; padding-top: 24px;">Current Monthly</td>
                <td style="padding: 12px 0; font-weight: 600; color: #0f172a; text-align: right; border-bottom: 1px dashed #e2e8f0; padding-top: 24px;">CHF ${data.currentMonthly.toLocaleString("en-CH")}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #64748b; border-bottom: 1px dashed #e2e8f0;">Simulated Monthly</td>
                <td style="padding: 12px 0; font-weight: 600; color: #0f172a; text-align: right; border-bottom: 1px dashed #e2e8f0;">CHF ${data.lowestMonthly.toLocaleString("en-CH")}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #64748b; border-bottom: 1px dashed #e2e8f0;">Monthly Difference</td>
                <td style="padding: 12px 0; font-weight: 700; color: ${data.diffMonthly > 0 ? "#16a34a" : "#dc2626"}; text-align: right; border-bottom: 1px dashed #e2e8f0;">CHF ${data.diffMonthly.toLocaleString("en-CH")}</td>
              </tr>
              <!-- Annual Costs -->
              <tr>
                <td style="padding: 12px 0; color: #64748b; border-bottom: 1px dashed #e2e8f0; padding-top: 24px;">Annual Premium Paid</td>
                <td style="padding: 12px 0; font-weight: 600; color: #0f172a; text-align: right; border-bottom: 1px dashed #e2e8f0; padding-top: 24px;">CHF ${data.annualPremium.toLocaleString("en-CH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #64748b; border-bottom: 1px dashed #e2e8f0;">User Out of Pocket</td>
                <td style="padding: 12px 0; font-weight: 600; color: #0f172a; text-align: right; border-bottom: 1px dashed #e2e8f0;">CHF ${data.outOfPocket.toLocaleString("en-CH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #64748b; border-bottom: 1px dashed #e2e8f0;">Ins. Reimbursement</td>
                <td style="padding: 12px 0; font-weight: 600; color: #0ea5e9; text-align: right; border-bottom: 1px dashed #e2e8f0;">CHF ${data.reimbursement.toLocaleString("en-CH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: 700; color: #334155; padding-top: 24px;">Total Balance</td>
                <td style="padding: 12px 0; font-weight: 700; color: ${data.insuranceGains ? "#dc2626" : "#16a34a"}; text-align: right; padding-top: 24px;">CHF ${data.insuranceBalance.toLocaleString("en-CH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
              </tr>
            </table>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    const [userInfo, adminInfo] = await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);
    console.log("User Email sent: %s", userInfo.messageId);
    console.log("Admin Email sent: %s", adminInfo.messageId);
    return { userInfo, adminInfo };
  } catch (error) {
    console.error("Error sending emails:", error);
    throw error;
  }
};
