import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
  onClick?: () => void;
};

export function GradientButton({ children, variant = "primary", href, onClick }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm md:text-base font-semibold transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-gradient-flame text-white shadow-glow hover:shadow-[0_25px_70px_-15px_oklch(0.72_0.19_50/0.7)]"
      : "glass text-navy hover:bg-white";

  const Comp = motion.a;
  return (
    <Comp
      href={href ?? "#"}
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${styles}`}
    >
      {children}
    </Comp>
  );
}
