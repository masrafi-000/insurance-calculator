import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { Database, Info, Lock, ShieldCheck, UserCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Insurance Check",
  description:
    "Learn how Insurance Check protects your data with Swiss-standard security and privacy practices.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#fcfdfd] min-h-screen pt-24 pb-16">
      <Section className="py-8 md:py-12">
        <Container className="max-w-4xl">
          <div className="mb-12 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-[13px] mb-6 border border-blue-100/50">
              <ShieldCheck className="w-4 h-4" />
              <span>Swiss Privacy Standards</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-slate-500 text-lg">
              Effective Date: {new Date().getFullYear()}-01-01
            </p>
          </div>

          <div className="space-y-6">
            {/* Sec 1 */}
            <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600">
                  <Info className="w-5 h-5" />
                </div>
                1. Introduction
              </h3>
              <p className="text-[16px] text-slate-600 leading-relaxed">
                At <strong className="text-slate-800">Insurance Check</strong>,
                we take your privacy extremely seriously. We operate under
                strict Swiss data protection laws to ensure that the information
                you provide while using our premium calculation algorithms
                remains secure, confidential, and completely under your control.
              </p>
            </div>

            {/* Sec 2 */}
            <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600">
                  <Database className="w-5 h-5" />
                </div>
                2. Data We Collect
              </h3>
              <p className="text-[16px] text-slate-600 leading-relaxed mb-4">
                When you use our estimation tool, we collect only the necessary
                information to provide you with accurate insurance profitability
                results:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                  <p className="text-[16px] text-slate-600">
                    <strong className="text-slate-800">Form Data:</strong>{" "}
                    Canton, monthly premium, franchise, estimated medical
                    expenses, and quote-part ceiling.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                  <p className="text-[16px] text-slate-600">
                    <strong className="text-slate-800">
                      Contact Information:
                    </strong>{" "}
                    Your email address, used strictly to send you your requested
                    detailed PDF analysis.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                  <p className="text-[16px] text-slate-600">
                    <strong className="text-slate-800">Usage Data:</strong>{" "}
                    Anonymous analytical data on how our website is navigated to
                    improve our services.
                  </p>
                </li>
              </ul>
            </div>

            {/* Sec 3 */}
            <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                3. How We Use Your Data
              </h3>
              <p className="text-[16px] text-slate-600 leading-relaxed mb-4">
                Your data is exclusively used to:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                  <p className="text-[16px] text-slate-600">
                    Perform real-time calculations against our profitability
                    matrix.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                  <p className="text-[16px] text-slate-600">
                    Deliver your personalized results directly to your inbox.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                  <p className="text-[16px] text-slate-600">
                    Enhance the accuracy and efficiency of our insurance
                    comparison algorithms.
                  </p>
                </li>
              </ul>
              <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 inline-block w-full">
                <p className="text-[15px] text-blue-900 leading-relaxed">
                  <strong className="font-bold">
                    We do NOT sell your data to third parties.
                  </strong>{" "}
                  Your email will only be shared with our trusted carrier
                  partners if you explicitly request to connect with them for a
                  final binding quote.
                </p>
              </div>
            </div>

            {/* Sec 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600">
                    <Lock className="w-5 h-5" />
                  </div>
                  4. Security
                </h3>
                <p className="text-[16px] text-slate-600 leading-relaxed">
                  All data transmitted between your browser and our servers is
                  encrypted using industry-standard SSL/TLS protocols. Our
                  databases are secured within highly regulated, Swiss-domiciled
                  server environments.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  5. Your Rights
                </h3>
                <p className="text-[16px] text-slate-600 leading-relaxed mb-4">
                  You have the full right to request access to, correction of,
                  or deletion of any personal data we hold about you.
                </p>
                <a
                  href="mailto:privacy@insurancecheck.ch"
                  className="inline-flex font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  privacy@insurancecheck.ch &rarr;
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
