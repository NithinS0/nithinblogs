import { Github, Linkedin, Instagram, Twitter, Heart, Terminal } from 'lucide-react';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Resume', id: 'resume' },
  { label: 'Contact', id: 'contact' },
];

const socialLinks = [
  { icon: Github, url: 'https://github.com/NithinS0', label: 'GitHub' },
  { icon: Linkedin, url: 'https://linkedin.com/in/nithin01', label: 'LinkedIn' },
  { icon: Instagram, url: 'https://www.instagram.com/nithinsivakumar', label: 'Instagram' },
  { icon: Twitter, url: 'https://x.com/SNithin_/', label: 'Twitter' },
];

const Footer = () => (
  <footer className="bg-[#050810] border-t border-white/5 pt-12 md:pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">

        {/* Brand */}
        <div className="col-span-2 space-y-5">
          <a href="#home" className="flex items-center gap-2.5 group w-fit">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
              <Terminal size={18} />
            </div>
            <span className="text-xl font-black text-white tracking-tighter">
              NITHIN <span className="text-blue-500">S</span>
            </span>
          </a>
          <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
            Designing and developing industrial-grade AI architectures and full-stack intelligent systems.
          </p>
          <div className="flex gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <h4 className="text-white font-bold tracking-widest uppercase text-xs">Navigation</h4>
          <nav className="grid grid-cols-1 gap-2.5">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-gray-500 hover:text-blue-400 transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="text-white font-bold tracking-widest uppercase text-xs">Contact</h4>
          <div className="space-y-3">
            <p className="text-gray-500 text-sm leading-relaxed">
              Chennai, Tamil Nadu<br />India
            </p>
            <a
              href="mailto:nithin200511@gmail.com"
              className="block text-white font-bold text-sm hover:text-blue-400 transition-colors break-all"
            >
              nithin200511@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-gray-600 text-xs font-medium tracking-widest uppercase text-center sm:text-left">
          © 2026 Nithin Sivakumar. All Rights Reserved.
        </p>
        <div className="flex items-center gap-1.5 text-gray-600 text-xs font-bold tracking-widest uppercase">
          MADE WITH <Heart size={12} className="text-red-500 animate-pulse mx-1" /> IN INDIA
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;