import { useInView } from 'react-intersection-observer';
import {
  Database, Brain, Layers, Wrench, Layout, Terminal
} from 'lucide-react';

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const skillCategories = [
    {
      title: 'Programming',
      icon: Terminal,
      color: 'from-blue-500 to-indigo-500',
      skills: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
        { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      ],
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'from-emerald-500 to-teal-500',
      skills: [
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      ],
    },
    {
      title: 'AI / ML',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
        { name: 'Keras', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg' },
        { name: 'Scikit-learn', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
        { name: 'NLP', icon: 'https://www.svgrepo.com/show/373924/nlp.svg' },
        { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
      ],
    },
    {
      title: 'Frameworks / APIs',
      icon: Layers,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
        { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
        { name: 'REST APIs', icon: 'https://www.svgrepo.com/show/120283/api.svg' },
      ],
    },
    {
      title: 'Tools & DevOps',
      icon: Wrench,
      color: 'from-blue-400 to-cyan-500',
      skills: [
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
        { name: 'Power BI', icon: 'https://www.svgrepo.com/show/354209/power-bi.svg' },
      ],
    },
    {
      title: 'Other',
      icon: Layout,
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'Full Stack', icon: 'https://www.svgrepo.com/show/452130/web.svg' },
        { name: 'Data Viz', icon: 'https://www.svgrepo.com/show/396263/data-visualization.svg' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#0a0f1e] relative overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Header */}
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight text-white">
              Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-5" />
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
              A comprehensive toolkit of technologies I use to build intelligent software systems.
            </p>
          </div>

          {/* Grid — 1 col on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="group relative bg-[#151b2d]/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-white/5 hover:border-white/12 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]"
              >
                {/* Header */}
                <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-7">
                  <div className={`p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-br ${category.color} shadow-lg ring-1 ring-white/20`}>
                    <category.icon size={20} className="sm:w-[26px] sm:h-[26px] text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg sm:rounded-xl border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-5 h-5 object-contain"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                      <span className="text-gray-300 font-medium text-xs sm:text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>

                {/* Hover glow */}
                <div className={`absolute -right-4 -bottom-4 w-20 h-20 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-[0.06] blur-2xl transition-opacity duration-500`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;