import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";


const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#cta" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between rounded-2xl transition-all duration-300 ${
          scrolled ? "glass shadow-soft py-3" : "py-2"
        }`}
      >
        <a href="#" className="flex items-center gap-2">
          <img src="logo.png" alt="Ujyalo Nepal logo" width={36} height={36} className="h-9 w-9" />
          <span className="font-display font-bold text-lg text-navy">
            Ujyalo <span className="text-gradient-flame">Nepal</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-navy/80 hover:text-flame transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            className="bg-gradient-flame text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-glow hover:scale-105 transition-transform"
          >
            Get Started
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 text-navy"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mx-6 mt-2 glass rounded-2xl p-4 flex flex-col gap-3 shadow-soft"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-navy font-medium py-2"
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
