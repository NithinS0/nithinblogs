import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  QrCode,
  Image as ImageIcon,
  Database,
  Stethoscope,
  BarChart3,
  ArrowRight,
  ShieldAlert,
  Cpu,
} from "lucide-react";

// Individual Project Card component to handle its own magnetic/glow state
const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  // Magnetic & Glow Effect Loop
  useEffect(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isHovered = false;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update glow position directly
      glow.style.setProperty("--x", `${x}px`);
      glow.style.setProperty("--y", `${y}px`);

      // Calculate tilt targets (normalized -1 to 1)
      targetX = ((x / rect.width) - 0.5) * 2;
      targetY = ((y / rect.height) - 0.5) * 2;
    };

    const handlePointerEnter = () => {
      isHovered = true;
      glow.style.opacity = "1";
    };

    const handlePointerLeave = () => {
      isHovered = false;
      targetX = 0;
      targetY = 0;
      glow.style.opacity = "0";
    };

    const animate = () => {
      // Lerp for smooth magnetic tilt
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;

      // Apply 3D tilt using CSS transform
      const rotateX = currentY * -10; // Max tilt degrees
      const rotateY = currentX * 10;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`;

      rafRef.current = requestAnimationFrame(animate);
    };

    card.addEventListener("pointermove", handlePointerMove);
    card.addEventListener("pointerenter", handlePointerEnter);
    card.addEventListener("pointerleave", handlePointerLeave);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      card.removeEventListener("pointermove", handlePointerMove);
      card.removeEventListener("pointerenter", handlePointerEnter);
      card.removeEventListener("pointerleave", handlePointerLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        ref={cardRef}
        className="group relative flex flex-col bg-white dark:bg-[#121214] rounded-[24px] border border-slate-200/60 dark:border-[#2a2a2e] overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
      >
        {/* Glow Element */}
        <div
          ref={glowRef}
          className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at var(--x, 0px) var(--y, 0px), rgba(255,255,255,0.06), transparent 40%)`
          }}
        />

        {/* Visual Header */}
        <div
          className={`relative h-[180px] w-full bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}
        >
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <span className="absolute top-5 right-5 px-3 py-1 bg-white/10 border border-white/10 backdrop-blur-md rounded-full font-mono text-xs font-bold text-white/90">
            #0{index + 1}
          </span>
          <div className="w-[60px] h-[60px] rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white shadow-lg shadow-black/10 group-hover:scale-110 transition-transform duration-500">
            <project.icon size={26} />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 flex-grow flex flex-col relative z-10 bg-white dark:bg-[#121214]">
          <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white transition-colors duration-500 mb-2">
            {project.title}
          </h3>
          <p className="text-slate-600 dark:text-gray-400 transition-colors duration-500 text-sm mb-5 leading-relaxed flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.map((tech: string, tIdx: number) => (
              <motion.span
                key={tIdx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * tIdx, duration: 0.3 }}
                className="px-3 py-1 rounded-full bg-slate-50 dark:bg-[#1a1a1d] border border-slate-200 dark:border-[#2a2a2e] text-[10px] font-bold text-slate-500 dark:text-[#a0a0a8] uppercase tracking-wider transition-colors hover:text-slate-900 dark:hover:text-white"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <div className="flex gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${project.demoUrl ? 'flex-1' : 'w-full'} flex items-center justify-center gap-2 py-2.5 border border-slate-200 dark:border-[#2a2a2e] hover:border-slate-900 dark:hover:border-white rounded-full bg-transparent hover:bg-slate-900 dark:hover:bg-white text-slate-500 dark:text-[#a0a0a8] hover:text-white dark:hover:text-[#0a0a0b] text-[11px] sm:text-xs font-black uppercase tracking-wider transition-all duration-300`}
            >
              <Github size={14} />
              Source Code
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-blue-500 dark:border-blue-400 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 text-white rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider transition-all duration-300"
              >
                <ArrowRight size={14} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "AetherFlow Enterprise",
      description:
        "An enterprise, AI-native distributed job scheduler running fault-tolerant workflow pipelines. Features PostgreSQL skip-locked coordination, interactive DAGs, and OpsGPT for automated failure post-mortems.",
      technologies: ["React Flow", "PostgreSQL", "LangGraph", "WebSockets", "TS"],
      githubUrl: "https://github.com/NithinS0/AetherFlow",
      demoUrl: "https://aetherflow-job.vercel.app/",
      icon: Cpu,
      color: "from-[#6366f1] via-[#3b82f6] to-[#10b981]",
    },
    {
      title: "Smart Inventory System",
      description:
        "Full-stack, QR-enabled inventory management platform for asset tracking, spare management, and personnel operations.",
      technologies: ["FastAPI", "QR Code", "Supabase", "React", "TS"],
      githubUrl: "https://github.com/NithinS0/Smart-Inventory-System",
      icon: QrCode,
      color: "from-[#00b4db] to-[#0083b0]",
    },
    {
      title: "Image Captioning System",
      description:
        "Deep learning system combining CNNs and Transformers to automatically generate meaningful descriptions for visual input.",
      technologies: ["Python", "TensorFlow", "Keras", "NLP", "CNN"],
      githubUrl:
        "https://github.com/NithinS0/Image-Captioning-using-ResNet50-and-Transformers",
      icon: ImageIcon,
      color: "from-[#ff4b2b] to-[#ff416c]",
    },
    {
      title: "Skill Hive",
      description:
        "Village skill directory and service-booking system connecting local workers with users through a role-based platform.",
      technologies: ["MySQL", "React", "Python", "Tailwind"],
      githubUrl: "https://github.com/NithinS0/Skill-Hive",
      icon: Database,
      color: "from-[#7c3aed] to-[#06b6d4]",
    },
    {
      title: "Catalyst CRM",
      description:
        "AI-native Customer Relationship Management platform designed to intelligently discover audiences and automate personalized campaigns.",
      technologies: ["FastAPI", "Next.js", "LangChain", "Supabase", "Docker"],
      githubUrl: "https://github.com/NithinS0/Catalyst-CRM",
      icon: BarChart3,
      color: "from-[#7c3aed] to-[#00b4db]",
    },
    {
      title: "AI Backdoor Detection",
      description:
        "Adaptive behavioral fingerprinting framework to detect backdoor vulnerabilities and hidden malicious behaviors in black-box ML models.",
      technologies: ["PyTorch", "Transformers", "NLP", "AI Security", "Python"],
      githubUrl: "https://github.com/NithinS0/Black-Box-Backdoor-Detection-in-Machine-Learning-Models",
      icon: ShieldAlert,
      color: "from-[#ff4b2b] to-[#ff416c]",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-transparent transition-colors duration-500 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10 md:mb-16">
            <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="space-y-3">
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white transition-colors duration-500 tracking-tight">
                Featured{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
                  Innovations
                </span>
              </h2>
              <p className="text-slate-600 dark:text-gray-400 transition-colors duration-500 text-base sm:text-lg max-w-xl">
                A selection of my builds in AI, Cloud, and Software Engineering.
              </p>
            </motion.div>
            <motion.a
              variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
              href="https://github.com/NithinS0"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-slate-800 dark:text-white font-bold bg-slate-100 dark:bg-white/5 px-5 py-3 rounded-xl hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200/80 dark:border-0 transition-all text-sm whitespace-nowrap self-start sm:self-auto shadow-sm"
            >
              <span>VIEW ALL</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>
          </div>

          {/* Grid — 1 col mobile, 2 tablet, 3 desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
