import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import {
  AlertTriangle,
  Copyright,
  FileText,
  Mail,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";

export const metadata = {
  title: "Terms of Service | Insurance Check",
  description:
    "Read the Terms of Service for using our Swiss insurance estimation and analysis tools.",
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#fcfdfd] min-h-screen pt-24 pb-16">
      <Section className="py-8 md:py-12">
        <Container className="max-w-4xl">
          <div className="mb-12 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 font-bold text-[13px] mb-6 border border-slate-200">
              <Scale className="w-4 h-4" />
              <span>Legal Guidelines</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-slate-500 text-lg">
              Effective Date: {new Date().getFullYear()}-01-01
            </p>
          </div>

          <div className="space-y-6">
            {/* Sec 1 */}
            <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 text-slate-600">
                  <FileText className="w-5 h-5" />
                </div>
                1. Introduction
              </h3>
              <p className="text-[16px] text-slate-600 leading-relaxed">
                By accessing and using{" "}
                <strong className="text-slate-800">Insurance Check</strong>, you
                accept and agree to be bound by the terms and provisions of this
                agreement. In addition, when using these particular services,
                you shall be subject to any posted guidelines or rules
                applicable to such services.
              </p>
            </div>

            {/* Sec 2 */}
            <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 text-slate-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                2. Nature of Service
              </h3>
              <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
                Insurance Check provides algorithmic estimation tools designed
                to help Swiss residents analyze the potential profitability of
                their health insurance policies.
              </p>

              <div className="bg-orange-50 rounded-xl p-5 border border-orange-100 flex gap-4">
                <AlertTriangle className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-orange-900 mb-2">
                    Important Disclaimer
                  </h4>
                  <p className="text-[15px] text-orange-800 leading-relaxed">
                    The results provided by our calculators are{" "}
                    <em>estimates</em> based on the data you provide and
                    historical market averages. They do <strong>NOT</strong>{" "}
                    constitute binding financial advice, nor do they guarantee
                    exact future savings. Always consult with a certified
                    insurance broker before making final coverage changes.
                  </p>
                </div>
              </div>
            </div>

            {/* Sec 3 */}
            <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 text-slate-600">
                  <Users className="w-5 h-5" />
                </div>
                3. User Conduct
              </h3>
              <p className="text-[16px] text-slate-600 leading-relaxed mb-4">
                Users agree to use our platform strictly for personal,
                non-commercial purposes. You may not:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <p className="text-[16px] text-slate-600">
                    Attempt to reverse-engineer our proprietary calculation
                    algorithms.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <p className="text-[16px] text-slate-600">
                    Submit false or intentionally misleading data to manipulate
                    system results.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <p className="text-[16px] text-slate-600">
                    Use bots, scrapers, or other automated tools to extract data
                    or pricing information from our site.
                  </p>
                </li>
              </ul>
            </div>

            {/* Grid Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Sec 4 */}
              <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 text-slate-600">
                    <Copyright className="w-5 h-5" />
                  </div>
                  4. Intellectual Property
                </h3>
                <p className="text-[16px] text-slate-600 leading-relaxed">
                  The website and its original content, features, and
                  functionality are owned by Insurance Check and are protected
                  by international copyright, trademark, patent, trade secret,
                  and other intellectual property or proprietary rights laws.
                </p>
              </div>

              {/* Sec 5 */}
              <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 text-slate-600">
                    <Scale className="w-5 h-5" />
                  </div>
                  5. Limitation of Liability
                </h3>
                <p className="text-[16px] text-slate-600 leading-relaxed">
                  Insurance Check, its directors, employees, partners, and
                  agents shall not be liable for any indirect, incidental,
                  special, consequential or punitive damages resulting from your
                  access to or use of the Service.
                </p>
              </div>
            </div>

            {/* Sec 6 */}
            <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 md:items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  6. Changes & Contact
                </h3>
                <p className="text-[15px] text-slate-600 leading-relaxed max-w-xl">
                  We reserve the right, at our sole discretion, to modify or
                  replace these Terms at any time. By continuing to access or
                  use our Service after those revisions become effective, you
                  agree to be bound by the revised terms.
                </p>
              </div>
              <a
                href="mailto:legal@insurancecheck.ch"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors shrink-0"
              >
                <Mail className="w-4 h-4" />
                Contact Legal
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
