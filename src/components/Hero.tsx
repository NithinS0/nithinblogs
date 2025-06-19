import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import ParticleField from './ParticleField';

const FloatingCube = () => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#3B82F6" wireframe />
      </mesh>
    </Float>
  );
};

const Hero = () => {
  const socialLinks = [
    { icon: Github, url: 'https://github.com/NithinS0', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com/in/nithin01', label: 'LinkedIn' },
    { icon: Instagram, url: 'https://www.instagram.com/nithinsivakumar', label: 'Instagram' },
    { icon: Twitter, url: 'https://x.com/SNithin_/', label: 'Twitter' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} />
          <ParticleField />
          <FloatingCube />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-900/80 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Nithin S
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light">
              AI Enthusiast | ML Practitioner | Python Developer
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-400 leading-relaxed">
              Passionate about building intelligent systems that solve real-world problems. 
              Currently pursuing B.Tech in Artificial Intelligence at SRM University, 
              focusing on machine learning, deep learning, and scalable AI solutions.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-blue-600/20 
                         hover:scale-110 transform transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                aria-label={social.label}
              >
                <social.icon size={24} className="text-gray-300 hover:text-blue-400 transition-colors" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium
                       hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300
                       shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-blue-400 rounded-full text-blue-400 font-medium
                       hover:bg-blue-400 hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;