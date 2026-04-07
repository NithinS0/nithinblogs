import { lazy, Suspense, Component } from 'react';
import type { ReactNode } from 'react';
import { Github, Linkedin, Instagram, Twitter, ChevronDown, Sparkles } from 'lucide-react';

const ThreeCanvas = lazy(() =>
  import('./HeroCanvas').catch(() => ({ default: () => null }))
);

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

const Hero = () => {
  const socialLinks = [
    { icon: Github,    url: 'https://github.com/NithinS0',                   label: 'GitHub',    color: 'hover:text-[#2ea44f]' },
    { icon: Linkedin,  url: 'https://linkedin.com/in/nithin01',              label: 'LinkedIn',  color: 'hover:text-[#0077b5]' },
    { icon: Instagram, url: 'https://www.instagram.com/nithinsivakumar',     label: 'Instagram', color: 'hover:text-[#e4405f]' },
    { icon: Twitter,   url: 'https://x.com/SNithin_/',                       label: 'Twitter',   color: 'hover:text-[#1da1f2]' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050810]">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <ErrorBoundary>
          <Suspense fallback={null}>
            <ThreeCanvas />
          </Suspense>
        </ErrorBoundary>
      </div>

      {/* Decorative overlays */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050810]/20 via-transparent to-[#050810]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(59,130,246,0.08)_0%,transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full px-4 sm:px-6 text-center">
        <div className="max-w-5xl mx-auto">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 sm:mb-8 backdrop-blur-md">
            <Sparkles size={14} className="text-blue-400" />
            <span className="text-blue-300 text-xs sm:text-sm font-semibold tracking-wide uppercase">
              AI Architect &amp; ML Practitioner
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black mb-4 sm:mb-6 tracking-tighter leading-none">
            <span className="block text-white opacity-90">NITHIN</span>
            <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              SIVAKUMAR
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-base sm:text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-10 px-2">
            Building the next generation of{' '}
            <span className="text-white">intelligent systems</span>{' '}
            through Research &amp; Development in Artificial Intelligence.
          </p>

          {/* Socials */}
          <div className="flex justify-center items-center gap-3 sm:gap-5 mb-8 sm:mb-12">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`group p-3 sm:p-4 bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/10 text-gray-400 ${s.color}`}
              >
                <s.icon size={18} className="sm:w-[22px] sm:h-[22px] transition-transform group-hover:scale-110" />
              </a>
            ))}
          </div>

          {/* Actions — native anchor links, no DOM calls */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 px-4">
            <a
              href="#projects"
              className="group relative w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-blue-600 rounded-xl sm:rounded-2xl text-white font-bold transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] overflow-hidden text-sm sm:text-base text-center"
            >
              <span className="relative z-10">EXPLORE WORK</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-white/5 hover:bg-white/10 rounded-xl sm:rounded-2xl text-white font-bold border border-white/10 transition-all duration-300 backdrop-blur-md text-sm sm:text-base text-center"
            >
              CONTACT ME
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator — anchor link */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 text-gray-500 hover:text-white transition-colors animate-bounce p-2"
      >
        <ChevronDown size={28} className="sm:w-8 sm:h-8" />
      </a>
    </section>
  );
};

export default Hero;