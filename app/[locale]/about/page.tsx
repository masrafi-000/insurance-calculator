import AboutHero from "./_components/about-hero";
import OurMission from "./_components/our-mission";
import OurValues from "./_components/our-values";

export const metadata = {
  title: "About Us | Insurance Calculator",
  description:
    "Learn more about our mission to bring transparency to the Swiss insurance market.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <AboutHero />
      <OurMission />
      <OurValues />
    </main>
  );
}
