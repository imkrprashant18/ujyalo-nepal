import { motion } from "framer-motion";
import { Lightbulb, GraduationCap, Leaf, HeartHandshake } from "lucide-react";
import { Section } from "./Section";

const services = [
  {
    icon: Lightbulb,
    title: "Rural Electrification",
    desc: "Bringing clean, sustainable energy to off-grid villages across Nepal.",
  },
  {
    icon: GraduationCap,
    title: "Education Access",
    desc: "Scholarships, schools, and digital learning for the next generation.",
  },
  {
    icon: Leaf,
    title: "Sustainable Living",
    desc: "Eco-friendly farming, clean water, and climate-resilient programs.",
  },
  {
    icon: HeartHandshake,
    title: "Community Care",
    desc: "Healthcare drives and social support for the most vulnerable.",
  },
];

export function Services() {
  return (
    <Section id="services">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-semibold tracking-widest text-flame uppercase">
          What We Do
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-navy mt-3">
          Programs that <span className="text-gradient-flame">spark change</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group relative glass rounded-2xl p-6 shadow-soft transition-all hover:shadow-glow"
          >
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-flame text-white mb-5 shadow-glow group-hover:scale-110 transition-transform">
              <s.icon size={22} />
            </div>
            <h3 className="text-lg font-semibold text-navy mb-2">{s.title}</h3>
            <p className="text-sm text-navy/70 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
