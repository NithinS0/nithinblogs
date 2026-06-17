import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  Database, Brain, Layers, Wrench, Bot, Code2
} from 'lucide-react';

const SkillChip = ({ name, icon, color, accentBorder }: { name: string; icon?: string; color: string; accentBorder: string }) => {
  const [hasError, setHasError] = useState(!icon);
  const isInvertible = name.toLowerCase() === 'github';

  return (
    <div className={`flex items-center gap-2.5 px-3.5 py-2.5 bg-slate-50 hover:bg-slate-100/85 dark:bg-white/[0.02] dark:hover:bg-white/[0.06] border border-slate-200 dark:border-white/[0.04] ${accentBorder} rounded-xl transition-all duration-300 transform hover:scale-[1.04] hover:shadow-[0_0_12px_rgba(59,130,246,0.06)] dark:hover:shadow-[0_0_12px_rgba(59,130,246,0.15)] cursor-default group/chip`}>
      {!hasError && icon ? (
        <img
          src={icon}
          alt={name}
          className={`w-5 h-5 object-contain filter ${isInvertible ? 'dark:invert dark:brightness-200' : 'brightness-95 dark:brightness-90 group-hover/chip:brightness-100'} transition-all`}
          onError={() => setHasError(true)}
        />
      ) : (
        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${color} animate-pulse shadow-[0_0_6px_rgba(96,165,250,0.3)] dark:shadow-[0_0_6px_rgba(96,165,250,0.6)]`} />
      )}
      <span className="text-slate-600 dark:text-gray-400 group-hover/chip:text-slate-900 dark:group-hover/chip:text-white font-semibold text-xs sm:text-sm transition-colors duration-300">{name}</span>
    </div>
  );
};

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const skillCategories = [
    {
      title: 'Languages & Core',
      icon: Code2,
      color: 'from-indigo-500 to-purple-500',
      textColor: 'from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400',
      accentBorder: 'hover:border-indigo-500/30',
      shadowColor: 'hover:shadow-[0_20px_50px_-20px_rgba(99,102,241,0.3)]',
      iconColor: 'text-indigo-600 dark:text-indigo-400',
      iconBg: 'bg-indigo-500/10 group-hover:bg-indigo-500/20 border-indigo-500/20',
      skills: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      ],
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      textColor: 'from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400',
      accentBorder: 'hover:border-purple-500/30',
      shadowColor: 'hover:shadow-[0_20px_50px_-20px_rgba(168,85,247,0.3)]',
      iconColor: 'text-purple-600 dark:text-purple-400',
      iconBg: 'bg-purple-500/10 group-hover:bg-purple-500/20 border-purple-500/20',
      skills: [
        { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
        { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
        { name: 'Keras', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg' },
        { name: 'Scikit-Learn', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
        { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
        { name: 'MLflow', icon: 'https://avatars.githubusercontent.com/u/41551329?s=200&v=4' },
        { name: 'CUDA', icon: 'https://icons.veryicon.com/png/o/business/vscode-program-item-icon/cuda.png' },
      ],
    },
    {
      title: 'Agentic AI & LLMs',
      icon: Bot,
      color: 'from-emerald-500 to-teal-500',
      textColor: 'from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400',
      accentBorder: 'hover:border-emerald-500/30',
      shadowColor: 'hover:shadow-[0_20px_50px_-20px_rgba(16,185,129,0.3)]',
      iconColor: 'text-emerald-600 dark:text-emerald-400',
      iconBg: 'bg-emerald-500/10 group-hover:bg-emerald-500/20 border-emerald-500/20',
      skills: [
        { name: 'LangChain', icon: 'https://github.com/langchain-ai.png' },
        { name: 'LangGraph', icon: 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/langgraph.svg' },
        { name: 'HuggingFace', icon: 'https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg' },
        { name: 'Vertex AI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
      ],
    },
    {
      title: 'Frameworks & Backends',
      icon: Layers,
      color: 'from-orange-500 to-red-500',
      textColor: 'from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400',
      accentBorder: 'hover:border-orange-500/30',
      shadowColor: 'hover:shadow-[0_20px_50px_-20px_rgba(249,115,22,0.3)]',
      iconColor: 'text-orange-600 dark:text-orange-400',
      iconBg: 'bg-orange-500/10 group-hover:bg-orange-500/20 border-orange-500/20',
      skills: [
        { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
        { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
        { name: 'Pydantic', icon: 'https://github.com/pydantic.png' },
        { name: 'Streamlit', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg' },
        { name: 'Render', icon: 'https://avatars.githubusercontent.com/u/32773170?s=200&v=4' },
      ],
    },
    {
      title: 'Databases & Cloud',
      icon: Database,
      color: 'from-blue-400 to-cyan-500',
      textColor: 'from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400',
      accentBorder: 'hover:border-cyan-500/30',
      shadowColor: 'hover:shadow-[0_20px_50px_-20px_rgba(6,182,212,0.3)]',
      iconColor: 'text-cyan-600 dark:text-cyan-400',
      iconBg: 'bg-cyan-500/10 group-hover:bg-cyan-500/20 border-cyan-500/20',
      skills: [
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg' },
        { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
        { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
      ],
    },
    {
      title: 'DevOps & Data Science',
      icon: Wrench,
      color: 'from-yellow-500 to-orange-500',
      textColor: 'from-amber-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400',
      accentBorder: 'hover:border-yellow-500/30',
      shadowColor: 'hover:shadow-[0_20px_50px_-20px_rgba(234,179,8,0.3)]',
      iconColor: 'text-amber-600 dark:text-yellow-400',
      iconBg: 'bg-yellow-500/10 group-hover:bg-yellow-500/20 border-yellow-500/20',
      skills: [
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
        { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
        { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
        { name: 'SciPy', icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/SCIPY_2.svg' },
        { name: 'Matplotlib', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' },
        { name: 'Power BI', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
        { name: 'GitHub Copilot', icon: 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/copilot.svg' },
        { name: 'CI/CD', icon: 'https://www.edgescan.com/wp-content/uploads/2022/12/CI-CD2.png' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 bg-transparent transition-colors duration-500 relative overflow-hidden">
      {/* Background grids and shapes */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none transition-colors duration-500" />
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Header */}
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight text-slate-900 dark:text-white transition-colors duration-500 animate-fade-in">
              Skills{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-500 bg-clip-text text-transparent">
                (Things I Argue With Daily)
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 mx-auto rounded-full mb-6" />
            <p className="text-slate-600 dark:text-gray-400 transition-colors duration-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
              A comprehensive checklist of technologies I wrestle with, debug, and occasionally convince to work.
            </p>
          </div>

          {/* Grid — 1 col on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className={`group relative bg-white dark:bg-[#0d1224]/80 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-slate-200/60 dark:border-white/[0.04] ${category.accentBorder} transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] dark:${category.shadowColor} overflow-hidden`}
              >
                {/* Accent Color Top Stripe */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${category.color} opacity-70 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Header */}
                <div className="flex items-center gap-4 mb-6 sm:mb-8">
                  <div className={`p-3 rounded-2xl ${category.iconBg} border shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <category.icon size={22} className={category.iconColor} />
                  </div>
                  <h3 className={`text-lg sm:text-xl font-black bg-gradient-to-r ${category.textColor} bg-clip-text text-transparent group-hover:brightness-110 transition-all`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <SkillChip
                      key={sIdx}
                      name={skill.name}
                      icon={skill.icon}
                      color={category.color}
                      accentBorder={category.accentBorder}
                    />
                  ))}
                </div>

                {/* Hover Ambient Glow */}
                <div className={`absolute -right-10 -bottom-10 w-32 h-32 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-[0.08] blur-3xl transition-opacity duration-500 pointer-events-none`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;