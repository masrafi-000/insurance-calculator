"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Facebook, Github, ShieldCheck, Twitter } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Balancer from "react-wrap-balancer";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

import { ZCFooter, ZTFooter } from "@/validators/zod";
import Container from "../ui/container";
import Section from "../ui/section";
import { footerLinks } from "@/data/shared";
import { ITFooterLink } from "@/types/shared";



const Footer: React.FC = () => {
  const form = useForm<ZTFooter>({
    resolver: zodResolver(ZCFooter),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: ZTFooter) {
    console.log(values);
  }

  return (
    <footer className="border-t bg-background">
      <Section className="py-12 md:py-16">
        <Container className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link
              href="/"
              className="text-2xl font-bold flex gap-3 items-center tracking-wide text-foreground cursor-pointer"
            >
              <ShieldCheck className="w-8 h-8 text-primary" />
              Insurance Check
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              <Balancer>
                Empowering individuals with transparent, simple, and profitable
                insurance decisions through advanced analytics and
                Swiss-standard security.
              </Balancer>
            </p>
            <div className="flex gap-2 text-muted-foreground">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full hover:text-foreground"
              >
                <Github size={18} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full hover:text-foreground"
              >
                <Twitter size={18} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full hover:text-foreground"
              >
                <Facebook size={18} />
              </Button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 lg:col-start-6 flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-foreground tracking-tight">
              Navigation
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
              {footerLinks.map((link: ITFooterLink) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="hover:text-foreground transition-all duration-300 hover:translate-x-1 w-fit"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className="font-semibold text-foreground">Stay Protected</h3>
            <p className="text-sm text-muted-foreground">
              Join our newsletter to get the latest insights on insurance
              optimization.
            </p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="not-prose space-y-3 mt-2"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Your email address"
                          {...field}
                          className="bg-background rounded-full px-4 h-11"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full rounded-full h-11">
                  Subscribe
                </Button>
              </form>
            </Form>
          </div>
        </Container>

        <Container className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()}{" "}
            <Link
              href="/"
              className="hover:underline font-medium text-foreground"
            >
              Insurance Check
            </Link>
            . All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="hover:text-foreground transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </Container>
      </Section>
    </footer>
  );
};

export default Footer;
