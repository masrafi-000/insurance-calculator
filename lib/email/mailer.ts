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
    monthlyPremium: number;
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
      <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb; padding: 20px; border-radius: 12px;">
        <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); border: 1px solid #e5e7eb;">
          <h2 style="color: #111827; margin-top: 0; font-size: 24px; font-weight: 600; text-align: center;">Health Insurance Calculation</h2>
          <div style="margin: 20px 0; padding: 15px; background-color: ${data.insuranceGains ? "#fef2f2" : "#f0fdf4"}; border-left: 4px solid ${data.insuranceGains ? "#dc2626" : "#16a34a"}; border-radius: 4px; text-align: center;">
            <p style="margin: 0; color: ${data.insuranceGains ? "#991b1b" : "#166534"}; font-weight: bold; font-size: 18px; text-transform: uppercase;">
              ${data.insuranceGains ? "⚠️ YOU LOSE" : "✅ YOU GAIN"}
            </p>
            <p style="margin: 8px 0 0 0; color: ${data.insuranceGains ? "#b91c1c" : "#15803d"}; font-size: 24px; font-weight: 800;">
              ${Math.abs(data.insuranceBalance).toLocaleString("en-CH", { maximumFractionDigits: 0 })} <span style="font-size: 16px; opacity: 0.8;">CHF</span>
            </p>
          </div>
          <p style="color: #4b5563; line-height: 1.6;">Hello,</p>
          <p style="color: #4b5563; line-height: 1.6;">Thank you for using our calculator. Here are your personalized results based on your inputs:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 15px;">
            <tbody>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 12px 0; color: #6b7280;">Canton</td>
                <td style="padding: 12px 0; font-weight: 600; color: #111827; text-align: right;">${data.canton}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 12px 0; color: #6b7280;">Monthly Premium</td>
                <td style="padding: 12px 0; font-weight: 600; color: #111827; text-align: right;">CHF ${data.monthlyPremium}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 12px 0; color: #6b7280;">Deductible</td>
                <td style="padding: 12px 0; font-weight: 600; color: #111827; text-align: right;">CHF ${data.deductible}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 12px 0; color: #6b7280;">Annual Medical Expenses</td>
                <td style="padding: 12px 0; font-weight: 600; color: #111827; text-align: right;">CHF ${data.medicalExpenses}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 12px 0; color: #6b7280;">Annual Premium (12 months)</td>
                <td style="padding: 12px 0; font-weight: 600; color: #111827; text-align: right;">CHF ${data.annualPremium.toFixed(2)}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 12px 0; color: #6b7280;">Your Out of Pocket</td>
                <td style="padding: 12px 0; font-weight: 600; color: #111827; text-align: right;">CHF ${data.outOfPocket.toFixed(2)}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 12px 0; color: #6b7280;">Reimbursement</td>
                <td style="padding: 12px 0; font-weight: 600; color: #111827; text-align: right;">CHF ${data.reimbursement.toFixed(2)}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 12px 0; color: #6b7280;">Total Balance</td>
                <td style="padding: 12px 0; font-weight: 600; color: ${data.insuranceGains ? "#dc2626" : "#16a34a"}; text-align: right;">CHF ${data.insuranceBalance.toFixed(2)}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #6b7280;">Payout Ratio</td>
                <td style="padding: 12px 0; font-weight: 600; color: #111827; text-align: right;">${data.ratio.toFixed(2)}%</td>
              </tr>
            </tbody>
          </table>
          
          <div style="margin-top: 30px; text-align: center;">
            <a href="https://yourwebsite.com" style="background-color: #6366f1; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 500; display: inline-block;">Return to Website</a>
          </div>
          
          <p style="color: #6b7280; font-size: 13px; text-align: center; margin-top: 30px; border-top: 1px solid #e5e7eb; padding-top: 20px;">If you have any questions, feel free to reply to this email.</p>
        </div>
      </div>
    `,
  };

  const adminMailOptions = {
    from: process.env.SMTP_USER || "noreply@example.com",
    to: process.env.ADMIN_EMAIL || "admin@example.com",
    subject: `New Insurance Calculation - ${to}`,
    html: `
      <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f3f4f6; padding: 20px; border-radius: 12px;">
        <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); border: 1px solid #e5e7eb;">
          <h2 style="color: #4f46e5; margin-top: 0; font-size: 20px; font-weight: 600; border-bottom: 2px solid #e0e7ff; padding-bottom: 10px;">New Calculation Submitted</h2>
          <p style="color: #4b5563; font-size: 15px; margin-bottom: 20px;">A user (<strong>${to}</strong>) just requested a calculation. Here are their complete details.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 14px;">
            <tbody>
              <tr style="background-color: #f8fafc;">
                <td style="padding: 10px; border: 1px solid #e2e8f0; color: #64748b; width: 40%;">User Email</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 600; color: #1e293b;">${to}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #e2e8f0; color: #64748b;">Canton</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 600; color: #1e293b;">${data.canton}</td>
              </tr>
              <tr style="background-color: #f8fafc;">
                <td style="padding: 10px; border: 1px solid #e2e8f0; color: #64748b;">Monthly Premium</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 600; color: #1e293b;">CHF ${data.monthlyPremium}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #e2e8f0; color: #64748b;">Deductible</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 600; color: #1e293b;">CHF ${data.deductible}</td>
              </tr>
              <tr style="background-color: #f8fafc;">
                <td style="padding: 10px; border: 1px solid #e2e8f0; color: #64748b;">Annual Medical Expenses</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 600; color: #1e293b;">CHF ${data.medicalExpenses}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #e2e8f0; color: #64748b;">Annual Premium (12 months)</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 600; color: #1e293b;">CHF ${data.annualPremium.toFixed(2)}</td>
              </tr>
              <tr style="background-color: #f8fafc;">
                <td style="padding: 10px; border: 1px solid #e2e8f0; color: #64748b;">Out of Pocket</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 600; color: #1e293b;">CHF ${data.outOfPocket.toFixed(2)}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #e2e8f0; color: #64748b;">Reimbursement</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 600; color: #1e293b;">CHF ${data.reimbursement.toFixed(2)}</td>
              </tr>
              <tr style="background-color: ${data.insuranceGains ? "#fef2f2" : "#f0fdf4"};">
                <td style="padding: 10px; border: 1px solid #e2e8f0; color: #64748b;">Total Balance</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 600; color: ${data.insuranceGains ? "#dc2626" : "#16a34a"};">CHF ${data.insuranceBalance.toFixed(2)}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #e2e8f0; color: #64748b;">Payout Ratio</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 600; color: #1e293b;">${data.ratio.toFixed(2)}%</td>
              </tr>
            </tbody>
          </table>
          
          <div style="margin-top: 25px; padding: 15px; background-color: ${data.insuranceGains ? "#fef2f2" : "#f0fdf4"}; border-left: 4px solid ${data.insuranceGains ? "#dc2626" : "#16a34a"}; border-radius: 4px; text-align: center;">
            <p style="margin: 0; color: ${data.insuranceGains ? "#991b1b" : "#166534"}; font-size: 15px; font-weight: 700;">
              Verdict: User ${data.insuranceGains ? "LOSES" : "GAINS"} 
              ${Math.abs(data.insuranceBalance).toLocaleString("en-CH", { maximumFractionDigits: 0 })} CHF
            </p>
          </div>
        </div>
      </div>
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
