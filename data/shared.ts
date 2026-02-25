import {
  ITContactInfo,
  ITFooterLink,
  ITNavItems,
  ITSocialMedia,
  ITStat,
  ITSteps,
  ITValue,
} from "@/types/shared";

export const footerLinks: ITFooterLink[] = [
  { title: "Home", href: "/" },
  { title: "Calculator", href: "/calculate" },
  { title: "How It Works", href: "/#how-it-works" },
  { title: "About Us", href: "/about" },
  { title: "Contact", href: "/contact" },
  { title: "FAQ", href: "/faq" },
];

export const navItems: ITNavItems[] = [
  { name: "Home", href: "/" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Contact", href: "#contact" },
  { name: "About Us", href: "/about" },
];

import { Calculator, CheckCircle, FileText } from "lucide-react";

export const steps: ITSteps[] = [
  {
    id: "01",
    title: "Share Your Policy",
    description:
      "Enter the details of your current insurance securely. We adhere to strict Swiss privacy standards, ensuring your data is fully protected and never shared.",
    icon: FileText,
  },
  {
    id: "02",
    title: "Advanced Analysis",
    description:
      "Our calculator compares your premiums and coverage against the market to determine if your current policy is truly profitable for your needs.",
    icon: Calculator,
  },
  {
    id: "03",
    title: "Get Smart Results",
    description:
      "Receive instant, no-obligation suggestions for better, more cost-effective insurance alternatives tailored just for you.",
    icon: CheckCircle,
  },
];

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export const contactInfo: ITContactInfo[] = [
  {
    icon: Phone,
    title: "Phone Support",
    details: "+41 (0) 44 123 45 67",
    description: "Mon-Fri from 8am to 5pm CET",
  },
  {
    icon: Mail,
    title: "Email Support",
    details: "support@insurancecalc.ch",
    description: "We'll typically reply within 24 hours",
  },
  {
    icon: MapPin,
    title: "Headquarters",
    details: "Zurich, Switzerland",
    description: "Bahnhofstrasse 100, 8001 Zurich",
  },
];

export const socialMedia: ITSocialMedia[] = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
];

import { Shield, Target, Users, Zap } from "lucide-react";

export const companyValues: ITValue[] = [
  {
    title: "Transparency",
    description:
      "We believe in clear, unbiased comparisons without hidden complications or complex jargon.",
    icon: Target,
  },
  {
    title: "Security & Privacy",
    description:
      "Your data is protected under strict Swiss privacy laws. We ensure full confidentiality.",
    icon: Shield,
  },
  {
    title: "Customer First",
    description:
      "Our recommendations are tailored strictly to what benefits you and your financial goals the most.",
    icon: Users,
  },
  {
    title: "Innovation",
    description:
      "We leverage advanced algorithms to quickly identify the best insurance opportunities for you.",
    icon: Zap,
  },
];

export const aboutStats: ITStat[] = [
  { value: "10K+", label: "Policies Analyzed" },
  { value: "CHF 5M+", label: "Savings Identified" },
  { value: "99%", label: "Customer Satisfaction" },
  { value: "24/7", label: "Expert Support" },
];
