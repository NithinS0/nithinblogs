import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Download, FileText, Award, Briefcase, GraduationCap } from 'lucide-react';

const Resume = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const resumeHighlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      content: 'B.Tech in Artificial Intelligence',
      subtitle: 'SRM University',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Briefcase,
      title: 'Experience',
      content: 'AI & ML Projects',
      subtitle: 'Python Development',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Skills',
      content: 'Machine Learning, Deep Learning',
      subtitle: 'Computer Vision, Data Science',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="resume" className="py-20 bg-gray-800/50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Document-themed Floating Shapes */}
        <div className="absolute top-16 left-16 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg rotate-12 blur-sm animate-pulse"></div>
        <div className="absolute top-32 right-24 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-40 left-1/3 w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg rotate-45 animate-ping"></div>
        <div className="absolute top-1/2 right-16 w-18 h-18 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Document Icons */}
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
                i % 3 === 1 ? 'bg-purple-400/40' : 'bg-green-400/40'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Large Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Animated Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-pulse"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 relative">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x bg-size-300 relative">
                Resume
              </span>
              {/* Animated underline */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
              </div>
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-xl animate-pulse opacity-50"></div>
            </h2>
            <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
              Download my complete resume or explore the highlights below
            </p>
          </div>

          {/* Download Button */}
          <div className="text-center mb-16">
            <a
              href="https://drive.google.com/file/d/1OIxHFcB3wsg_3qRoeoLsBWMmthQvXZVx/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 
                       rounded-full text-white font-medium hover:from-blue-700 hover:to-purple-700 
                       transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl 
                       hover:shadow-blue-500/25 relative overflow-hidden group"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <Download size={24} className="relative z-10 group-hover:animate-bounce" />
              <span className="relative z-10 text-lg">View Resume</span>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer"></div>
              
              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/40 rounded-full animate-ping opacity-0 group-hover:opacity-100"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${30 + i * 20}%`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: '2s'
                    }}
                  ></div>
                ))}
              </div>
            </a>
          </div>

          {/* Resume Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resumeHighlights.map((item, index) => (
              <div
                key={index}
                className={`group p-8 bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-700/50
                         hover:border-transparent hover:bg-gray-900/80 transition-all duration-500
                         transform hover:scale-105 hover:shadow-xl cursor-pointer relative overflow-hidden
                         ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
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

                {/* Icon */}
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${item.gradient} p-0.5 mb-6 mx-auto
                              group-hover:scale-110 transition-transform duration-300 relative`}>
                  <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <item.icon size={28} className="text-white relative z-10" />
                    {/* Icon glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300`}></div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-300 mb-2 font-medium">
                    {item.content}
                  </p>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {item.subtitle}
                  </p>
                </div>

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-blue-500/30 transition-colors duration-300"></div>
                
                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-blue-400/0 group-hover:border-blue-400/50 transition-colors duration-300"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-purple-400/0 group-hover:border-purple-400/50 transition-colors duration-300"></div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 
                          rounded-full border border-blue-500/30 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <FileText size={20} className="text-blue-400 relative z-10 group-hover:animate-pulse" />
              <span className="text-gray-300 relative z-10 group-hover:text-white transition-colors">
                Updated regularly with latest achievements and projects
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

export default Resume;
