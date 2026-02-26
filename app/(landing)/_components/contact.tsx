import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { contactInfo } from "@/data/shared";
import { ITContactInfo } from "@/types/shared";
import { HeadphonesIcon } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contact" className="bg-background">
      <Container>
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            <HeadphonesIcon className="w-4 h-4" />
            <span>{`We're Here to Help`}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have questions about our calculator or need assistance with your
            insurance policy? Our dedicated support team is ready to help you
            navigate your options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-4">
          {contactInfo.map((info: ITContactInfo, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-muted/50 border border-border/50 hover:border-primary/20 hover:bg-muted transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <info.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {info.title}
              </h3>
              <p className="text-lg font-medium text-foreground mb-1">
                {info.details}
              </p>
              <p className="text-sm text-muted-foreground">
                {info.description}
              </p>
            </div>
          ))}
        </div>

        {/* <div className="flex flex-col items-center border-t border-border/50 pt-12">
          <h3 className="text-lg font-medium text-foreground mb-6">
            Connect With Us
          </h3>
          <div className="flex gap-4">
            {socialMedia.map((social: ITSocialMedia, index) => (
              <Link
                key={index}
                href={social.href}
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div> */}
      </Container>
    </Section>
  );
}
