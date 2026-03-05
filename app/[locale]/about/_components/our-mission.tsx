import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { useTranslations } from "next-intl";

export default function OurMission() {
  const t = useTranslations("AboutPage.OurMission");
  return (
    <Section className="bg-muted/30 border-t border-b">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
              {t("title")}
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>{t("p1")}</p>
              <p>{t("p2")}</p>
              <p>{t("p3")}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-8 border border-border/50 shadow-sm text-center flex flex-col justify-center items-center"
              >
                <div className="text-4xl md:text-5xl font-black text-primary mb-2 tracking-tight">
                  {t(`stats.${index}.value`)}
                </div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {t(`stats.${index}.label`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
