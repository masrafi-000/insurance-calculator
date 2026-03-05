import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { Database, Info, Lock, ShieldCheck, UserCheck } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("PrivacyPolicy");
  return {
    title: `${t("title")} | Insurance Check`,
    description: t("sections.intro.body", { company: "Insurance Check" }).slice(
      0,
      160,
    ),
  };
}

export default async function PrivacyPolicyPage() {
  const t = await getTranslations("PrivacyPolicy");

  const dataItems = t.raw("sections.dataCollect.items") as {
    label: string;
    text: string;
  }[];
  const dataUseItems = t.raw("sections.dataUse.items") as string[];

  return (
    <div className="bg-[#fcfdfd] min-h-screen pt-24 pb-16">
      <Section className="py-8 md:py-12">
        <Container>
          <div className="mb-12 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-[13px] mb-6 border border-blue-100/50">
              <ShieldCheck className="w-4 h-4" />
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
            {/* Sec 1 – Introduction */}
            <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600">
                  <Info className="w-5 h-5" />
                </div>
                {t("sections.intro.heading")}
              </h3>
              <p className="text-[16px] text-slate-600 leading-relaxed">
                {t.rich("sections.intro.body", {
                  company: "Insurance Check",
                  strong: (chunks) => (
                    <strong className="text-slate-800">{chunks}</strong>
                  ),
                })}
              </p>
            </div>

            {/* Sec 2 – Data We Collect */}
            <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600">
                  <Database className="w-5 h-5" />
                </div>
                {t("sections.dataCollect.heading")}
              </h3>
              <p className="text-[16px] text-slate-600 leading-relaxed mb-4">
                {t("sections.dataCollect.intro")}
              </p>
              <ul className="space-y-3">
                {dataItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <p className="text-[16px] text-slate-600">
                      <strong className="text-slate-800">{item.label}</strong>{" "}
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sec 3 – How We Use Your Data */}
            <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                {t("sections.dataUse.heading")}
              </h3>
              <p className="text-[16px] text-slate-600 leading-relaxed mb-4">
                {t("sections.dataUse.intro")}
              </p>
              <ul className="space-y-3 mb-6">
                {dataUseItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <p className="text-[16px] text-slate-600">{item}</p>
                  </li>
                ))}
              </ul>
              <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 inline-block w-full">
                <p className="text-[15px] text-blue-900 leading-relaxed">
                  <strong className="font-bold">
                    {t("sections.dataUse.noSell")}
                  </strong>{" "}
                  {t("sections.dataUse.noSellNote")}
                </p>
              </div>
            </div>

            {/* Sec 4 & 5 – Security + Your Rights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600">
                    <Lock className="w-5 h-5" />
                  </div>
                  {t("sections.security.heading")}
                </h3>
                <p className="text-[16px] text-slate-600 leading-relaxed">
                  {t("sections.security.body")}
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  {t("sections.rights.heading")}
                </h3>
                <p className="text-[16px] text-slate-600 leading-relaxed mb-4">
                  {t("sections.rights.body")}
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
