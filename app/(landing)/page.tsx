import Contact from "./_components/contact";
import Hero from "./_components/hero";
import HowItWorks from "./_components/how-it-works";
import InsuranceCalculator from "./_components/insurance-claculator";

export default function Home() {
  return (
    <>
      <Hero />
      <InsuranceCalculator />
      <HowItWorks />
      <Contact />
    </>
  );
}
