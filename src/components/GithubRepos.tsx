import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Plus, Github, FolderOpen, Terminal } from 'lucide-react';

const GithubRepos = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const [expandedIndex, setExpandedIndex] = useState<number>(-1);

  const repos = [
    {
      name: 'Smart-Inventory-System',
      description: 'Full-stack, QR-enabled inventory management platform for asset tracking, spare management, and factory operations.',
      url: 'https://github.com/NithinS0/Smart-Inventory-System',
      tech: 'FastAPI, Supabase, React',
    },
    {
      name: 'Catalyst-CRM',
      description: 'AI-native Customer Relationship Management platform featuring automated marketing campaign generation and audience segment discovery.',
      url: 'https://github.com/NithinS0/Catalyst-CRM',
      tech: 'FastAPI, Next.js, LangChain',
    },
    {
      name: 'Image-Captioning-using-ResNet50-and-Transformers',
      description: 'Deep learning vision-language model integrating a ResNet50 CNN encoder and a Transformer decoder for automated caption generation.',
      url: 'https://github.com/NithinS0/Image-Captioning-using-ResNet50-and-Transformers',
      tech: 'Python, TensorFlow, NLP',
    },
    {
      name: 'Agentic-Company-Scout',
      description: 'Multi-agent corporate research and intelligence gathering platform designed to scan public profiles, news, and financial files.',
      url: 'https://github.com/NithinS0/Agentic-Company-Scout',
      tech: 'Python, LangGraph, RAG',
    },
    {
      name: 'Lung-Cancer-Detection-Using-VGG16-DCNN',
      description: 'VGG16-based deep convolutional neural network optimized for thoracic medical scan analysis and diagnosis detection.',
      url: 'https://github.com/NithinS0/Lung-Cancer-Detection-Using-VGG16-DCNN',
      tech: 'VGG16, TensorFlow, OpenCV',
    },
    {
      name: 'Skill-Hive',
      description: 'Decentralized local skills directory and booking marketplace connecting gig workers with localized neighborhood opportunities.',
      url: 'https://github.com/NithinS0/Skill-Hive',
      tech: 'MySQL, React, Tailwind',
    },
  ];

  const borderColors = [
    'border-l-[#c3a6ff]', // Purple
    'border-l-[#89b4fa]', // Blue
    'border-l-[#10b981]', // Green
    'border-l-[#f9e2af]', // Yellow
  ];

  const textColors = [
    'text-[#c3a6ff]',
    'text-[#89b4fa]',
    'text-[#10b981]',
    'text-[#f9e2af]',
  ];

  const handleItemClick = (url: string, index: number) => {
    if (window.innerWidth > 768) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      setExpandedIndex(expandedIndex === index ? -1 : index);
    }
  };

  const handleMouseEnter = (index: number) => {
    if (window.innerWidth > 768) {
      setExpandedIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setExpandedIndex(-1);
    }
  };

  return (
    <section id="github" className="py-20 md:py-28 bg-transparent transition-colors duration-500 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.01] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none transition-colors duration-500" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white transition-colors duration-500 tracking-tight mb-4 flex items-center justify-center gap-3">
              <Github className="w-8 h-8 sm:w-10 sm:h-10 text-slate-900 dark:text-white transition-colors duration-500" />
              Open Source <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">Workspace</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6" />
            <p className="text-slate-600 dark:text-gray-400 transition-colors duration-500 text-base max-w-xl mx-auto">
              A browseable directory of my public codebases, styled as IDE text editor panels.
            </p>
          </div>

          {/* Accordion Stack */}
          <div className="space-y-4">
            {repos.map((repo, index) => {
              const borderClass = borderColors[index % borderColors.length];
              const textClass = textColors[index % textColors.length];
              const isExpanded = expandedIndex === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleItemClick(repo.url, index)}
                  className={`group relative bg-slate-50 dark:bg-[#0a0a0b] border border-slate-200/60 dark:border-white/[0.04] border-l-4 ${borderClass} rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer ${
                    isExpanded
                      ? 'md:translate-x-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)]'
                      : 'hover:bg-slate-100/50 dark:hover:bg-[#0c0c0e]'
                  }`}
                >
                  {/* Header Bar */}
                  <div className="flex justify-between items-center py-5 px-6 sm:px-8">
                    <div className="flex items-center gap-3">
                      <Terminal className={`w-4 h-4 ${textClass} opacity-80`} />
                      <span className="font-mono text-xs sm:text-sm text-slate-500 dark:text-gray-400 tracking-wider">
                        src/repos/
                        <span className="text-slate-800 dark:text-white font-bold">{repo.name}</span>
                      </span>
                    </div>
                    <button
                      className="p-1 rounded-lg text-slate-500 hover:text-slate-800 dark:text-gray-500 dark:group-hover:text-white transition-colors duration-300"
                      aria-label={isExpanded ? 'Collapse' : 'Expand'}
                    >
                      <Plus
                        size={18}
                        className={`transition-transform duration-500 transform ${
                          isExpanded ? 'rotate-45 text-rose-500' : 'rotate-0'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Body Content */}
                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      isExpanded
                        ? 'max-h-[350px] border-t border-slate-200 dark:border-white/[0.04] opacity-100'
                        : 'max-h-0 opacity-0 pointer-events-none'
                    } overflow-hidden`}
                  >
                    <div className="bg-slate-100/50 dark:bg-[#121214] p-6 sm:p-8 flex gap-6 sm:gap-8">
                      {/* Left: Code Line Numbers (IDE Theme) */}
                      <div className="hidden sm:flex flex-col font-mono text-xs text-slate-400 dark:text-gray-600 select-none border-r border-slate-200 dark:border-white/5 pr-4 text-right gap-1 min-w-[24px]">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                      </div>

                      {/* Right: Repo Info */}
                      <div className="flex-1 flex flex-col gap-3">
                        <div className="flex items-center gap-2 flex-wrap">
                          <FolderOpen className={`w-4 h-4 ${textClass}`} />
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                            {repo.name}
                          </h3>
                          <span className="text-[10px] font-mono font-bold bg-slate-200/60 dark:bg-white/5 px-2 py-0.5 rounded text-slate-600 dark:text-gray-500 uppercase tracking-wider border border-slate-300/40 dark:border-white/5">
                            {repo.tech}
                          </span>
                        </div>

                        <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">
                          {repo.description}
                        </p>

                        <div className="pt-2">
                          <a
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors uppercase tracking-wider"
                          >
                            View on GitHub ↗
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubRepos;
