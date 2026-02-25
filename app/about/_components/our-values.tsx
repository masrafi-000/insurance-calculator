import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { companyValues } from "@/data/shared";
import { ITValue } from "@/types/shared";
import { HeartHandshake } from "lucide-react";

export default function OurValues() {
  return (
    <Section className="bg-background relative">
      <Container>
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            <HeartHandshake className="w-4 h-4" />
            <span>Our Principles</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Values That Drive Us
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything we do is guided by a core set of principles designed to
            ensure you get the most honest, secure, and helpful service
            possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyValues.map((value: ITValue, index) => (
            <div
              key={index}
              className="group flex flex-col p-8 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/30 hover:bg-muted/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <value.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
