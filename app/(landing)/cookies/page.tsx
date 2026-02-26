import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import {
  Activity,
  BarChart3,
  Cookie,
  HelpCircle,
  Settings,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Cookie Policy | Insurance Check",
  description:
    "Learn how Insurance Check uses cookies to improve your insurance calculation experience.",
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-[#fcfdfd] min-h-screen pt-24 pb-16">
      <Section className="py-8 md:py-12">
        <Container className="max-w-4xl">
          <div className="mb-12 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 font-bold text-[13px] mb-6 border border-emerald-100/50">
              <Cookie className="w-4 h-4" />
              <span>Cookie Usage</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              Cookie Policy
            </h1>
            <p className="text-slate-500 text-lg">
              Effective Date: {new Date().getFullYear()}-01-01
            </p>
          </div>

          <div className="space-y-6">
            {/* Sec 1 */}
            <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600">
                  <HelpCircle className="w-5 h-5" />
                </div>
                1. What Are Cookies?
              </h3>
              <p className="text-[16px] text-slate-600 leading-relaxed">
                Cookies are small text files that are placed on your computer or
                mobile device by websites that you visit. They are widely used
                to make websites work, or work more efficiently, as well as to
                provide reporting information to the site owners.
              </p>
            </div>

            {/* Sec 2 */}
            <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                2. How We Use Cookies
              </h3>
              <p className="text-[16px] text-slate-600 leading-relaxed mb-6 border-b border-slate-100 pb-6">
                At <strong className="text-slate-800">Insurance Check</strong>,
                we use cookies primarily to ensure our proprietary calculator
                functions smoothly and securely. Here is a breakdown of the
                types of cookies we utilize:
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 bg-blue-50 text-blue-600 p-2 rounded-lg h-fit">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      Essential Cookies (Strictly Necessary)
                    </h4>
                    <p className="text-[15px] text-slate-600 leading-relaxed">
                      These cookies are required for the website to function and
                      cannot be switched off in our systems. They are usually
                      only set in response to actions made by you, such as
                      setting your privacy preferences, logging in, or filling
                      out the calculation forms.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 bg-indigo-50 text-indigo-600 p-2 rounded-lg h-fit">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      Performance & Analytics Cookies
                    </h4>
                    <p className="text-[15px] text-slate-600 leading-relaxed">
                      These cookies allow us to count visits and traffic sources
                      so we can measure and improve the performance of our site.
                      They help us know which pages are the most and least
                      popular. All information these cookies collect is
                      aggregated and therefore completely anonymous.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 bg-purple-50 text-purple-600 p-2 rounded-lg h-fit">
                    <Settings className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      Functional Cookies
                    </h4>
                    <p className="text-[15px] text-slate-600 leading-relaxed">
                      These cookies enable the website to provide enhanced
                      functionality and personalization, such as remembering
                      your selected Canton (region) so you do not have to
                      re-enter it if you revisit the calculator.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Sec 3 */}
              <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-50 text-orange-600">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  3. Third-Party Cookies
                </h3>
                <p className="text-[16px] text-slate-600 leading-relaxed">
                  In some special cases, we also use cookies provided by trusted
                  third parties. For example, our site utilizes Google Analytics
                  to help us understand how you use the site and ways that we
                  can improve your experience. These cookies may track things
                  such as how long you spend on the site.
                </p>
              </div>

              {/* Sec 4 */}
              <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 text-slate-600">
                    <Settings className="w-5 h-5" />
                  </div>
                  4. Managing Preferences
                </h3>
                <p className="text-[16px] text-slate-600 leading-relaxed">
                  You can prevent the setting of cookies by adjusting the
                  settings on your browser. Be aware that disabling cookies will
                  affect the functionality of this website, usually disabling
                  certain interactive features of the calculator.
                </p>
              </div>
            </div>

            {/* Sec 5 */}
            <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                5. Contact Us
              </h3>
              <p className="text-[16px] text-slate-600 leading-relaxed mb-4">
                If you have any questions regarding our Cookie Policy, please
                contact our data team at
              </p>
              <a
                href="mailto:privacy@insurancecheck.ch"
                className="inline-flex font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                privacy@insurancecheck.ch &rarr;
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
