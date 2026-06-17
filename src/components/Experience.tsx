import { useInView } from 'react-intersection-observer';
import { ChevronDown } from 'lucide-react';

const Experience = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const experiences = [
    {
      company: 'Tata Steel',
      companyUrl: 'https://www.tatasteel.com/',
      position: 'AI/ML Intern',
      location: 'Tata Steel · Hybrid',
      locationUrl: 'https://www.google.com/maps/search/Tata+Steel',
      period: '2026',
      status: 'Live',
      logo: '/assets/tata-logo.svg',
      headerClass: 'bg-gradient-to-br from-[#081b29] via-[#003c71] to-[#005a9c]',
      logoStyle: 'rounded-xl object-contain bg-white p-2.5 shadow-[0_4px_15px_rgba(0,0,0,0.3)]',
      stats: [
        { value: 'Mar 2026', label: 'Start' },
        { value: 'Present', label: 'Status' },
        { value: '4+', label: 'Months' },
      ],
      description: 'Applying machine learning to forecast steel demand and visualize operational insights. Developed a regression-based construction prediction model and designed real-time dashboards for telemetry data.',
      tags: ['AI/ML', 'Demand Forecasting', 'Python', 'Telemetry'],
      tagHoverClass: 'hover:bg-blue-500/10 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/30',
    },
    {
      company: 'Tube Products of India (Murugappa Group)',
      companyUrl: 'https://tiindia.com/',
      position: 'AI Architect Intern',
      location: 'Murugappa Group · Avadi',
      locationUrl: 'https://maps.google.com/?q=Tube+Products+of+India+Avadi+Chennai',
      period: '2026',
      status: 'Done',
      logo: '/assets/murugappa-logo.avif',
      headerClass: 'bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]',
      logoStyle: 'rounded-xl object-cover shadow-[0_4px_15px_rgba(0,0,0,0.3)]',
      stats: [
        { value: 'Feb 2026', label: 'Start' },
        { value: 'May 2026', label: 'End' },
        { value: '4', label: 'Months' },
      ],
      description: 'AI-driven process monitoring and full-stack system architecture for industrial systems. Spearheaded the QR-enabled smart inventory system and deployed computer vision WET monitoring on Raspberry Pi.',
      tags: ['Full-Stack', 'QR Tracking', 'Firebase', 'Supabase', 'Raspberry Pi'],
      tagHoverClass: 'hover:bg-[#10b981]/10 hover:text-[#10b981] dark:hover:text-[#6ee7b7] hover:border-[#10b981]/30',
    },
    {
      company: 'Renault Nissan Automotive',
      companyUrl: 'https://www.renaultgroup.com/en/group/locations/chennai-plant/',
      position: 'RPA & Data Intern',
      location: 'RNAIPL · Chennai',
      locationUrl: 'https://maps.google.com/?q=Renault+Nissan+Automotive+India+Private+Limited+Oragadam',
      period: '2025',
      status: 'Done',
      logo: '/assets/renault-logo.png',
      headerClass: 'bg-gradient-to-br from-[#c0392b] via-[#922b21] to-[#1a1a2e]',
      logoStyle: 'object-contain',
      stats: [
        { value: 'Mar 2025', label: 'Start' },
        { value: 'Apr 2025', label: 'End' },
        { value: '2', label: 'Months' },
      ],
      description: 'Designed RPA workflows and custom data visualization solutions to automate manufacturing business processes. Engineered Excel Macros, Power Apps pipelines, and interactive Power BI dashboards.',
      tags: ['RPA', 'Excel Macros', 'Power BI', 'Power Apps', 'Automation'],
      tagHoverClass: 'hover:bg-red-500/10 hover:text-red-500 dark:hover:text-red-400 hover:border-red-500/30',
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-28 bg-transparent transition-colors duration-500 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.01] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none transition-colors duration-500" />
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-xs sm:text-sm font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest mb-2 select-none">
              My Journey
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white transition-colors duration-500 tracking-tight">
              Experience
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto">
            {experiences.map((exp, idx) => {
              const isOngoing = exp.status === 'Live';
              return (
                <div
                  key={idx}
                  className="group relative bg-slate-50 dark:bg-[#0a0a0b] border border-slate-200/60 dark:border-white/[0.04] rounded-[1.75rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] flex flex-col"
                >
                  {/* Card Header */}
                  <div className={`p-7 pb-6 relative text-white ${exp.headerClass} flex flex-col`}>
                    <div className="flex justify-between items-center mb-5 select-none">
                      {isOngoing ? (
                        <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#10b981]/25 border border-[#10b981]/40 text-[#6ee7b7] animate-pulse">
                          ● Live
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-blue-500/20 border border-blue-500/35 text-[#93c5fd]">
                          ✓ Done
                        </span>
                      )}
                      <span className="text-[11px] font-semibold opacity-60 tracking-widest uppercase">
                        {exp.period}
                      </span>
                    </div>

                    <div className="w-[65px] h-[65px] flex items-center justify-center mb-5 select-none">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className={`w-full h-full ${exp.logoStyle} transition-transform duration-300 group-hover:scale-110`}
                      />
                    </div>

                    <h3 className="text-xl font-extrabold text-white mb-1.5 leading-tight min-h-[56px] flex items-end">
                      {exp.position}
                    </h3>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm font-bold text-white/85 hover:text-white hover:underline hover:underline-offset-2 transition-colors mb-0.5 line-clamp-1"
                    >
                      {exp.company} ↗
                    </a>
                    <a
                      href={exp.locationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-xs text-white/60 hover:text-white/90 transition-colors"
                    >
                      {exp.location}
                    </a>
                  </div>

                  {/* Card Body */}
                  <div className="p-7 pt-6 pb-7 flex-1 flex flex-col">
                    {/* Stats Row */}
                    <div className="flex items-center bg-white dark:bg-[#121214] border border-slate-200 dark:border-white/[0.04] rounded-xl p-3.5 mb-5 select-none">
                      {exp.stats.map((stat, sIdx) => (
                        <div key={sIdx} className="flex-1 flex items-center">
                          <div className="flex-1 flex flex-col items-center gap-0.5">
                            <span className="text-[13px] font-bold text-slate-800 dark:text-white transition-colors duration-500">
                              {stat.value}
                            </span>
                            <span className="text-[10px] text-slate-400 dark:text-gray-500 font-semibold uppercase tracking-wider">
                              {stat.label}
                            </span>
                          </div>
                          {sIdx < exp.stats.length - 1 && (
                            <div className="w-px h-8 bg-slate-200 dark:bg-white/[0.04] shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 dark:text-gray-400 transition-colors duration-500 leading-relaxed mb-6 flex-1">
                      {exp.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4 select-none">
                      {exp.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className={`px-3 py-1 bg-white dark:bg-[#121214] border border-slate-200 dark:border-white/[0.04] rounded-full text-[11px] font-semibold text-slate-500 dark:text-gray-400 transition-all duration-300 cursor-default ${exp.tagHoverClass}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-16 select-none">
            <a
              href="#certifications"
              className="animate-bounce flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#121214] text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-white transition-colors duration-300"
              aria-label="Scroll to Certifications"
            >
              <ChevronDown size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;