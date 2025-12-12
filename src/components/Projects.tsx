import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Lock, Stethoscope, BarChart3, Eye, Database } from 'lucide-react';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const projects = [
        {
      title: 'Skill Hive',
      description: 'A village skill directory and service-booking system connecting local workers with users. Workers register skills, experience, and availability, while users request services with time slots. Includes role-based login, service status tracking, and admin control.',
      technologies: ['Python', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'React JS'],
      githubUrl: 'https://github.com/NithinS0/Skill-Hive',
      icon: Database,
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Password Manager & Generator',
      description: 'Java + Swing + MySQL-based secure password manager with user authentication, secure password generation, and auto-refresh feature for managing credentials efficiently.',
      technologies: ['Java', 'Swing', 'MySQL', 'Encryption'],
      githubUrl: 'https://github.com/NithinS0/Password-Generator-and-Manager',
      icon: Lock,
      gradient: 'from-red-500 to-pink-500'
    },
    {
      title: 'Lung Cancer Detection',
      description: 'Transfer learning with VGG16 for lung cancer image classification. Applied data augmentation, 8-fold cross-validation, achieving ~99% test accuracy on medical imaging data.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'VGG16', 'Medical AI'],
      githubUrl: 'https://github.com/NithinS0/Lung-Cancer-Detection',
      icon: Stethoscope,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Stock Price Prediction',
      description: 'LSTM model for stock price forecasting using time-series data. Implemented with Pandas for data handling and Matplotlib for visualization, achieving 87% accuracy.',
      technologies: ['Python', 'Keras', 'LSTM', 'Pandas', 'Matplotlib'],
      githubUrl: 'https://github.com/NithinS0/Stock-Price-Prediction',
      icon: BarChart3,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Hand Gesture Recognition',
      description: 'CNN for binary image classification with Conv2D, Batch Normalization, MaxPooling, and Dropout layers. Achieved 97% validation accuracy on gesture recognition.',
      technologies: ['Python', 'TensorFlow', 'CNN', 'Computer Vision'],
      githubUrl: 'https://github.com/NithinS0/Hand-Gesture-Recognition',
      icon: Eye,
      gradient: 'from-orange-500 to-yellow-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/30 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Project-themed Floating Shapes with Enhanced Colors */}
        <div className="absolute top-16 left-16 w-20 h-20 bg-gradient-to-r from-red-400/25 to-pink-400/25 rounded-lg rotate-12 blur-sm animate-pulse shadow-lg shadow-red-500/10"></div>
        <div className="absolute top-32 right-24 w-24 h-24 bg-gradient-to-r from-blue-400/25 to-cyan-400/25 rounded-full blur-xl animate-bounce shadow-lg shadow-blue-500/10"></div>
        <div className="absolute bottom-40 left-1/3 w-16 h-16 bg-gradient-to-r from-purple-400/25 to-blue-400/25 rounded-lg rotate-45 animate-ping shadow-lg shadow-purple-500/10"></div>
        <div className="absolute top-1/2 right-16 w-18 h-18 bg-gradient-to-r from-orange-400/25 to-yellow-400/25 rounded-full animate-pulse shadow-lg shadow-orange-500/10" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-24 right-1/4 w-14 h-14 bg-gradient-to-r from-purple-400/25 to-blue-400/25 rounded-lg rotate-30 blur-lg animate-bounce shadow-lg shadow-purple-500/10" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Project Icons */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            >
              <div className={`w-2 h-2 rounded-full shadow-lg ${
                i % 5 === 0 ? 'bg-red-400/40 shadow-red-400/20' :
                i % 5 === 1 ? 'bg-blue-400/40 shadow-blue-400/20' :
                i % 5 === 2 ? 'bg-purple-400/40 shadow-purple-400/20' :
                i % 5 === 3 ? 'bg-orange-400/40 shadow-orange-400/20' : 'bg-pink-400/40 shadow-pink-400/20'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Large Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-red-500/12 to-pink-500/12 rounded-full blur-3xl animate-pulse shadow-2xl shadow-red-500/5"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-500/12 to-cyan-500/12 rounded-full blur-3xl animate-pulse shadow-2xl shadow-blue-500/5" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse shadow-2xl shadow-purple-500/5" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse shadow-2xl shadow-orange-500/5" style={{ animationDelay: '3s' }}></div>
        
        {/* Enhanced Animated Network Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-400/20 to-transparent animate-pulse shadow-sm shadow-red-400/10"></div>
          <div className="absolute top-2/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-pulse shadow-sm shadow-blue-400/10" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-3/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-pulse shadow-sm shadow-purple-400/10" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-4/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/20 to-transparent animate-pulse shadow-sm shadow-orange-400/10" style={{ animationDelay: '3s' }}></div>
          
          {/* Enhanced Vertical connection lines */}
          <div className="absolute top-0 left-1/5 w-px h-full bg-gradient-to-b from-transparent via-red-400/15 to-transparent animate-pulse shadow-sm shadow-red-400/5" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-0 left-2/5 w-px h-full bg-gradient-to-b from-transparent via-blue-400/15 to-transparent animate-pulse shadow-sm shadow-blue-400/5" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-0 left-3/5 w-px h-full bg-gradient-to-b from-transparent via-purple-400/15 to-transparent animate-pulse shadow-sm shadow-purple-400/5" style={{ animationDelay: '2.5s' }}></div>
          <div className="absolute top-0 right-1/5 w-px h-full bg-gradient-to-b from-transparent via-orange-400/15 to-transparent animate-pulse shadow-sm shadow-orange-400/5" style={{ animationDelay: '3.5s' }}></div>
        </div>

        {/* Enhanced Floating Code Elements */}
        <div className="absolute inset-0 text-gray-400/20 text-4xl font-mono">
          <div className="absolute top-24 left-24 animate-pulse drop-shadow-lg" style={{ animationDelay: '0s' }}>{'</'}</div>
          <div className="absolute top-40 right-40 animate-pulse drop-shadow-lg" style={{ animationDelay: '1s' }}>{'/>'}</div>
          <div className="absolute bottom-48 left-48 animate-pulse drop-shadow-lg" style={{ animationDelay: '2s' }}>{'()'}</div>
          <div className="absolute bottom-32 right-32 animate-pulse drop-shadow-lg" style={{ animationDelay: '3s' }}>{'[]'}</div>
          <div className="absolute top-1/2 left-16 animate-pulse drop-shadow-lg" style={{ animationDelay: '1.5s' }}>{'{}'}</div>
          <div className="absolute top-1/3 right-16 animate-pulse drop-shadow-lg" style={{ animationDelay: '2.5s' }}>{'<>'}</div>
        </div>

        {/* Enhanced Project Status Indicators */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full animate-ping"
              style={{
                left: `${15 + i * 10}%`,
                top: `${20 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: '3s'
              }}
            >
              <div className={`w-full h-full rounded-full shadow-lg ${
                i % 4 === 0 ? 'bg-blue-400/50 shadow-blue-400/20' :
                i % 4 === 1 ? 'bg-purple-400/50 shadow-purple-400/20' :
                i % 4 === 2 ? 'bg-yellow-400/50 shadow-yellow-400/20' : 'bg-red-400/50 shadow-red-400/20'
              }`}></div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Enhanced Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 relative">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x bg-size-300 relative drop-shadow-lg">
                Projects
              </span>
              {/* Enhanced Animated underline */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse shadow-lg shadow-blue-400/30"></div>
              </div>
              {/* Enhanced Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/25 via-purple-400/25 to-pink-400/25 blur-xl animate-pulse opacity-60"></div>
            </h2>
            <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto relative">
              <span className="relative z-10 drop-shadow-sm">
                A showcase of my work in AI, machine learning, and software development
              </span>
              {/* Enhanced Subtle text glow */}
              <div className="absolute inset-0 bg-gray-400/15 blur-sm animate-pulse opacity-60"></div>
            </p>
          </div>

          {/* Enhanced Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group bg-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/60
                         hover:border-transparent hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-500
                         transform hover:scale-[1.02] relative ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Enhanced animated background particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 shadow-sm shadow-blue-400/20"
                      style={{
                        left: `${10 + i * 20}%`,
                        top: `${15 + i * 15}%`,
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: '2.5s'
                      }}
                    ></div>
                  ))}
                </div>

                {/* Enhanced Project Header */}
                <div className={`p-6 bg-gradient-to-r ${project.gradient} bg-opacity-15 relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-8 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  {/* Enhanced animated header background */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className={`absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-r ${project.gradient} opacity-25 rounded-full blur-sm animate-pulse shadow-lg`}></div>
                    <div className={`absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-r ${project.gradient} opacity-20 rounded-full blur-sm animate-pulse shadow-lg`} style={{ animationDelay: '1s' }}></div>
                  </div>

                  <div className="relative z-10 flex items-center space-x-4">
                    <div className={`p-3 bg-gradient-to-r ${project.gradient} rounded-lg group-hover:scale-110 transition-transform duration-300 relative overflow-hidden shadow-lg`}>
                      <project.icon size={24} className="text-white relative z-10 drop-shadow-sm" />
                      {/* Enhanced Icon glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-300`}></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors relative drop-shadow-sm">
                        <span className="relative z-10">{project.title}</span>
                        {/* Enhanced Text glow effect */}
                        <div className="absolute inset-0 text-white opacity-0 group-hover:opacity-25 blur-sm transition-opacity duration-300">
                          {project.title}
                        </div>
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Enhanced Project Content */}
                <div className="p-6 relative">
                  {/* Enhanced Content background animation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/25 to-gray-900/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors drop-shadow-sm">
                      {project.description}
                    </p>

                    {/* Enhanced Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-800/90 text-gray-300 rounded-full text-sm font-medium
                                   group-hover:bg-blue-600/25 group-hover:text-blue-400 transition-all duration-300
                                   hover:scale-105 transform relative overflow-hidden shadow-sm border border-gray-700/50"
                        >
                          <span className="relative z-10">{tech}</span>
                          {/* Enhanced Tech tag glow */}
                          <div className="absolute inset-0 bg-blue-400/15 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                        </span>
                      ))}
                    </div>

                    {/* Enhanced Action Buttons */}
                    <div className="flex space-x-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-800/90 hover:bg-gray-700 
                                 rounded-lg transition-all duration-300 transform hover:scale-105 group/btn relative overflow-hidden
                                 border border-gray-700/50 shadow-sm"
                      >
                        {/* Enhanced Button background animation */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 to-purple-600/15 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                        
                        <Github size={18} className="group-hover/btn:text-blue-400 transition-colors relative z-10 drop-shadow-sm" />
                        <span className="text-gray-300 group-hover/btn:text-white transition-colors relative z-10 drop-shadow-sm">View Code</span>
                        
                        {/* Enhanced Button shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent opacity-0 group-hover/btn:opacity-100 animate-shimmer"></div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Enhanced Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-8 
                              transition-opacity duration-500 pointer-events-none`}></div>
                
                {/* Enhanced Animated border effect */}
                <div className={`absolute inset-0 rounded-xl border border-transparent group-hover:border-blue-500/40 transition-colors duration-300 shadow-sm`}></div>
                
                {/* Enhanced Corner accents */}
                <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-blue-400/0 group-hover:border-blue-400/50 transition-colors duration-300 rounded-tl-lg shadow-sm"></div>
                <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-purple-400/0 group-hover:border-purple-400/50 transition-colors duration-300 rounded-br-lg shadow-sm"></div>
              </div>
            ))}
          </div>

          {/* Enhanced Call to Action with GitHub Profile Link */}
          <div className="text-center mt-16">
            <a
              href="https://github.com/NithinS0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600/25 to-purple-600/25 
                        rounded-full border border-blue-500/40 relative overflow-hidden group hover:scale-105 transition-transform duration-300
                        shadow-lg hover:shadow-xl hover:shadow-blue-500/20"
            >
              {/* Enhanced Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 to-purple-600/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <Github size={20} className="text-blue-400 relative z-10 group-hover:animate-pulse drop-shadow-sm" />
              <span className="text-gray-300 relative z-10 group-hover:text-white transition-colors drop-shadow-sm font-medium">
                View All Projects on GitHub
              </span>
              
              {/* Enhanced Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/12 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer"></div>
              
              {/* Enhanced Floating particles */}
              <div className="absolute inset-0 overflow-hidden">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-ping opacity-0 group-hover:opacity-100 shadow-sm shadow-blue-400/20"
                    style={{
                      left: `${15 + i * 25}%`,
                      top: `${25 + i * 15}%`,
                      animationDelay: `${i * 0.4}s`,
                      animationDuration: '2.5s'
                    }}
                  ></div>
                ))}
              </div>
              
              {/* Enhanced Border glow */}
              <div className="absolute inset-0 rounded-full border border-blue-400/0 group-hover:border-blue-400/30 transition-colors duration-300 shadow-sm"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;