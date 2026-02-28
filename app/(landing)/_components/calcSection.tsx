"use client";

import Container from "@/components/ui/container";
import GoogleAd from "@/components/ui/google-ad";
import Section from "@/components/ui/section";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import InsuranceCalculator from "./insurance-calculator";

// Types for our data structures
interface AdContent {
  title: string;
  desc?: string;
  price?: string;
  img: string;
}

interface CompanyContent {
  name: string;
  rating: string;
  quote: string;
  color: string;
  logo: string;
}

const leftSidebarAds: AdContent[] = [
  {
    title: "Term Life Insurance",
    price: "Starts $10/mo",
    img: "https://images.unsplash.com/photo-1511895426328-dc8714191300",
  },
  {
    title: "Pet Health Plans",
    price: "Top Rated 2026",
    img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
  },
  {
    title: "Travel Protection",
    price: "Global Coverage",
    img: "https://images.unsplash.com/photo-1556740714-a8395b3bf30f",
  },
];
const rightSidebarAds: AdContent[] = [
  {
    title: "Senior Care Giving",
    price: "Medicare Supplement",
    img: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57",
  },
  {
    title: "Dental & Vision",
    price: "Family Packages",
    img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95",
  },
  {
    title: "Business Liability",
    price: "Get Quotes Fast",
    img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
  },
];

const partners: CompanyContent[] = [
  {
    name: "State Farm",
    rating: "4.8/5",
    quote: "Like a good neighbor, State Farm is there.",
    color: "border-red-600",
    logo: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=100",
  },
  {
    name: "Progressive",
    rating: "4.7/5",
    quote: "Find the best rate with our Name Your Price tool.",
    color: "border-blue-700",
    logo: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=100",
  },
  {
    name: "Geico",
    rating: "4.9/5",
    quote: "15 minutes could save you 15% or more.",
    color: "border-blue-400",
    logo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=100",
  },
];

const FormSection: React.FC = () => {
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
    <Section id="calculator" className="bg-background py-8">
      <Container className="w-full">
        {/* Animated Heading Section */}
        <motion.div
          className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: 0.1,
            }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 font-medium text-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Interactive Tool</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">
            Estimation & Analysis
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
            Test your current insurance costs against our profitability
            algorithms and see instant, real-time results.
          </p>
        </motion.div>

        {/* TOP SECTION: 3 Advertisement Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={itemVariants}>
            <TopAdCard
              title="Premium Auto Savings"
              desc="Drivers who switch to our partners save an average of $744/year."
              price="Up to 30% Off"
              img="https://images.unsplash.com/photo-1494976388531-d1058494cdd8"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <TopAdCard
              title="Homeowners Special"
              desc="Exclusive 2026 rates for new homeowners. Complete coverage."
              price="From $49/mo"
              img="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <TopAdCard
              title="Life Insurance Plus"
              desc="Secure your family's future with our top-rated term life policies."
              price="Instant Approval"
              img="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57"
            />
          </motion.div>
        </motion.div>

        <div className="flex flex-col xl:flex-row gap-4 lg:gap-8 w-full">
          {/* LEFT SIDEBAR: Sponsored Picks & Google Ad */}
          <aside className="xl:w-[280px] flex-col gap-4 shrink-0 order-2 xl:order-1 hidden md:flex">
            <motion.div
              className="bg-slate-50 rounded-3xl p-6 border border-slate-100"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.3,
              }}
            >
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">
                Sponsored Picks
              </h3>
              <motion.div
                className="flex flex-col gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {leftSidebarAds.slice(0, 3).map((ad, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    }}
                  >
                    <SideAdCard {...ad} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Google Ad Component */}
            <motion.div
              className="sticky top-24"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.5,
              }}
            >
              <GoogleAd
                // client="ca-pub-XXXXXXXXXXXXXXXX"
                // slot="1234567890"
                className="rounded-2xl"
                fallbackImg="https://images.unsplash.com/photo-1556740714-a8395b3bf30f"
                fallbackText="Local Family Plans"
              />
            </motion.div>
          </aside>

          {/* MAIN CONTENT: Calculator */}
          <motion.div
            className="grow order-1 xl:order-2 w-full mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 20,
              delay: 0.2,
            }}
          >
            {/* The Calculator Form Component */}
            <InsuranceCalculator />

            <div className="h-px bg-slate-200/60 w-full my-12" />

            {/* BOTTOM SECTION: Company Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.h3
                variants={itemVariants}
                className="text-[16px] font-black text-slate-800 mb-6 flex items-center gap-2 uppercase tracking-wide"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Partner Carriers
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {partners.map((company, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{
                      y: -5,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      },
                    }}
                  >
                    <CompanyCard {...company} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDEBAR (Hidden on small screens) */}
          <aside className="xl:w-[280px] flex-col gap-4 shrink-0 order-3 hidden xl:flex">
            <motion.div
              className="bg-slate-50 rounded-3xl p-6 border border-slate-100"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.3,
              }}
            >
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">
                Sponsored Picks
              </h3>
              <motion.div
                className="flex flex-col gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {rightSidebarAds.slice(0, 3).map((ad, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    }}
                  >
                    <SideAdCard {...ad} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Google Ad Component */}
            <motion.div
              className="sticky top-24"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.5,
              }}
            >
              <GoogleAd
                // client="ca-pub-XXXXXXXXXXXXXXXX"
                // slot="1234567890"
                className="rounded-2xl h-[400px]"
                fallbackImg="https://images.unsplash.com/photo-1544256718-3bcf237f3974"
                fallbackText="Exclusive Health Benefits"
              />
            </motion.div>
          </aside>
        </div>
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
        Featured Ad
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

const SideAdCard: React.FC<AdContent> = ({ title, price, img }) => (
  <div className="bg-white p-2.5 rounded-2xl border border-slate-100 flex items-center gap-3 hover:border-blue-200 transition-all cursor-pointer shadow-sm group">
    <div className="relative w-14 h-14 shrink-0 rounded-xl overflow-hidden bg-slate-100">
      <Image
        src={`${img}?auto=format&fit=crop&q=60&w=200`}
        alt={title}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    <div className="overflow-hidden">
      <h5 className="text-[13px] font-bold text-slate-800 group-hover:text-blue-600 truncate transition-colors">
        {title}
      </h5>
      <p className="text-[12px] text-slate-500 mt-0.5">{price}</p>
    </div>
  </div>
);

const CompanyCard: React.FC<CompanyContent> = ({
  name,
  rating,
  quote,
  color,
  logo,
}) => (
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
      View Details
    </button>
  </div>
);

export default FormSection;
