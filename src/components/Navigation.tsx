import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Sun, Moon } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'github', label: 'GitHub' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certification' },
  { id: 'contact', label: 'Contact' },
];

// ─────────────────────────────────────────────────────
//  Premium Sun / Moon icon toggle (no pill, no labels)
// ─────────────────────────────────────────────────────
const ThemeToggle = ({
  theme,
  toggleTheme,
  buttonRef,
}: {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  buttonRef: React.RefObject<HTMLButtonElement>;
}) => {
  const isDark = theme === 'dark';

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="relative flex-shrink-0 focus:outline-none cursor-pointer"
      style={{ width: 38, height: 38 }}
    >
      {/* ── Animated glow background ── */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        animate={
          isDark
            ? {
                background: 'radial-gradient(circle at 50% 50%, #1e3a5f 0%, #0f172a 100%)',
                boxShadow:
                  '0 0 14px 3px rgba(56,189,248,0.18), inset 0 1px 0 rgba(255,255,255,0.06)',
              }
            : {
                background: 'radial-gradient(circle at 50% 50%, #fef3c7 0%, #fde68a 100%)',
                boxShadow:
                  '0 0 14px 3px rgba(251,191,36,0.30), inset 0 1px 0 rgba(255,255,255,0.5)',
              }
        }
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      />

      {/* ── Border ring ── */}
      <motion.div
        className="absolute inset-0 rounded-xl border"
        animate={
          isDark
            ? { borderColor: 'rgba(56,189,248,0.2)' }
            : { borderColor: 'rgba(251,191,36,0.45)' }
        }
        transition={{ duration: 0.5 }}
      />

      {/* ── Icon swap with rotation ── */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-xl">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="sun"
              initial={{ opacity: 0, rotate: -90, scale: 0.4 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.4 }}
              transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
              className="flex items-center justify-center"
            >
              <Sun
                size={18}
                strokeWidth={2}
                className="text-sky-300"
                style={{ filter: 'drop-shadow(0 0 4px rgba(56,189,248,0.7))' }}
              />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ opacity: 0, rotate: 90, scale: 0.4 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.4 }}
              transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
              className="flex items-center justify-center"
            >
              <Moon
                size={17}
                strokeWidth={2}
                className="text-amber-600"
                style={{ filter: 'drop-shadow(0 0 4px rgba(217,119,6,0.6))' }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </button>
  );
};

// ─────────────────────────────────────────────────────
//  Navigation
// ─────────────────────────────────────────────────────
const Navigation = ({ activeSection, setActiveSection }: { activeSection: string, setActiveSection: (s: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'dark';
  });

  // Ref for ripple origin
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const ids = navItems.map((n) => n.id);
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [setActiveSection]);

  // ── Smooth circular-reveal theme toggle ──────────────
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    // Ripple origin: centre of the toggle button
    const btn = toggleBtnRef.current;
    const rect = btn?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth - 60;
    const y = rect ? rect.top + rect.height / 2 : 28;
    const maxR = Math.ceil(
      Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))
    );

    const applyTheme = () => {
      setTheme(nextTheme);
      if (nextTheme === 'light') {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#fafafc');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#050810');
      }
    };

    // ① Use View Transitions API (Chrome 111+, Safari 18+)
    //   — Browser snapshots old + new frames, then we drive the circular
    //     clip-path reveal on ::view-transition-new(root). No overlay div
    //     needed; it's entirely GPU-composited at 60-120 fps.
    if ('startViewTransition' in window.document) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const vt = (document as any).startViewTransition(applyTheme);

      vt.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${maxR}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 420,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',   // ease-out-expo
            pseudoElement: '::view-transition-new(root)',
          }
        );
      });

      return;
    }

    // ② Fallback: manual clip-path ripple (Firefox)
    const overlayBg = nextTheme === 'dark' ? '#050810' : '#fafafc';
    const overlay = document.createElement('div');
    Object.assign(overlay.style, {
      position: 'fixed',
      inset: '0',
      zIndex: '9998',
      background: overlayBg,
      clipPath: `circle(0px at ${x}px ${y}px)`,
      pointerEvents: 'none',
      willChange: 'clip-path',
    });
    document.body.appendChild(overlay);

    overlay.animate(
      [
        { clipPath: `circle(0px at ${x}px ${y}px)` },
        { clipPath: `circle(${maxR}px at ${x}px ${y}px)` },
      ],
      { duration: 420, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' }
    );

    // Apply theme at ~40 % so the switch is always behind the overlay
    const t1 = setTimeout(applyTheme, 168);
    // Remove overlay shortly after expand completes
    const t2 = setTimeout(() => overlay.remove(), 460);

    return () => { clearTimeout(t1); clearTimeout(t2); };
  };


  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'py-2 sm:py-3' : 'py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            className={`flex justify-between items-center px-4 sm:px-6 py-3 rounded-xl sm:rounded-2xl transition-all duration-500 ${
              scrolled
                ? 'bg-white/90 dark:bg-black/10 backdrop-blur-2xl border border-slate-200/80 dark:border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-none'
                : 'bg-transparent'
            }`}
          >
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                <Terminal size={16} className="sm:w-[18px] sm:h-[18px]" />
              </div>
              <span className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tighter">
                NITHIN <span className="text-blue-500 dark:text-blue-400">S</span>
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative px-3 lg:px-4 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-xl ${
                    activeSection === item.id
                      ? 'text-slate-900 bg-slate-100 dark:text-white dark:bg-white/[0.08]'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-500 dark:bg-blue-400 rounded-full" />
                  )}
                </a>
              ))}

              <div className="pl-3 border-l border-slate-200 dark:border-white/10 ml-2">
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} buttonRef={toggleBtnRef} />
              </div>
            </div>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center gap-3">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} buttonRef={toggleBtnRef} />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-700 hover:bg-slate-100 dark:text-white dark:hover:bg-white/[0.08] rounded-xl transition-all"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 bg-white/[0.98] border-l border-slate-200 dark:bg-black/30 dark:backdrop-blur-2xl dark:border-l dark:border-white/[0.08] shadow-2xl transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 pt-20 space-y-1">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>

          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleLinkClick}
              className={`flex w-full items-center py-3.5 px-4 text-sm font-bold rounded-xl transition-all ${
                activeSection === item.id
                  ? 'text-blue-600 bg-blue-500/10 border border-blue-500/20 dark:text-white dark:bg-blue-500/[0.15] dark:border-blue-500/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/5'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;