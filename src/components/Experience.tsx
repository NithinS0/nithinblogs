import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';

const Experience = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const experiences = [
    {
      company: 'Tata Steel',
      position: 'AI/ML Intern',
      location: 'Hybrid',
      period: 'Mar 2026 – Present',
      description: 'Applying machine learning to forecast steel demand and visualize operational insights.',
      achievements: [
        'Built a construction prediction model for steel demand forecasting using regression and time-series analysis.',
        'Developing real-time dashboards for KPI monitoring and actionable insights.',
        'Collaborating with cross-functional teams to integrate predictive models into production.',
        'Optimizing data pipelines for real-time telemetry processing.',
      ],
    },
    {
      company: 'Murugappa Group',
      subCompany: 'Tubes Products of India, Avadi',
      position: 'AI Architect Intern',
      location: 'On-site',
      period: 'Feb 2026 – Present',
      description: 'AI-driven process monitoring and full-stack system architecture for industrial applications.',
      achievements: [
        'Spearheaded the "Murugappa Smart Inventory System" — a full-stack QR-enabled platform.',
        'Implemented role-based access control and GPS-based movement logging.',
        'Integrated Firebase for authentication and Supabase for database management.',
        'Developed AI solution for WET process monitoring using Raspberry Pi 4.',
      ],
    },
    {
      company: 'Renault Nissan Automotive',
      subCompany: 'India Private Limited',
      position: 'RPA & Data Intern',
      location: 'On-site',
      period: 'Mar 2025 – Apr 2025',
      description: 'Designed RPA workflows and data visualization tools to automate business processes.',
      achievements: [
        'Developed and optimized Excel Macros to streamline reporting tasks.',
        'Built interactive Power BI dashboards for key business metrics.',
        'Created Power Apps to support data handling and process efficiency.',
        'Minimized manual workflow through automation and data-driven solutions.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#0a0f1e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          {/* Header */}
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Career <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Trajectory</span>
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative space-y-8 sm:space-y-12 before:absolute before:inset-0 before:ml-4 sm:before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative flex items-start md:items-center justify-start md:justify-normal md:odd:flex-row-reverse group transform transition-all duration-500 ${inView ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/10 bg-[#0a0f1e] text-white shadow md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-20 transition-all duration-300 group-hover:scale-125 group-hover:bg-blue-600 group-hover:border-blue-500 mt-1 md:mt-0">
                  <Briefcase size={14} className="sm:w-[18px] sm:h-[18px]" />
                </div>

                {/* Card */}
                <div className="ml-5 sm:ml-8 md:ml-0 w-full md:w-[calc(50%-2.5rem)] p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#151b2d]/60 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                  {/* Card header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-lg sm:text-2xl font-black text-white group-hover:text-blue-400 transition-colors">{exp.position}</h3>
                      <div className="flex items-center gap-2 text-blue-300 font-bold mt-1 text-sm sm:text-base">
                        <Building2 size={15} />
                        <span>{exp.company}</span>
                      </div>
                      {exp.subCompany && (
                        <p className="text-gray-500 text-xs mt-0.5">{exp.subCompany}</p>
                      )}
                    </div>
                    <div className="flex flex-wrap items-start gap-2">
                      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-bold uppercase tracking-wide">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wide">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-5 leading-relaxed text-sm sm:text-base italic border-l-4 border-white/10 pl-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-3">
                    {exp.achievements.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-3 group/item">
                        <CheckCircle2 size={16} className="mt-0.5 text-blue-500/50 group-hover/item:text-blue-500 transition-colors flex-shrink-0" />
                        <span className="text-gray-400 group-hover/item:text-gray-200 transition-colors text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;