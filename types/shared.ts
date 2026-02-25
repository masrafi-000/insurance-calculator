import { LucideIcon } from "lucide-react";

export interface ITFooterLink {
  title: string;
  href: string;
}

export interface ITNavItems {
  name: string;
  href: string;
}

export interface ITSteps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ITValue {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ITStat {
  value: string;
  label: string;
}

export interface ITContactInfo {
  icon: LucideIcon;
  title: string;
  details: string;
  description: string;
}

export interface ITSocialMedia {
  name: string;
  icon: LucideIcon;
  href: string;
}
