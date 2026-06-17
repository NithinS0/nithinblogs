import { useInView } from 'react-intersection-observer';
import { Github, QrCode, Image as ImageIcon, Database, Stethoscope, BarChart3, ArrowRight, ShieldAlert } from 'lucide-react';

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const projects = [
    {
      title: 'Smart Inventory System',
      description: 'Full-stack, QR-enabled inventory management platform for asset tracking, spare management, and personnel operations.',
      technologies: ['FastAPI', 'Firebase', 'Supabase', 'React', 'TS'],
      githubUrl: 'https://github.com/NithinS0/Smart-Inventory-System',
      icon: QrCode,
      color: 'from-[#00b4db] to-[#0083b0]',
    },
    {
      title: 'Image Captioning System',
      description: 'Deep learning system combining CNNs and Transformers to automatically generate meaningful descriptions for visual input.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'NLP', 'CNN'],
      githubUrl: 'https://github.com/NithinS0/Image-Captioning-using-ResNet50-and-Transformers',
      icon: ImageIcon,
      color: 'from-[#ff4b2b] to-[#ff416c]',
    },
    {
      title: 'Skill Hive',
      description: 'Village skill directory and service-booking system connecting local workers with users through a role-based platform.',
      technologies: ['MySQL', 'React', 'Python', 'Tailwind'],
      githubUrl: 'https://github.com/NithinS0/Skill-Hive',
      icon: Database,
      color: 'from-[#7c3aed] to-[#06b6d4]',
    },
    {
      title: 'Lung Cancer Detection',
      description: 'VGG16-based transfer learning model for medical image classification, achieving 99% accuracy on diagnosis detection.',
      technologies: ['VGG16', 'TensorFlow', 'OpenCV'],
      githubUrl: 'https://github.com/NithinS0/Lung-Cancer-Detection',
      icon: Stethoscope,
      color: 'from-[#11998e] to-[#38ef7d]',
    },
    {
      title: 'Catalyst CRM',
      description: 'AI-native Customer Relationship Management platform designed to intelligently discover audiences and automate personalized campaigns.',
      technologies: ['FastAPI', 'Next.js', 'LangChain', 'Supabase', 'Docker'],
      githubUrl: 'https://github.com/NithinS0/Catalyst-CRM',
      icon: BarChart3,
      color: 'from-[#7c3aed] to-[#00b4db]',
    },
    {
      title: 'AI Backdoor Detection',
      description: 'Adaptive behavioral fingerprinting framework to detect backdoor vulnerabilities and hidden malicious behaviors in black-box ML models.',
      technologies: ['PyTorch', 'Transformers', 'NLP', 'AI Security', 'Python'],
      githubUrl: 'https://github.com/NithinS0',
      icon: ShieldAlert,
      color: 'from-[#ff4b2b] to-[#ff416c]',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 bg-transparent transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10 md:mb-16">
            <div className="space-y-3">
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white transition-colors duration-500 tracking-tight">
                Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">Innovations</span>
              </h2>
              <p className="text-slate-600 dark:text-gray-400 transition-colors duration-500 text-base sm:text-lg max-w-xl">
                A selection of my builds in AI, Cloud, and Software Engineering.
              </p>
            </div>
            <a
              href="https://github.com/NithinS0"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-slate-800 dark:text-white font-bold bg-slate-100 dark:bg-white/5 px-5 py-3 rounded-xl hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200/80 dark:border-0 transition-all text-sm whitespace-nowrap self-start sm:self-auto shadow-sm"
            >
              <span>VIEW ALL</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Grid — 1 col mobile, 2 tablet, 3 desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative flex flex-col bg-white dark:bg-[#121214] rounded-[24px] border border-slate-200/60 dark:border-[#2a2a2e] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
              >
                {/* Visual Header */}
                <div className={`relative h-[180px] w-full bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                  {/* Grid Overlay */}
                  <div
                    className="absolute inset-0 opacity-15 pointer-events-none"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />
                  {/* Monospace Glass ID Badge */}
                  <span className="absolute top-5 right-5 px-3 py-1 bg-white/10 border border-white/10 backdrop-blur-md rounded-full font-mono text-xs font-bold text-white/90">
                    #0{index + 1}
                  </span>
                  {/* Centered Icon Container */}
                  <div className="w-[60px] h-[60px] rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white shadow-lg shadow-black/10 group-hover:scale-110 transition-transform duration-500">
                    <project.icon size={26} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-grow flex flex-col">
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white transition-colors duration-500 mb-2">{project.title}</h3>
                  <p className="text-slate-600 dark:text-gray-400 transition-colors duration-500 text-sm mb-5 leading-relaxed flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-full bg-slate-50 dark:bg-[#121214] border border-slate-200 dark:border-[#2a2a2e] text-[10px] font-bold text-slate-500 dark:text-[#a0a0a8] uppercase tracking-wider transition-colors hover:text-slate-900 dark:hover:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 dark:border-[#2a2a2e] hover:border-slate-900 dark:hover:border-white rounded-full bg-transparent hover:bg-slate-900 dark:hover:bg-white text-slate-500 dark:text-[#a0a0a8] hover:text-white dark:hover:text-[#0a0a0b] text-sm font-bold transition-all duration-300"
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