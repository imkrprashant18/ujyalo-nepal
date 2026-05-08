import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Section } from "./Section";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${Math.floor(v).toLocaleString()}${suffix}`);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { value: 10000, suffix: "+", label: "People Reached" },
  { value: 50, suffix: "+", label: "Active Projects" },
  { value: 32, suffix: "", label: "Districts Served" },
  { value: 120, suffix: "+", label: "Volunteers" },
];

export function Stats() {
  return (
    <Section id="impact">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-semibold tracking-widest text-flame uppercase">
          Our Impact
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-navy mt-3">
          Measurable change, <span className="text-gradient-flame">made together</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div
            key={s.label}
            className="glass rounded-2xl p-8 text-center shadow-soft"
          >
            <div className="text-4xl md:text-5xl font-extrabold text-gradient-flame font-display">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="text-sm md:text-base text-navy/70 mt-2 font-medium">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
