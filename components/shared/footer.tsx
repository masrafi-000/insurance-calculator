"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Variants, motion } from "framer-motion";
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

import { footerLinks } from "@/data/shared";
import { ITFooterLink } from "@/types/shared";
import { ZCFooter, ZTFooter } from "@/validators/zod";
import Container from "../ui/container";
import Section from "../ui/section";

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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <footer className="border-t bg-background overflow-hidden">
      <Section className="py-12 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Container className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
            {/* Brand Column */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-4 flex flex-col gap-6"
            >
              <Link
                href="/"
                className="text-2xl font-bold flex gap-3 items-center tracking-wide text-foreground cursor-pointer group"
              >
                <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 group-hover:bg-primary transition-colors duration-300">
                  <ShieldCheck className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <span>Insurance Check</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                <Balancer>
                  Empowering individuals with transparent, simple, and
                  profitable insurance decisions through advanced analytics and
                  Swiss-standard security.
                </Balancer>
              </p>
              <div className="flex gap-2 text-muted-foreground">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Github size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Twitter size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Facebook size={20} />
                </Button>
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-3 lg:col-start-6 flex flex-col gap-6"
            >
              <h3 className="text-lg font-semibold text-foreground tracking-tight">
                Navigation
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                {footerLinks.map((link: ITFooterLink) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="hover:text-primary transition-colors duration-300 w-fit relative group flex items-center"
                  >
                    <span className="absolute -left-3 opacity-0 group-hover:opacity-100 group-hover:left-0 transition-all duration-300 text-primary">
                      ›
                    </span>
                    <span className="group-hover:translate-x-3 transition-transform duration-300">
                      {link.title}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Newsletter Form */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-4 flex flex-col gap-4"
            >
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
                            className="bg-muted/50 border-border focus-visible:ring-primary rounded-xl px-4 h-12 transition-all hover:bg-muted"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full rounded-xl h-12 shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
                  >
                    Subscribe
                  </Button>
                </form>
              </Form>
            </motion.div>
          </Container>

          <motion.div variants={itemVariants}>
            <Container className="mt-16 pt-8 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
              <p>
                © {new Date().getFullYear()}{" "}
                <Link
                  href="/"
                  className="hover:text-primary font-medium text-foreground transition-colors"
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
          </motion.div>
        </motion.div>
      </Section>
    </footer>
  );
};

export default Footer;
