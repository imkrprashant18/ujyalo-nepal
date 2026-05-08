import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { GradientButton } from "./GradientButton";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32 px-6">
      <div className="absolute inset-0 -z-10 animate-gradient-bg"
           style={{ background: "radial-gradient(ellipse at 50% 0%, oklch(0.83 0.13 70 / 0.35), transparent 55%), radial-gradient(ellipse at 80% 60%, oklch(0.72 0.19 50 / 0.18), transparent 50%)" }} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto text-center flex flex-col items-center"
      >
        <motion.div variants={item} className="relative mb-8">
          <div className="absolute inset-0 -z-10 blur-3xl rounded-full bg-gradient-flame opacity-40" />
          <img
            src="logo.png"
            alt="Ujyalo Nepal diya logo"
            width={140}
            height={140}
            className="h-32 w-32 md:h-40 md:w-40 animate-flame"
          />
        </motion.div>

        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-navy mb-6"
        >
          <Sparkles size={14} className="text-flame" />
          Empowering Communities Since 2020
        </motion.span>

        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-navy leading-[1.05] mb-6"
        >
          Lighting the <span className="text-gradient-flame">Future</span> of Nepal
        </motion.h1>

        <motion.p
          variants={item}
          className="text-base md:text-lg text-navy/70 max-w-2xl mb-10"
        >
          Bringing hope, opportunity, and lasting change to every corner of Nepal —
          one community, one project, one light at a time.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
          <GradientButton href="#cta">
            Get Started <ArrowRight size={18} />
          </GradientButton>
          <GradientButton href="#about" variant="ghost">
            Learn More
          </GradientButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
