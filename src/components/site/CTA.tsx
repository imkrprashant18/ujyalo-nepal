import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "./Section";

export function CTA() {
  return (
    <Section id="cta">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-flame p-10 md:p-16 text-center shadow-glow"
      >
        <div className="absolute inset-0 opacity-20 mix-blend-overlay"
             style={{ background: "radial-gradient(circle at 20% 20%, white, transparent 40%), radial-gradient(circle at 80% 80%, white, transparent 40%)" }} />
        <h2 className="relative text-3xl md:text-5xl font-extrabold text-white max-w-2xl mx-auto leading-tight">
          Be the spark. Light up a life today.
        </h2>
        <p className="relative text-white/90 mt-4 max-w-xl mx-auto">
          Join Ujyalo Nepal as a donor, partner, or volunteer — and help us carry
          the flame to every village.
        </p>
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="relative inline-flex items-center gap-2 mt-8 bg-white text-flame font-semibold px-8 py-3.5 rounded-2xl shadow-soft"
        >
          Join the Movement <ArrowRight size={18} />
        </motion.a>
      </motion.div>
    </Section>
  );
}
