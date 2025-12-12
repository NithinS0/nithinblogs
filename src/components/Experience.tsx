import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const experiences = [
    {
      company: 'Renault Nissan Automotive India Private Limited',
      position: 'Intern',
      location: 'On-site',
      period: 'Mar 2025 – Apr 2025',
      description: 'Designed and implemented RPA workflows using UiPath to automate repetitive business processes, reducing manual effort.',
      achievements: [
        'Developed and optimized Excel Macros to streamline reporting and operational tasks.',
        'Built interactive Power BI dashboards to visualize key business metrics and improve decision-making.',
        'Created applications with Power Apps to support data handling and process efficiency.',
        'Contributed to minimizing manual workload and enhancing overall productivity through automation and data-driven solutions.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Experience-themed Floating Shapes */}
        <div className="absolute top-16 left-16 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg rotate-12 blur-sm animate-pulse"></div>
        <div className="absolute top-32 right-24 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-40 left-1/3 w-16 h-16 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-lg rotate-45 animate-ping"></div>
        <div className="absolute top-1/2 right-16 w-18 h-18 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Experience Icons */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              <div className={`w-2 h-2 rounded-full ${
                i % 3 === 0 ? 'bg-blue-400/40' :
                i % 3 === 1 ? 'bg-cyan-400/40' : 'bg-teal-400/40'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Large Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-cyan-600/10 to-teal-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Animated Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-pulse"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 relative">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent animate-gradient-x bg-size-300 relative">
                Experience
              </span>
              {/* Animated underline */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
              </div>
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-teal-400/20 blur-xl animate-pulse opacity-50"></div>
            </h2>
            <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
              My professional journey and key accomplishments
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`group relative pl-8 pb-12 border-l-2 border-gray-700 last:pb-0 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30 group-hover:scale-125 transition-transform duration-300"></div>
                
                {/* Experience Card */}
                <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-transparent hover:bg-gray-900/80 transition-all duration-500 transform hover:scale-[1.02] relative overflow-hidden">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  
                  {/* Floating particles inside card */}
                  <div className="absolute inset-0 overflow-hidden">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-ping opacity-0 group-hover:opacity-100"
                        style={{
                          left: `${10 + i * 20}%`,
                          top: `${15 + i * 15}%`,
                          animationDelay: `${i * 0.3}s`,
                          animationDuration: '2.5s'
                        }}
                      ></div>
                    ))}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {exp.position}
                        </h3>
                        <p className="text-xl text-cyan-400 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3 py-1 bg-gray-800/80 text-gray-300 rounded-full text-sm font-medium">
                          {exp.location}
                        </span>
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <Briefcase size={16} className="text-cyan-400 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Animated border effect */}
                  <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-cyan-500/30 transition-colors duration-300"></div>
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