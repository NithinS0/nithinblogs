import { useInView } from 'react-intersection-observer';
import { ExternalLink, Mail, MapPin, Coffee, Code2, Cpu, Globe } from 'lucide-react';

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const stats = [
    { value: '3+',   label: 'Industry Internships', icon: '🏭' },
    { value: '6+',   label: 'AI Projects',          icon: '🤖' },
    { value: '99%',  label: 'Model Accuracy',        icon: '🎯' },
    { value: '2027', label: 'Graduating',            icon: '🎓' },
  ];

  const traits = [
    { icon: Cpu,    label: 'Deep Learning',   desc: 'CNNs, RNNs, Transformers', color: 'text-blue-400',    bg: 'bg-blue-500/10'   },
    { icon: Code2,  label: 'Full-Stack AI',   desc: 'FastAPI, React, Firebase',  color: 'text-purple-400',  bg: 'bg-purple-500/10' },
    { icon: Globe,  label: 'Industrial AI',   desc: 'Real-world deployments',    color: 'text-emerald-400', bg: 'bg-emerald-500/10'},
    { icon: Coffee, label: 'Always Learning', desc: 'Research & Open Source',    color: 'text-amber-400',   bg: 'bg-amber-500/10'  },
  ];

  const timeline = [
    { year: '2023', event: 'Started B.Tech in Artificial Intelligence @ SRM University' },
    { year: '2025', event: 'RPA & Data Intern @ Renault Nissan Automotive India' },
    { year: '2026', event: 'AI Architect Intern @ Murugappa Group' },
    { year: '2026', event: 'AI/ML Intern @ Tata Steel (Ongoing)' },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#050810] relative overflow-hidden">
      {/* Ambient BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 md:w-[500px] md:h-[500px] bg-blue-600/5 rounded-full blur-[120px] -mr-40 -mt-20" />
        <div className="absolute bottom-0 left-0 w-72 h-72 md:w-[400px] md:h-[400px] bg-purple-600/5 rounded-full blur-[120px] -ml-40 -mb-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-12 md:mb-16">
            <div className="w-8 h-px bg-blue-500" />
            <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em]">About Me</span>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          {/* Layout: stacked on mobile, 3-col on desktop */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">

            {/* ═══ COL 1 — Profile photo (clear, no overlay text) ═══ */}
            <div className="w-full sm:w-72 lg:w-64 xl:w-72 flex-shrink-0 mx-auto sm:mx-0">
              {/* Glow ring */}
              <div className="relative group">
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-br from-blue-600/30 to-purple-600/20 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Clean photo — NO text inside */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20">
                  <img
                    src="/Photo.jpeg"
                    alt="Nithin Sivakumar"
                    className="w-full aspect-[3/4] object-cover object-top block group-hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Name + title BELOW photo, outside the image */}
              <div className="mt-5 text-center">
                <h2 className="text-xl font-black text-white tracking-tight">Nithin Sivakumar</h2>
                <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mt-1">AI Engineer</p>
                <div className="flex items-center justify-center gap-1.5 mt-2 text-gray-500">
                  <MapPin size={12} />
                  <span className="text-xs font-medium">Chennai, India</span>
                </div>
                {/* Availability */}
                <div className="flex items-center justify-center gap-1.5 mt-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                  <span className="text-emerald-400 text-xs font-semibold">Open to Opportunities</span>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex gap-3 mt-5">
                <a
                  href="https://drive.google.com/file/d/1OIxHFcB3wsg_3qRoeoLsBWMmthQvXZVx/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-2xl shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 text-sm"
                >
                  <ExternalLink size={14} />
                  Resume
                </a>
                <a
                  href="mailto:nithin200511@gmail.com"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl transition-all hover:-translate-y-0.5 text-sm"
                >
                  <Mail size={14} />
                  Email
                </a>
              </div>
            </div>

            {/* ═══ COL 2 — Bio + Stats ═══ */}
            <div className="flex-1 min-w-0 space-y-5">
              {/* Bio card */}
              <div className="rounded-3xl bg-gradient-to-br from-[#0d1224] to-[#111827] p-6 sm:p-7 shadow-lg">
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3 leading-tight">
                  Decoding the{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    Complex
                  </span>
                </h2>

                <p className="text-gray-400 leading-relaxed text-sm sm:text-base mb-5">
                  I'm a final-year{' '}
                  <span className="text-white font-semibold">B.Tech AI student</span> at SRM University
                  passionate about transforming data into production-grade intelligence. I've shipped AI
                  solutions across{' '}
                  <span className="text-blue-400 font-medium">inventory management</span>,{' '}
                  <span className="text-blue-400 font-medium">medical imaging</span>, and{' '}
                  <span className="text-blue-400 font-medium">industrial automation</span>.
                </p>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {['Python', 'TensorFlow', 'React', 'FastAPI', 'LangChain', 'Docker'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-white/[0.06] text-gray-300 text-xs font-semibold hover:bg-blue-500/15 hover:text-blue-300 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Story */}
                <div className="p-4 rounded-2xl bg-white/5 text-sm text-gray-400 leading-relaxed">
                  <span className="text-white font-semibold">My Story: </span>
                  From a{' '}
                  <span className="text-white font-medium">QR-based Smart Inventory System</span> for
                  Murugappa Group to a{' '}
                  <span className="text-white font-medium">99%-accurate lung cancer detector</span>{' '}
                  — I engineer AI that ships in the real world.
                </div>
              </div>

              {/* Stats 2×2 */}
              <div className="grid grid-cols-2 gap-3">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all"
                  >
                    <span className="text-2xl">{s.icon}</span>
                    <div>
                      <p className="text-xl font-black text-white leading-none">{s.value}</p>
                      <p className="text-gray-500 text-xs font-medium mt-0.5 leading-tight">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ═══ COL 3 — Traits + Timeline + Availability ═══ */}
            <div className="flex-1 min-w-0 space-y-5">
              {/* What I Do */}
              <div>
                <h3 className="text-white font-black text-base mb-4">What I Do</h3>
                <div className="grid grid-cols-2 gap-3">
                  {traits.map((t, i) => (
                    <div
                      key={i}
                      className={`flex flex-col gap-2.5 p-4 rounded-2xl ${t.bg} transition-all hover:-translate-y-0.5 group`}
                    >
                      <t.icon size={20} className={`${t.color} group-hover:scale-110 transition-transform`} />
                      <div>
                        <p className={`font-bold text-sm ${t.color}`}>{t.label}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{t.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Journey */}
              <div className="rounded-2xl bg-white/5 p-5">
                <h3 className="text-white font-black text-base mb-5">Journey</h3>
                <div className="relative space-y-0">
                  <div className="absolute left-[18px] top-3 bottom-3 w-px bg-gradient-to-b from-blue-500/50 via-indigo-500/20 to-transparent" />
                  {timeline.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 pb-5 last:pb-0 group">
                      <div className="flex-shrink-0 w-[36px] flex justify-center mt-1">
                        <div
                          className={`w-2 h-2 rounded-full transition-all group-hover:scale-125 ${
                            i === timeline.length - 1
                              ? 'bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.7)]'
                              : 'bg-white/20'
                          }`}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-black text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md">
                          {item.year}
                        </span>
                        <p className="text-gray-400 text-xs sm:text-sm mt-1 leading-relaxed group-hover:text-gray-200 transition-colors">
                          {item.event}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability — anchor link, no DOM */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-emerald-500/10">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                  <div>
                    <p className="text-emerald-300 font-bold text-sm">Available Now</p>
                    <p className="text-emerald-600 text-xs">Open to internships &amp; collaborations</p>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="text-emerald-400 text-xs font-bold hover:text-emerald-300 transition-colors underline underline-offset-4 whitespace-nowrap"
                >
                  Let's talk →
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;