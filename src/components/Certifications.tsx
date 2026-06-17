import { useInView } from "react-intersection-observer";
import {
  Award,
  ExternalLink,
  CheckCircle2,
  CalendarCheck,
  ShieldCheck,
} from "lucide-react";

const certifications = [
  {
    title: "Certified Agentforce Specialist",
    issuer: "Salesforce",
    date: "2026",
    credentialId: "Salesforce Certified",
    badge: "/Salesforce.jpg",
    badgeLabel: "Official Credential Badge",
    badgeBg: "from-[#00A1E0] via-[#0176D3] to-[#032D60]",
    skills: [
      "Agentforce",
      "AI Agents",
      "Salesforce Platform",
      "LLM Integration",
      "Automation",
    ],
    verifyUrl:
      "https://drive.google.com/file/d/1yrxq6_mUKKt8tSEzbj5C4CP0hRchxpfo/view?usp=sharing",
    accent: "blue",
    description:
      "Demonstrates expertise in building and deploying autonomous AI agents on the Salesforce platform using Agentforce, integrating LLMs, and automating complex business workflows.",
  },
];

const accentMap: Record<
  string,
  { border: string; glow: string; tag: string; issuer: string; btn: string }
> = {
  blue: {
    border: "border-white/5 hover:border-white/10",
    glow: "from-blue-600/15 to-indigo-600/10",
    tag: "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300",
    issuer: "text-blue-500 dark:text-blue-400",
    btn: "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-500/35",
  },
};

const Certifications = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section
      id="certifications"
      className="py-20 md:py-28 bg-transparent transition-colors duration-500 relative overflow-hidden"
    >
      {/* Background FX */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/4 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-px bg-blue-500" />
            <span className="text-blue-500 dark:text-blue-400 text-xs font-bold uppercase tracking-[0.2em]">
              Credentials
            </span>
            <div className="flex-1 h-px bg-slate-200 dark:bg-white/5" />
          </div>

          {/* Heading */}
          <div className="mb-10 md:mb-14">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white transition-colors duration-500 tracking-tight">
              Certifi
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                cations
              </span>
            </h2>
            <p className="text-slate-600 dark:text-gray-400 transition-colors duration-500 text-base sm:text-lg mt-2 max-w-xl">
              Industry-recognized credentials validating my expertise in AI and
              emerging technologies.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {certifications.map((cert, idx) => {
              const c = accentMap[cert.accent] ?? accentMap.blue;
              return (
                <div
                  key={idx}
                  className={`group relative flex flex-col bg-white dark:bg-[#0c1020] rounded-3xl border border-slate-200/60 dark:border-0 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_-15px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_24px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden`}
                >
                  {/* ── Badge Hero Area ── */}
                  <div
                    className={`relative bg-gradient-to-br ${cert.badgeBg} p-8 flex flex-col items-center justify-center min-h-[220px] sm:min-h-[260px]`}
                  >
                    {/* Decorative circles */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2" />

                    {/* Shield icon top-left */}
                    <div className="absolute top-4 left-4">
                      <ShieldCheck size={18} className="text-white/40" />
                    </div>

                    {/* Badge image — large & centered */}
                    <div className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden bg-white shadow-2xl shadow-black/40 group-hover:scale-105 transition-transform duration-700">
                      <img
                        src={cert.badge}
                        alt={cert.badgeLabel}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>

                    {/* Issuer label below badge */}
                    <div className="relative z-10 mt-4 flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="text-white/70" />
                      <span className="text-white/80 text-xs font-bold uppercase tracking-widest">
                        {cert.issuer}
                      </span>
                    </div>
                  </div>

                  {/* ── Card Body ── */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    {/* Title */}
                    <h3 className="text-slate-900 dark:text-white font-black text-lg sm:text-xl leading-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-100 transition-colors">
                      {cert.title}
                    </h3>

                    {/* Date */}
                    <div className="flex items-center gap-1.5 text-slate-400 dark:text-gray-500 mb-4">
                      <CalendarCheck size={13} />
                      <span className="text-xs font-medium">
                        Issued {cert.date}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-gray-500 transition-colors duration-500 text-xs sm:text-sm leading-relaxed mb-4 flex-1">
                      {cert.description}
                    </p>

                    {/* Credential ID chip */}
                    <div className="mb-4 px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-0 flex items-center gap-2">
                      <Award
                        size={13}
                        className="text-slate-400 dark:text-gray-500 flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <p className="text-slate-400 dark:text-gray-600 text-[10px] font-bold uppercase tracking-widest mb-0.5">
                          Credential ID
                        </p>
                        <p className="text-slate-700 dark:text-gray-300 text-xs font-mono truncate">
                          {cert.credentialId}
                        </p>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${c.tag}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-black uppercase tracking-widest transition-all ${c.btn}`}
                    >
                      <Award size={15} />
                      View Credential
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              );
            })}

            {/* "More coming soon" placeholder */}
            <div className="flex flex-col items-center justify-center gap-5 min-h-[440px] sm:min-h-[500px] rounded-3xl border border-dashed border-slate-300 dark:border-white/10 bg-slate-50/50 dark:bg-white/2 p-8">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/8 flex items-center justify-center">
                <Award
                  size={28}
                  className="text-slate-400 dark:text-gray-600"
                />
              </div>
              <div className="text-center space-y-1.5">
                <p className="text-slate-700 dark:text-gray-400 font-bold text-base">
                  More Coming Soon
                </p>
                <p className="text-slate-400 dark:text-gray-600 text-sm">
                  Actively pursuing new certifications
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
