import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Database, 
  Brain, 
  BarChart3, 
  PackageOpen, 
  Calculator, 
  Table, 
  Eye 
} from 'lucide-react';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const skills = [
    {
      name: 'Python',
      icon: Code,
      color: 'from-yellow-400 to-yellow-600',
      description: 'Advanced programming with focus on AI/ML applications'
    },
    {
      name: 'Data Science',
      icon: BarChart3,
      color: 'from-green-400 to-green-600',
      description: 'Statistical analysis, data visualization, and insights extraction'
    },
    {
      name: 'Machine Learning',
      icon: Brain,
      color: 'from-purple-400 to-purple-600',
      description: 'Supervised & unsupervised learning, model optimization'
    },
    {
      name: 'Python Libraries',
      icon: PackageOpen,
      color: 'from-blue-400 to-blue-600',
      description: 'TensorFlow, Keras, Scikit-learn, Matplotlib, Seaborn'
    },
    {
      name: 'MongoDB',
      icon: Database,
      color: 'from-red-400 to-red-600',
      description: 'NoSQL database design and optimization'
    },
    {
      name: 'NumPy',
      icon: Calculator,
      color: 'from-indigo-400 to-indigo-600',
      description: 'Numerical computing and array processing'
    },
    {
      name: 'Pandas',
      icon: Table,
      color: 'from-pink-400 to-pink-600',
      description: 'Data manipulation and analysis workflows'
    },
    {
      name: 'Computer Vision',
      icon: Eye,
      color: 'from-cyan-400 to-cyan-600',
      description: 'Image processing, CNN, object detection'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                My Skills
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`group p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50
                         hover:border-transparent hover:bg-gray-800/80 transition-all duration-300
                         transform hover:scale-105 hover:shadow-xl cursor-pointer
                         ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon with Gradient Background */}
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${skill.color} p-0.5 mb-4 mx-auto
                              group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
                    <skill.icon size={28} className="text-white" />
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="text-xl font-semibold text-white text-center mb-3 group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm text-center group-hover:text-gray-300 transition-colors">
                  {skill.description}
                </p>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${skill.color} opacity-0 
                              group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 
                          rounded-full border border-blue-500/30">
              <Brain size={20} className="text-blue-400" />
              <span className="text-gray-300">Always learning and exploring new technologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;