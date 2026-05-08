
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-flame rounded-3xl opacity-20 blur-2xl" />
          <img
            src="/about.jpg"
            alt="Traditional Nepali village glowing at dusk"
            width={1024}
            height={768}
            loading="lazy"
            className="relative rounded-3xl shadow-soft object-cover w-full h-[420px]"
          />
        </div>
        <div>
          <span className="text-xs font-semibold tracking-widest text-flame uppercase">
            About Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mt-3 mb-6">
            Igniting change across <span className="text-gradient-flame">Nepal</span>.
          </h2>
          <p className="text-navy/70 text-base md:text-lg leading-relaxed mb-4">
            Ujyalo Nepal is a community-driven initiative dedicated to bringing light,
            education, and sustainable development to underserved regions. Inspired by
            the timeless symbol of the diya, we believe a single flame can illuminate
            countless lives.
          </p>
          <p className="text-navy/70 text-base md:text-lg leading-relaxed">
            From rural electrification to youth empowerment, our work is rooted in
            compassion, transparency, and lasting impact.
          </p>
        </div>
      </div>
    </Section>
  );
}
