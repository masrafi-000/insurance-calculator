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
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("CookiePolicy");
  return {
    title: `${t("title")} | Insurance Check`,
    description: t("sections.whatAreCookies.body").slice(0, 160),
  };
}

export default async function CookiePolicyPage() {
  const t = await getTranslations("CookiePolicy");

  const cookieTypes = t.raw("sections.howWeUse.types") as {
    name: string;
    body: string;
  }[];

  const cookieTypeIcons = [
    { icon: Activity, bg: "bg-blue-50", text: "text-blue-600" },
    { icon: BarChart3, bg: "bg-indigo-50", text: "text-indigo-600" },
    { icon: Settings, bg: "bg-purple-50", text: "text-purple-600" },
  ];

  return (
    <div className="bg-[#fcfdfd] min-h-screen pt-24 pb-16">
      <Section className="py-8 md:py-12">
        <Container>
          <div className="mb-12 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 font-bold text-[13px] mb-6 border border-emerald-100/50">
              <Cookie className="w-4 h-4" />
              <span>{t("badge")}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              {t("title")}
            </h1>
            <p className="text-slate-500 text-lg">
              {t("effectiveDate")}: {new Date().getFullYear()}-01-01
            </p>
          </div>

          <div className="space-y-6">
            {/* Sec 1 – What Are Cookies */}
            <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600">
                  <HelpCircle className="w-5 h-5" />
                </div>
                {t("sections.whatAreCookies.heading")}
              </h3>
              <p className="text-[16px] text-slate-600 leading-relaxed">
                {t("sections.whatAreCookies.body")}
              </p>
            </div>

            {/* Sec 2 – How We Use Cookies */}
            <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                {t("sections.howWeUse.heading")}
              </h3>
              <p className="text-[16px] text-slate-600 leading-relaxed mb-6 border-b border-slate-100 pb-6">
                {t.rich("sections.howWeUse.intro", {
                  company: "Insurance Check",
                  strong: (chunks) => (
                    <strong className="text-slate-800">{chunks}</strong>
                  ),
                })}
              </p>

              <div className="space-y-6">
                {cookieTypes.map((type, i) => {
                  const {
                    icon: Icon,
                    bg,
                    text,
                  } = cookieTypeIcons[i] ?? cookieTypeIcons[0];
                  return (
                    <div key={i} className="flex gap-4">
                      <div
                        className={`mt-1 ${bg} ${text} p-2 rounded-lg h-fit`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">
                          {type.name}
                        </h4>
                        <p className="text-[15px] text-slate-600 leading-relaxed">
                          {type.body}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Grid: Sec 3 & 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Sec 3 – Third-Party Cookies */}
              <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-50 text-orange-600">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  {t("sections.thirdParty.heading")}
                </h3>
                <p className="text-[16px] text-slate-600 leading-relaxed">
                  {t("sections.thirdParty.body")}
                </p>
              </div>

              {/* Sec 4 – Managing Preferences */}
              <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 text-slate-600">
                    <Settings className="w-5 h-5" />
                  </div>
                  {t("sections.managing.heading")}
                </h3>
                <p className="text-[16px] text-slate-600 leading-relaxed">
                  {t("sections.managing.body")}
                </p>
              </div>
            </div>

            {/* Sec 5 – Contact */}
            <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {t("sections.contact.heading")}
              </h3>
              <p className="text-[16px] text-slate-600 leading-relaxed mb-4">
                {t("sections.contact.body")}
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
