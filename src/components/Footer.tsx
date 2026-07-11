import { useState, useEffect } from "react";
import { Github, Linkedin, Instagram, Twitter, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsApp = ({ size = 16, className }: { size?: number; className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    width={size} 
    height={size}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "GitHub", id: "github" },
  { label: "Experience", id: "experience" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];

const socialLinks = [
  { icon: Github, url: "https://github.com/NithinS0", label: "GitHub" },
  {
    icon: Linkedin,
    url: "https://linkedin.com/in/nithin01",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/nithinsivakumar",
    label: "Instagram",
  },
  { icon: Twitter, url: "https://x.com/SNithin_/", label: "Twitter" },
  { icon: WhatsApp, url: "https://wa.me/919042645273", label: "WhatsApp" },
];

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showSocial, setShowSocial] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollTop(window.scrollY > 300);
      setShowSocial(window.scrollY > 200);
    };
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-transparent border-t border-slate-200 dark:border-[#2a2a2e] transition-colors duration-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8">
          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm font-semibold text-slate-500 dark:text-[#a0a0a8] hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-full h-px bg-slate-200 dark:bg-white/5 transition-colors duration-500" />

          {/* Bottom Row */}
          <div className="w-full relative flex flex-col sm:flex-row justify-center items-center gap-4">
            <p className="text-gray-500 text-xs font-semibold tracking-wider uppercase text-center">
              © 2026 Nithin Sivakumar. All Rights Reserved.
            </p>
            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className={`w-11 h-11 rounded-full border border-slate-200 dark:border-[#2a2a2e] bg-slate-50 dark:bg-[#121214] flex items-center justify-center text-slate-500 dark:text-[#a0a0a8] hover:bg-slate-950 dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-slate-950 dark:hover:border-white transition-all duration-300 hover:-translate-y-1 shadow-md dark:shadow-lg shadow-black/5 dark:shadow-black/20 sm:absolute sm:right-0 ${
                showScrollTop
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-75 pointer-events-none"
              }`}
              aria-label="Back to Top"
            >
              <ChevronUp size={20} />
            </button>
          </div>
        </div>
      </footer>

      {/* Floating Vertical Social Stack (Bottom Right) */}
      <AnimatePresence>
        {showSocial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 select-none"
          >
            {socialLinks.map((s) => (
              <motion.a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                layoutId={`social-${s.label}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full border border-slate-200/80 dark:border-white/[0.08] bg-white/95 dark:bg-[#0c0f18]/95 backdrop-blur-md flex items-center justify-center text-slate-500 dark:text-[#a0a0a8] hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                <s.icon size={16} />
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
