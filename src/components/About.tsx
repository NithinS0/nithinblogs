import { motion } from "framer-motion";
import { Coffee, Cpu, Bot, Users, GraduationCap } from "lucide-react";

const About = () => {
  const traits = [
    {
      icon: Cpu,
      label: "Deep Learning & AI/ML",
      desc: "Teaching neural nets to squint at pictures and text.",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      icon: Bot,
      label: "Agentic AI & RAG",
      desc: "Building agents and RAG pipelines that actually answer questions.",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
    {
      icon: Users,
      label: "Multi-Agent Systems",
      desc: "Orchestrating teams of AI agents that coordinate (and argue) to solve tasks.",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      icon: Coffee,
      label: "Always Learning",
      desc: "Hoarding research papers I promise I'll read tomorrow.",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-transparent transition-colors duration-500 relative overflow-hidden"
    >
      {/* Ambient BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 md:w-[500px] md:h-[500px] bg-blue-600/5 rounded-full blur-[120px] -mr-40 -mt-20" />
        <div className="absolute bottom-0 left-0 w-72 h-72 md:w-[400px] md:h-[400px] bg-purple-600/5 rounded-full blur-[120px] -ml-40 -mb-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section label */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-12 md:mb-16">
            <div className="w-8 h-px bg-blue-500" />
            <span className="text-blue-500 dark:text-blue-400 text-xs font-bold uppercase tracking-[0.2em]">
              About Me
            </span>
            <div className="flex-1 h-px bg-slate-200 dark:bg-white/5" />
          </motion.div>

          {/* Layout: stacked on mobile, 2-col on desktop */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
            {/* ═══ COL 1 — Bio ═══ */}
            <div className="flex-1 min-w-0 space-y-5 w-full">
              {/* Bio card */}
              <motion.div variants={itemVariants} className="rounded-3xl bg-white dark:bg-gradient-to-br dark:from-[#0d1224] dark:to-[#111827] border border-slate-200/60 dark:border-0 p-6 sm:p-7 shadow-sm dark:shadow-lg transition-all duration-500">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-3 leading-tight">
                  What I Actually Do{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                    (Or Try To)
                  </span>
                </h2>

                <p className="text-slate-600 dark:text-gray-400 transition-colors duration-500 leading-relaxed text-sm sm:text-base">
                  I'm a final year student who basically turns caffeine and
                  anxiety into working AI models.
                </p>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {[
                    "Python",
                    "TensorFlow",
                    "React",
                    "FastAPI",
                    "Agentic AI",
                    "Multi-Agents",
                    "RAG",
                    "LangChain",
                    "Docker",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-gray-300 text-xs font-semibold hover:bg-blue-500/10 hover:text-blue-600 dark:hover:bg-blue-500/15 dark:hover:text-blue-300 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Education Card */}
              <motion.div variants={itemVariants} className="rounded-3xl bg-white dark:bg-gradient-to-br dark:from-[#0d1224] dark:to-[#111827] border border-slate-200/60 dark:border-0 p-6 sm:p-7 shadow-sm dark:shadow-lg transition-all duration-500">
                <h3 className="text-slate-800 dark:text-white font-black text-base mb-4 uppercase tracking-wider text-blue-600/80 dark:text-blue-400/80">
                  Education
                </h3>
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex-shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                      B.Tech in Artificial Intelligence
                    </h4>
                    <p className="text-blue-600 dark:text-blue-300 text-sm font-medium mt-1">
                      SRM Institute of Science and Technology, KTR, Chennai
                    </p>
                    <p className="text-slate-400 dark:text-gray-500 text-xs mt-1.5 font-semibold">
                      Class of 2027
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ═══ COL 2 — Traits + Availability ═══ */}
            <div className="flex-1 min-w-0 space-y-5 w-full">
              {/* What I Do */}
              <motion.div variants={itemVariants}>
                <h3 className="text-slate-800 dark:text-white font-black text-base mb-4 uppercase tracking-wider text-blue-600/80 dark:text-blue-400/80">
                  My Core Focus
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {traits.map((t, i) => (
                    <div
                      key={i}
                      className={`flex flex-col gap-2.5 p-4 rounded-2xl ${t.bg} transition-all hover:-translate-y-0.5 group`}
                    >
                      <t.icon
                        size={20}
                        className={`${t.color} group-hover:scale-110 transition-transform`}
                      />
                      <div>
                        <p className={`font-bold text-sm ${t.color}`}>
                          {t.label}
                        </p>
                        <p className="text-slate-500 dark:text-gray-500 text-xs mt-0.5 leading-relaxed">
                          {t.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Availability — anchor link, no DOM */}
              <motion.div variants={itemVariants} className="flex items-center justify-between p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 dark:border-0 transition-all duration-500">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.4)]" />
                  <div>
                    <p className="text-emerald-700 dark:text-emerald-300 font-bold text-sm">
                      Open to Offers
                    </p>
                    <p className="text-emerald-600 dark:text-emerald-500 text-xs font-medium">
                      Available for internships, collaborations, or free pizza.
                    </p>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="text-emerald-600 dark:text-emerald-400 text-xs font-bold hover:text-emerald-500 dark:hover:text-emerald-300 transition-colors underline underline-offset-4 whitespace-nowrap"
                >
                  Let's talk →
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
