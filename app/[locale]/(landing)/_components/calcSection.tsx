"use client";

import Container from "@/components/ui/container";
import GoogleAd from "@/components/ui/google-ad";
import Section from "@/components/ui/section";
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import InsuranceCalculator from "./insurance-calculator";

interface AdContent {
  title: string;
  desc?: string;
  price?: string;
  img: string;
}

const FormSection: React.FC = () => {
  const t = useTranslations("Calculator.Section");
  const tAd = useTranslations("Calculator.Ads");
  const tGoogle = useTranslations("Calculator.GoogleAds");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <Section className=" py-8 bg-linear-to-br from-blue-50 via-blue-50/50 to-blue-100/50 dark:from-primary/10 dark:via-background dark:to-primary/10">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Animated Heading Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 font-medium text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>{t("badge")}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">
              {t("title")}
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
              {t("description")}
            </p>
          </motion.div>

          {/* TOP SECTION: 3 Advertisement Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            <div>
              <TopAdCard
                title={tAd("0.title")}
                desc={tAd("0.desc")}
                price={tAd("0.price")}
                img="https://images.unsplash.com/photo-1494976388531-d1058494cdd8"
              />
            </div>
            <div>
              <TopAdCard
                title={tAd("1.title")}
                desc={tAd("1.desc")}
                price={tAd("1.price")}
                img="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
              />
            </div>
            <div>
              <TopAdCard
                title={tAd("2.title")}
                desc={tAd("2.desc")}
                price={tAd("2.price")}
                img="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57"
              />
            </div>
          </motion.div>

          <div className="flex flex-col xl:flex-row gap-5 lg:gap-8 w-full items-start">
            {/* LEFT SIDEBAR: Sponsored Picks & Google Ad */}
            <motion.aside
              variants={itemVariants}
              className="w-full xl:w-[280px]  gap-5 shrink-0 order-2 xl:order-1 flex-col  md:flex md:flex-row xl:flex-col sticky top-24 h-max"
            >
              <div className="relative w-full">
                <GoogleAd
                  slot="6837505817" // leftside-1
                  className="rounded-2xl"
                />
              </div>

              <div className="relative w-full">
                <GoogleAd
                  slot="6454362434" // leftside-2
                  className="rounded-2xl"
                />
              </div>
            </motion.aside>

            {/* MAIN CONTENT: Calculator */}
            <motion.div
              variants={itemVariants}
              className="grow order-1 xl:order-2 w-full mx-auto"
            >
              {/* The Calculator Form Component */}
              <InsuranceCalculator />

              <div className="h-px bg-slate-200/60 w-full my-12" />

              {/* BOTTOM SECTION: Company Cards */}
              <div>
                <h3 className="text-[16px] font-black text-slate-800 mb-6 flex items-center gap-2 uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  {t("partnersTitle")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {(
                    t.raw("partners") as {
                      name: string;
                      rating: string;
                      quote: string;
                      color: string;
                      logo: string;
                    }[]
                  ).map((company, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <CompanyCard {...company} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDEBAR (Hidden on small screens) */}
            <motion.aside
              variants={itemVariants}
              className="w-full xl:w-[280px] flex-col gap-5 shrink-0 order-3 hidden xl:flex sticky top-24 h-max"
            >
              <div className="relative w-full">
                <GoogleAd
                  slot="6262790740" // right-site-1
                  className="rounded-2xl"
                />
              </div>
              <div className="relative w-full">
                <GoogleAd
                  slot="5044243699" // right-site-2
                  className="rounded-2xl "
                />
              </div>
            </motion.aside>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

/* --- Optimized Sub-Components --- */

const TopAdCard: React.FC<AdContent> = ({ title, desc, price, img }) => (
  <div className="relative h-48 md:h-56 rounded-3xl overflow-hidden group cursor-pointer shadow-sm">
    <Image
      src={`${img}?auto=format&fit=crop&q=80&w=800`}
      alt={title}
      fill
      className="object-cover transition-transform duration-1000 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-center px-8 sm:px-10">
      <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-2">
        <TranslatedAdLabel />
      </span>
      <h4 className="text-white text-xl sm:text-2xl font-extrabold mb-1">
        {title}
      </h4>
      <p className="text-slate-300 text-sm max-w-[280px] leading-relaxed mb-3">
        {desc}
      </p>
      {price && (
        <span className="inline-block bg-blue-600/90 text-white text-xs font-bold px-3 py-1 rounded-full w-max backdrop-blur-md">
          {price}
        </span>
      )}
    </div>
  </div>
);

const CompanyCard: React.FC<{
  name: string;
  rating: string;
  quote: string;
  color: string;
  logo: string;
}> = ({ name, rating, quote, color, logo }) => (
  <div
    className={`p-6 bg-[#fcfdfd] rounded-[24px] border border-slate-100 shadow-sm transition-all hover:shadow-md relative overflow-hidden group h-full flex flex-col`}
  >
    <div className={`absolute top-0 left-0 w-full h-1 ${color} opacity-80`} />
    <div className="flex justify-between items-start mb-4 pt-1">
      <div className="relative w-14 h-14 rounded-[14px] overflow-hidden border border-slate-100 bg-white shadow-sm flex items-center justify-center p-1.5 shrink-0">
        <Image src={logo} alt={name} fill className="object-contain p-2" />
      </div>
      <div className="text-right">
        <p className="text-[13px] font-bold text-slate-900">{name}</p>
        <div className="flex items-center justify-end gap-1 mt-0.5">
          <p className="text-[11px] font-bold text-slate-600">{rating}</p>
          <span className="text-[10px]">⭐</span>
        </div>
      </div>
    </div>
    <p className="text-[13px] text-slate-500 leading-relaxed mb-6 grow">{`"${quote}"`}</p>
    <button className="w-full mt-auto py-2.5 bg-white border border-slate-200 rounded-xl text-[12px] font-bold text-slate-700 group-hover:bg-slate-50 group-hover:border-slate-300 transition-all active:scale-95">
      <TranslatedDetailsLabel />
    </button>
  </div>
);

const TranslatedAdLabel = () => {
  const t = useTranslations("Calculator.Section");
  return <>{t("adsFeatured")}</>;
};

const TranslatedDetailsLabel = () => {
  const t = useTranslations("Calculator.Section");
  return <>{t("viewDetails")}</>;
};

export default FormSection;
