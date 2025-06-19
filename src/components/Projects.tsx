import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Lock, Stethoscope, FileText, Utensils } from 'lucide-react';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const projects = [
    {
      title: 'Password Manager & Generator',
      description: 'Java + Swing + MySQL-based secure password manager with advanced encryption and intuitive user interface for managing multiple accounts safely.',
      technologies: ['Java', 'Swing', 'MySQL', 'Encryption'],
      githubUrl: 'https://github.com/NithinS0/Password-Generator-and-Manager',
      icon: Lock,
      gradient: 'from-red-500 to-pink-500'
    },
    {
      title: 'Lung Cancer Detection',
      description: 'CNN & VGG16 model for classifying lung cancer via medical images. Advanced deep learning approach for early detection with high accuracy rates.',
      technologies: ['Python', 'TensorFlow', 'CNN', 'VGG16', 'Medical AI'],
      githubUrl: 'https://github.com/NithinS0/Lung-Cancer-Detection',
      icon: Stethoscope,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Text Classification with TensorFlow',
      description: 'Internship project to classify text using tokenization & deep learning. Natural language processing with advanced neural network architectures.',
      technologies: ['Python', 'TensorFlow', 'NLP', 'Deep Learning'],
      githubUrl: 'https://github.com/NithinS0/Text-Classification-With-TensorFlow',
      icon: FileText,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Food Recognition',
      description: 'Recognize food from images and estimate calories using computer vision and machine learning. Health-focused AI application with nutritional insights.',
      technologies: ['Python', 'Computer Vision', 'ML', 'Image Processing'],
      githubUrl: 'https://github.com/NithinS0/Food-Recognition',
      icon: Utensils,
      gradient: 'from-orange-500 to-yellow-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
              A showcase of my work in AI, machine learning, and software development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50
                         hover:border-transparent hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500
                         transform hover:scale-[1.02] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Project Header */}
                <div className={`p-6 bg-gradient-to-r ${project.gradient} bg-opacity-10 relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative z-10 flex items-center space-x-4">
                    <div className={`p-3 bg-gradient-to-r ${project.gradient} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800/80 text-gray-300 rounded-full text-sm font-medium
                                 group-hover:bg-blue-600/20 group-hover:text-blue-400 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 
                               rounded-lg transition-all duration-300 transform hover:scale-105 group/btn"
                    >
                      <Github size={18} className="group-hover/btn:text-blue-400 transition-colors" />
                      <span className="text-gray-300 group-hover/btn:text-white transition-colors">View Code</span>
                    </a>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 
                              transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 
                          rounded-full border border-blue-500/30">
              <ExternalLink size={20} className="text-blue-400" />
              <span className="text-gray-300">More projects available on GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;