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
    },
    {
      icon: Database,
      title: 'Automation & Internship',
      description: 'Completed internship at Renault Nissan Automotive working on RPA, Power BI, and Power Apps projects'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Neural Network Nodes */}
        <div className="absolute top-16 left-16 w-4 h-4 bg-blue-400/40 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-24 w-3 h-3 bg-purple-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-5 h-5 bg-pink-400/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Neural Connections */}
        <div className="absolute inset-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        {/* Neural Pathways */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-pulse"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Section Header with Enhanced Animation */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 relative">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x bg-size-300 relative">
                About Me
              </span>
              {/* Animated underline */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
              </div>
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-xl animate-pulse opacity-50"></div>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Content with Enhanced Typography */}
            <div className="space-y-6">
              <div className="prose prose-lg text-gray-300">
                <p className="text-xl leading-relaxed relative">
                  <span className="relative z-10">
                    Hi, I'm <span className="text-blue-400 font-semibold relative">
                      Nithin S
                      <span className="absolute -inset-1 bg-blue-400/20 blur-sm rounded animate-pulse"></span>
                    </span> — a passionate AI and 
                    Data Science enthusiast currently pursuing my B.Tech in Artificial Intelligence at
                    <span className="text-purple-400 font-semibold relative ml-1">
                      SRM University
                      <span className="absolute -inset-1 bg-purple-400/20 blur-sm rounded animate-pulse"></span>
                    </span>.
                  </span>
                </p>
                
                <p className="text-lg leading-relaxed text-gray-400 relative">
                  <span className="relative z-10">
                    I build intelligent systems using machine learning and deep learning. From secure password 
                    managers to medical image classifiers, I aim to solve real-world problems with scalable 
                    code and clean UI. My journey in AI is driven by curiosity and the desire to create 
                    technology that makes a meaningful impact. I recently completed an internship at Renault Nissan 
                    Automotive where I worked on automation projects using UiPath, Excel Macros, Power BI, and Power Apps.
                  </span>
                </p>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-gray-900/50 rounded-lg backdrop-blur-sm relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-3xl font-bold text-blue-400 animate-pulse">5+</div>
                    <div className="text-gray-400">Projects</div>
                  </div>
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-lg border border-blue-500/20 animate-pulse"></div>
                </div>
                <div className="text-center p-4 bg-gray-900/50 rounded-lg backdrop-blur-sm relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-3xl font-bold text-purple-400 animate-pulse" style={{ animationDelay: '0.5s' }}>2.5+</div>
                    <div className="text-gray-400">Years Learning</div>
                  </div>
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-lg border border-purple-500/20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>

            {/* Enhanced Highlights Cards */}
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`p-6 bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-xl
                           hover:from-gray-800/80 hover:to-gray-700/80 transition-all duration-300
                           transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10
                           ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
                           border border-gray-700/50 hover:border-blue-500/30 relative overflow-hidden group`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
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

                  <div className="flex items-start space-x-4 relative z-10">
                    <div className="p-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <item.icon size={24} className="text-blue-400 relative z-10" />
                      {/* Icon glow effect */}
                      <div className="absolute inset-0 bg-blue-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Animated border effect */}
                  <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-blue-500/30 transition-colors duration-300"></div>
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