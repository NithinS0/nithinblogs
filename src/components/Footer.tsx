import { useState, useEffect } from "react";
import { Github, Linkedin, Instagram, Twitter, ChevronUp } from "lucide-react";

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
];

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
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

        {/* Social Icons */}
        <div className="flex gap-4">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-[#2a2a2e] bg-slate-50 dark:bg-[#121214] flex items-center justify-center text-slate-500 dark:text-[#a0a0a8] hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/5 transition-all duration-300"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>

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
  );
};

export default Footer;
