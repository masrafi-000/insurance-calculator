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
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("TermsOfService");
  return {
    title: `${t("title")} | Insurance Check`,
    description: t("sections.intro.body", { company: "Insurance Check" }).slice(
      0,
      160,
    ),
  };
}

export default async function TermsOfServicePage() {
  const t = await getTranslations("TermsOfService");

  const conductItems = t.raw("sections.conduct.items") as string[];

  return (
    <div className="bg-[#fcfdfd] min-h-screen pt-24 pb-16">
      <Section className="py-8 md:py-12">
        <Container>
          <div className="mb-12 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 font-bold text-[13px] mb-6 border border-slate-200">
              <Scale className="w-4 h-4" />
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
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 text-slate-600">
                  <FileText className="w-5 h-5" />
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

            {/* Sec 2 – Nature of Service */}
            <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 text-slate-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                {t("sections.nature.heading")}
              </h3>
              <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
                {t("sections.nature.body")}
              </p>

              <div className="bg-orange-50 rounded-xl p-5 border border-orange-100 flex gap-4">
                <AlertTriangle className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-orange-900 mb-2">
                    {t("sections.nature.disclaimerTitle")}
                  </h4>
                  <p className="text-[15px] text-orange-800 leading-relaxed">
                    {t("sections.nature.disclaimerBody")}
                  </p>
                </div>
              </div>
            </div>

            {/* Sec 3 – User Conduct */}
            <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 text-slate-600">
                  <Users className="w-5 h-5" />
                </div>
                {t("sections.conduct.heading")}
              </h3>
              <p className="text-[16px] text-slate-600 leading-relaxed mb-4">
                {t("sections.conduct.intro")}
              </p>
              <ul className="space-y-3">
                {conductItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                    <p className="text-[16px] text-slate-600">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Grid: Sec 4 & 5 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Sec 4 – Intellectual Property */}
              <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 text-slate-600">
                    <Copyright className="w-5 h-5" />
                  </div>
                  {t("sections.ip.heading")}
                </h3>
                <p className="text-[16px] text-slate-600 leading-relaxed">
                  {t("sections.ip.body")}
                </p>
              </div>

              {/* Sec 5 – Limitation of Liability */}
              <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 text-slate-600">
                    <Scale className="w-5 h-5" />
                  </div>
                  {t("sections.liability.heading")}
                </h3>
                <p className="text-[16px] text-slate-600 leading-relaxed">
                  {t("sections.liability.body")}
                </p>
              </div>
            </div>

            {/* Sec 6 – Changes & Contact */}
            <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 md:items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {t("sections.changes.heading")}
                </h3>
                <p className="text-[15px] text-slate-600 leading-relaxed max-w-xl">
                  {t("sections.changes.body")}
                </p>
              </div>
              <a
                href="mailto:legal@insurancecheck.ch"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors shrink-0"
              >
                <Mail className="w-4 h-4" />
                {t("sections.changes.contactButton")}
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
