import {
  Github, Linkedin, Instagram, Twitter,
  ChevronDown, Sparkles, FileText, ArrowRight,
  MapPin,
} from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Github,    url: 'https://github.com/NithinS0',                        label: 'GitHub',    color: 'hover:border-[#2ea44f]/50 hover:text-[#2ea44f]' },
    { icon: Linkedin,  url: 'https://linkedin.com/in/nithin01',                   label: 'LinkedIn',  color: 'hover:border-[#0077b5]/50 hover:text-[#0077b5]' },
    { icon: Instagram, url: 'https://www.instagram.com/nithinsivakumar',          label: 'Instagram', color: 'hover:border-[#e4405f]/50 hover:text-[#e4405f]' },
    { icon: Twitter,   url: 'https://x.com/SNithin_/',                            label: 'Twitter',   color: 'hover:border-[#1da1f2]/50 hover:text-[#1da1f2]' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent transition-colors duration-500"
    >
      {/* Gradient overlays */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Linear fog overlay to soften the 3D canvas */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fafafc]/60 via-transparent to-[#fafafc] dark:from-[#050810]/70 dark:via-transparent dark:to-[#050810]" />
        {/* Radial fog centered on text column (75% X, 50% Y) to ensure crisp legibility */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(250,250,252,0.85)_0%,rgba(250,250,252,0)_65%)] dark:bg-[radial-gradient(circle_at_75%_50%,rgba(5,8,16,0.9)_0%,rgba(5,8,16,0)_65%)]" />
        {/* Accent glow left */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/8 dark:bg-blue-600/12 rounded-full blur-3xl -translate-x-1/2" />
        {/* Accent glow right */}
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-500/6 dark:bg-purple-600/10 rounded-full blur-3xl translate-x-1/2" />
      </div>

      {/* ──────────────── Content ──────────────── */}
      <div className="relative z-20 w-full px-4 sm:px-6 py-28 lg:py-0">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24 lg:pl-10">

          {/* ═══════════════════════════════════════
              LEFT — Photo column (moved here)
          ═══════════════════════════════════════ */}
          <div className="w-full sm:w-[300px] lg:w-[340px] flex-shrink-0 flex flex-col items-center">

            {/* Outer decorative ring */}
            <div className="relative group w-full">

              {/* Rotating gradient border */}
              <div
                className="absolute -inset-[3px] rounded-[2.2rem] opacity-60 dark:opacity-80 blur-sm group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background:
                    'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
                  animation: 'spin 6s linear infinite',
                }}
              />

              {/* White/dark gap ring */}
              <div className="absolute -inset-[2px] rounded-[2rem] bg-[#fafafc] dark:bg-[#050810]" />

              {/* Photo card */}
              <div className="relative rounded-[1.8rem] overflow-hidden shadow-2xl shadow-blue-900/10 dark:shadow-blue-900/25">
                <img
                  src="/Photo.jpeg"
                  alt="Nithin Sivakumar"
                  className="w-full aspect-[3/4] object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                />

                {/* Gradient overlay at bottom of photo */}
                <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Location chip inside photo */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-semibold">
                  <MapPin size={11} />
                  Chennai, India
                </div>

              </div>
            </div>

            {/* Social links below photo */}
            <div className="flex items-center justify-center gap-3 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`group p-2.5 bg-slate-100 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 transition-all duration-300 hover:-translate-y-1 text-slate-500 dark:text-gray-400 ${s.color}`}
                >
                  <s.icon size={17} className="transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* ═══════════════════════════════════════
              RIGHT — Text & CTA
          ═══════════════════════════════════════ */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Role badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 dark:border-blue-400/20 mb-6 backdrop-blur-md">
              <Sparkles size={13} className="text-blue-600 dark:text-blue-400" />
              <span className="text-blue-700 dark:text-blue-300 text-xs font-bold tracking-widest uppercase">
                AI Engineer · SRM University
              </span>
            </div>

            {/* Name */}
            <h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-5 tracking-tighter leading-[0.92]"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              <span className="block text-slate-900 dark:text-white transition-colors duration-500">
                NITHIN
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                SIVAKUMAR
              </span>
            </h1>

            {/* Divider line */}
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-5 lg:ml-0 mx-auto" />

            {/* Tagline */}
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed max-w-lg mb-8">
              Teaching computers how to think so I don't have to. Turning neural networks
              into production-grade AI systems — one inference at a time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">

              {/* Primary */}
              <a
                href="#projects"
                className="group relative w-full sm:w-[200px] flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_28px_rgba(99,102,241,0.45)] hover:-translate-y-0.5 overflow-hidden"
              >
                <span className="relative z-10">Explore Work</span>
                <ArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              {/* Resume */}
              <a
                href="https://drive.google.com/file/d/1OIxHFcB3wsg_3qRoeoLsBWMmthQvXZVx/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-[200px] flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_28px_rgba(168,85,247,0.4)] hover:-translate-y-0.5 overflow-hidden"
              >
                <FileText size={16} className="relative z-10" />
                <span className="relative z-10">Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 text-slate-400 hover:text-blue-500 dark:text-gray-600 dark:hover:text-blue-400 transition-colors animate-bounce p-2"
      >
        <ChevronDown size={28} />
      </a>

      {/* Conic spin keyframe */}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
};

export default Hero;