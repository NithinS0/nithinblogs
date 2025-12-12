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
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* AI Neural Nodes */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-blue-400/40 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-4 h-4 bg-purple-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-pink-400/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating AI Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            >
              <div className={`w-1 h-1 rounded-full ${
                i % 3 === 0 ? 'bg-blue-400/30' :
                i % 3 === 1 ? 'bg-purple-400/30' : 'bg-pink-400/30'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Neural Network Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/15 to-transparent animate-pulse"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/15 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Enhanced Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 relative">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x bg-size-300 relative">
                My Skills
              </span>
              {/* Animated underline */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
              </div>
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-xl animate-pulse opacity-50"></div>
            </h2>
            <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto relative">
              <span className="relative z-10">
                Technologies and tools I use to bring ideas to life
              </span>
              {/* Subtle text glow */}
              <div className="absolute inset-0 bg-gray-400/10 blur-sm animate-pulse opacity-50"></div>
            </p>
          </div>

          {/* Enhanced Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`group p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50
                         hover:border-transparent hover:bg-gray-800/80 transition-all duration-500
                         transform hover:scale-105 hover:shadow-xl cursor-pointer relative overflow-hidden
                         ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Animated background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Floating particles inside card */}
                <div className="absolute inset-0 overflow-hidden">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-ping opacity-0 group-hover:opacity-100"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${20 + i * 20}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: '2s'
                      }}
                    ></div>
                  ))}
                </div>

                {/* Enhanced Icon with Gradient Background */}
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${skill.color} p-0.5 mb-4 mx-auto
                              group-hover:scale-110 transition-transform duration-300 relative`}>
                  <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <skill.icon size={28} className="text-white relative z-10" />
                    {/* Icon glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300`}></div>
                  </div>
                  {/* Outer glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300`}></div>
                </div>

                {/* Enhanced Skill Name */}
                <h3 className="text-xl font-semibold text-white text-center mb-3 group-hover:text-blue-400 transition-colors relative">
                  <span className="relative z-10">{skill.name}</span>
                  {/* Text glow effect */}
                  <div className="absolute inset-0 text-blue-400 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300">
                    {skill.name}
                  </div>
                </h3>

                {/* Enhanced Description */}
                <p className="text-gray-400 text-sm text-center group-hover:text-gray-300 transition-colors relative">
                  <span className="relative z-10">{skill.description}</span>
                </p>

                {/* Animated border effect */}
                <div className={`absolute inset-0 rounded-xl border border-transparent group-hover:border-blue-500/30 transition-colors duration-300`}></div>
                
                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-blue-400/0 group-hover:border-blue-400/50 transition-colors duration-300"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-purple-400/0 group-hover:border-purple-400/50 transition-colors duration-300"></div>
              </div>
            ))}
          </div>

          {/* Enhanced Additional Info */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 
                          rounded-full border border-blue-500/30 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <Brain size={20} className="text-blue-400 relative z-10 group-hover:animate-pulse" />
              <span className="text-gray-300 relative z-10 group-hover:text-white transition-colors">
                Always learning and exploring new technologies
              </span>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;