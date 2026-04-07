import { useInView } from 'react-intersection-observer';
import { Download, FileText, Award, Briefcase, GraduationCap } from 'lucide-react';

const Resume = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const resumeHighlights = [
    {
      icon: GraduationCap,
      title: 'Academic Profile',
      content: 'B.Tech in Artificial Intelligence',
      subtitle: 'SRM University · 2023 – 2027',
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Briefcase,
      title: 'Core Experience',
      content: 'AI Architect & ML Intern',
      subtitle: 'Tata Steel · Murugappa Group',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Award,
      title: 'Specialization',
      content: 'Deep Learning & CV',
      subtitle: 'Full Stack AI Engineering',
      gradient: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section id="resume" className="py-20 md:py-28 bg-[#050810] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 md:mb-16">
            <div className="space-y-3">
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                Curriculum <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Vitae</span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-md">
                A birds-eye view of my academic standing and professional milestones.
              </p>
            </div>

            <a
              href="https://drive.google.com/file/d/1OIxHFcB3wsg_3qRoeoLsBWMmthQvXZVx/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-7 sm:px-10 py-4 sm:py-5 bg-blue-600 hover:bg-blue-500 rounded-2xl sm:rounded-3xl text-white font-black shadow-2xl transition-all hover:-translate-y-1 hover:shadow-blue-500/25 text-sm sm:text-base self-start sm:self-auto"
            >
              <FileText size={20} />
              <span>DOWNLOAD RESUME</span>
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {resumeHighlights.map((item, index) => (
              <div
                key={index}
                className="group relative p-7 sm:p-10 bg-[#151b2d]/60 backdrop-blur-xl rounded-2xl sm:rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-6 sm:mb-8 shadow-xl group-hover:scale-110 transition-transform`}>
                  <item.icon size={24} className="sm:w-8 sm:h-8" />
                </div>

                <h3 className="text-gray-500 font-bold tracking-widest uppercase text-xs mb-3">{item.title}</h3>
                <h4 className="text-xl sm:text-2xl font-black text-white mb-2 leading-tight">{item.content}</h4>
                <p className="text-gray-400 font-medium text-sm">{item.subtitle}</p>

                {/* Shimmer bar */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl`} />
              </div>
            ))}
          </div>

          {/* Footer quote */}
          <div className="mt-16 sm:mt-20 flex flex-col items-center justify-center space-y-3 opacity-40">
            <div className="w-10 h-px bg-white/20" />
            <p className="text-gray-400 font-medium tracking-widest text-xs uppercase text-center px-4">
              Consistently pushing the boundaries of what's possible in AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
