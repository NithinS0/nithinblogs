import { useState, useEffect } from 'react';
import { Menu, X, Terminal, FileText } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certification' },
  { id: 'contact', label: 'Contact' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const ids = navItems.map((n) => n.id);
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile drawer on any anchor click
  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-2 sm:py-3' : 'py-4 sm:py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className={`flex justify-between items-center px-4 sm:px-6 py-3 rounded-xl sm:rounded-2xl transition-all duration-500 ${scrolled
            ? 'bg-[#080d1a]/90 backdrop-blur-2xl border border-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
            }`}>

            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                <Terminal size={16} className="sm:w-[18px] sm:h-[18px]" />
              </div>
              <span className="text-base sm:text-lg font-black text-white tracking-tighter">
                NITHIN <span className="text-blue-400">S</span>
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative px-3 lg:px-4 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-xl ${activeSection === item.id
                    ? 'text-white bg-white/8'
                    : 'text-gray-500 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-400 rounded-full" />
                  )}
                </a>
              ))}

              <a
                href="https://drive.google.com/file/d/1OIxHFcB3wsg_3qRoeoLsBWMmthQvXZVx/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-black rounded-xl shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 uppercase tracking-widest"
              >
                <FileText size={13} />
                Resume
              </a>

              <a
                href="#contact"
                className="ml-1 px-4 py-2.5 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-black rounded-xl border border-white/10 transition-all uppercase tracking-widest"
              >
                Hiring?
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white hover:bg-white/8 rounded-xl transition-all"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 bg-[#080d1a]/98 backdrop-blur-3xl border-l border-white/8 shadow-2xl transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="p-6 pt-20 space-y-1">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 p-2 text-gray-400 hover:text-white"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>

          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleLinkClick}
              className={`flex w-full items-center py-3.5 px-4 text-sm font-bold rounded-xl transition-all ${activeSection === item.id
                ? 'text-white bg-blue-500/15 border border-blue-500/20'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
            >
              {item.label}
            </a>
          ))}

          <div className="pt-4 border-t border-white/8 mt-4 space-y-3">
            <a
              href="https://drive.google.com/file/d/1OIxHFcB3wsg_3qRoeoLsBWMmthQvXZVx/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="flex items-center justify-center gap-2 w-full py-3.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-black rounded-xl"
            >
              <FileText size={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="flex w-full items-center justify-center py-3.5 px-4 bg-white/5 text-gray-300 text-sm font-bold rounded-xl border border-white/10"
            >
              Hiring? Let's Talk
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;