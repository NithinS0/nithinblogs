import { useInView } from 'react-intersection-observer';
import { Github, QrCode, Image as ImageIcon, Database, Lock, Stethoscope, BarChart3, ArrowRight } from 'lucide-react';

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const projects = [
    {
      title: 'Smart Inventory System',
      description: 'Full-stack, QR-enabled inventory management platform for asset tracking, spare management, and personnel operations.',
      technologies: ['FastAPI', 'Firebase', 'Supabase', 'React', 'TS'],
      githubUrl: 'https://github.com/NithinS0/Smart-Inventory-System',
      icon: QrCode,
      color: 'from-blue-600 to-indigo-600',
      image: '/smart_inventory.png',
    },
    {
      title: 'Image Captioning System',
      description: 'Deep learning system combining CNNs and Transformers to automatically generate meaningful descriptions for visual input.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'NLP', 'CNN'],
      githubUrl: 'https://github.com/NithinS0/Image-Captioning-using-ResNet50-and-Transformers',
      icon: ImageIcon,
      color: 'from-pink-500 to-rose-600',
      image: '/image_captioning.png',
    },
    {
      title: 'Skill Hive',
      description: 'Village skill directory and service-booking system connecting local workers with users through a role-based platform.',
      technologies: ['MySQL', 'React', 'Python', 'Tailwind'],
      githubUrl: 'https://github.com/NithinS0/Skill-Hive',
      icon: Database,
      color: 'from-purple-600 to-indigo-600',
      image: '/skill_hive.png',
    },
    {
      title: 'Lung Cancer Detection',
      description: 'VGG16-based transfer learning model for medical image classification, achieving 99% accuracy on diagnosis detection.',
      technologies: ['VGG16', 'TensorFlow', 'OpenCV'],
      githubUrl: 'https://github.com/NithinS0/Lung-Cancer-Detection',
      icon: Stethoscope,
      color: 'from-cyan-500 to-blue-600',
      image: '/lung_cancer_ai.png',
    },
    {
      title: 'Password Manager',
      description: 'Secure Java-based password management solution with AES encryption and automated credential generation.',
      technologies: ['Java', 'Swing', 'MySQL', 'AES'],
      githubUrl: 'https://github.com/NithinS0/Password-Generator-and-Manager',
      icon: Lock,
      color: 'from-red-500 to-orange-600',
      image: '/password_manager.png',
    },
    {
      title: 'Stock Price Prediction',
      description: 'LSTM-based time-series forecasting model for financial markets with interactive visualization dashboards.',
      technologies: ['LSTM', 'Pandas', 'Matplotlib'],
      githubUrl: 'https://github.com/NithinS0/Stock-Price-Prediction',
      icon: BarChart3,
      color: 'from-emerald-500 to-teal-600',
      image: '/stock_prediction.png',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#050810] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10 md:mb-16">
            <div className="space-y-3">
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Innovations</span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-xl">
                A selection of my builds in AI, Cloud, and Software Engineering.
              </p>
            </div>
            <a
              href="https://github.com/NithinS0"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-white font-bold bg-white/5 px-5 py-3 rounded-xl hover:bg-white/10 transition-all text-sm whitespace-nowrap self-start sm:self-auto"
            >
              <span>VIEW ALL</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Grid — 1 col mobile, 2 tablet, 3 desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative flex flex-col bg-[#151b2d]/40 backdrop-blur-xl rounded-2xl sm:rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-20px_rgba(59,130,246,0.3)]"
              >
                {/* Image */}
                <div className="relative h-44 sm:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151b2d] to-transparent" />
                  <div className={`absolute top-4 right-4 p-3 rounded-xl sm:rounded-2xl bg-gradient-to-br ${project.color} text-white shadow-xl`}>
                    <project.icon size={20} className="sm:w-6 sm:h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-7 flex-grow flex flex-col">
                  <h3 className="text-lg sm:text-xl font-black text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-5 leading-relaxed flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-white/5 text-xs font-bold text-blue-300 uppercase tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-white text-sm font-bold transition-all"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;