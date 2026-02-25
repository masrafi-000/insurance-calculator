import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { aboutStats } from "@/data/shared";
import { ITStat } from "@/types/shared";

export default function OurMission() {
  return (
    <Section className="bg-muted/30 border-t border-b">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
              Our Mission
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
               {` Navigating the insurance landscape can often feel overwhelming,
                with complex policies and hidden fees making it difficult to
                know if you're getting a fair deal. Our mission is to change
                that.`}
              </p>
              <p>
                We built this platform to bring radical transparency to the
                industry. By combining advanced data analytics with strict Swiss
                data protection standards, we provide you with a clear, unbiased
                view of your current insurance standing versus the market.
              </p>
              <p>
                {`Whether you're looking to save money, improve your coverage, or
                simply gain peace of mind, our tools are designed to put the
                power back in your hands.`}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {aboutStats.map((stat: ITStat, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-8 border border-border/50 shadow-sm text-center flex flex-col justify-center items-center"
              >
                <div className="text-4xl md:text-5xl font-black text-primary mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
