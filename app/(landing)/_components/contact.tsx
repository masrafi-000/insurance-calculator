"use client";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { contactInfo } from "@/data/shared";
import { ITContactInfo } from "@/types/shared";
import { Variants, motion } from "framer-motion";
import { HeadphonesIcon } from "lucide-react";

export default function Contact() {
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

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
  };

  return (
    <Section
      id="contact"
      className="relative py-20 overflow-hidden bg-slate-50"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] mix-blend-multiply pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16 md:mb-20"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-slate-100 text-blue-600 font-bold text-sm mb-6 uppercase tracking-wider"
          >
            <HeadphonesIcon className="w-4 h-4" />
            <span>We&apos;re Here to Help</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-slate-900 leading-tight">
            How can we{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
              assist
            </span>{" "}
            you?
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Have questions about our calculator or need assistance with your
            insurance policy? Our expert Swiss support team is ready to help you
            navigate your options.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {contactInfo.map((info: ITContactInfo, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="group relative bg-white flex flex-col items-center text-center p-10 rounded-3xl border border-slate-100 shadow-sm overflow-hidden cursor-pointer"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-linear-to-b from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <motion.div
                className="relative z-10 w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 shadow-inner"
                whileHover={{ scale: 1.1, rotate: [-2, 2, 0] }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="absolute inset-0 bg-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <info.icon className="w-9 h-9 text-blue-600 group-hover:text-white relative z-20 transition-colors duration-300 stroke-[1.5]" />
              </motion.div>

              <h3 className="relative z-10 text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                {info.title}
              </h3>
              <p className="relative z-10 text-[17px] font-semibold text-blue-600 mb-2">
                {info.details}
              </p>
              <p className="relative z-10 text-[15px] text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
                {info.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
