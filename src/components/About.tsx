import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Brain, Database } from 'lucide-react';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const highlights = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Deep expertise in neural networks, computer vision, and intelligent systems'
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Advanced analytics, data processing, and insights extraction from complex datasets'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div className="space-y-6">
              <div className="prose prose-lg text-gray-300">
                <p className="text-xl leading-relaxed">
                  Hi, I'm <span className="text-blue-400 font-semibold">Nithin S</span> — a passionate AI and 
                  Data Science enthusiast currently pursuing my B.Tech in Artificial Intelligence at 
                  <span className="text-purple-400 font-semibold"> SRM University</span>.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-400">
                  I build intelligent systems using machine learning and deep learning. From secure password 
                  managers to medical image classifiers, I aim to solve real-world problems with scalable 
                  code and clean UI. My journey in AI is driven by curiosity and the desire to create 
                  technology that makes a meaningful impact.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-gray-900/50 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-blue-400">4+</div>
                  <div className="text-gray-400">Projects</div>
                </div>
                <div className="text-center p-4 bg-gray-900/50 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-purple-400">2+</div>
                  <div className="text-gray-400">Years Learning</div>
                </div>
              </div>
            </div>

            {/* Highlights Cards */}
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`p-6 bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-xl
                           hover:from-gray-800/80 hover:to-gray-700/80 transition-all duration-300
                           transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10
                           ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
                           border border-gray-700/50 hover:border-blue-500/30`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg">
                      <item.icon size={24} className="text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;