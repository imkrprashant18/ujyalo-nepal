// import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";


export function Footer() {
  return (
    <footer className="px-6 md:px-10 pb-10">
      <div className="max-w-7xl mx-auto glass rounded-3xl p-8 md:p-12 shadow-soft">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="logo.png" alt="" width={36} height={36} className="h-9 w-9" loading="lazy" />
              <span className="font-display font-bold text-lg text-navy">
                Ujyalo <span className="text-gradient-flame">Nepal</span>
              </span>
            </div>
            <p className="text-sm text-navy/70 max-w-sm">
              Lighting the future of Nepal through community, sustainability,
              and unwavering hope.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-navy mb-3">Explore</h4>
            <ul className="space-y-2 text-sm text-navy/70">
              <li><a href="#about" className="hover:text-flame">About</a></li>
              <li><a href="#services" className="hover:text-flame">Services</a></li>
              <li><a href="#impact" className="hover:text-flame">Impact</a></li>
              <li><a href="#cta" className="hover:text-flame">Get Involved</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-navy mb-3">Connect</h4>
            <div className="flex gap-3">
              {/* {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="h-10 w-10 inline-flex items-center justify-center rounded-xl glass text-navy hover:bg-gradient-flame hover:text-white transition-all"
                >
                  <Icon size={18} />
                </a>
              ))} */}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-navy/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-navy/60">
          <p>© {new Date().getFullYear()} Ujyalo Nepal. All rights reserved.</p>
          <p>Made with warmth in Kathmandu.</p>
        </div>
      </div>
    </footer>
  );
}
