import React from 'react';
import { Github, Linkedin, Instagram, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, url: 'https://github.com/NithinS0', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com/in/nithin01', label: 'LinkedIn' },
    { icon: Instagram, url: 'https://www.instagram.com/nithinsivakumar', label: 'Instagram' },
    { icon: Twitter, url: 'https://x.com/SNithin_/', label: 'Twitter' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            
            {/* Brand */}
            <div className="text-center md:text-left">
              <button
                onClick={scrollToTop}
                className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent
                         hover:from-blue-300 hover:to-purple-300 transition-all duration-300 cursor-pointer"
              >
                Nithin S
              </button>
              <p className="text-gray-400 mt-2">AI Enthusiast & Developer</p>
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
                           hover:scale-110 transform transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25
                           group"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                </a>
              ))}
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-right">
              <div className="space-y-2">
                <a href="mailto:nithin200511@gmail.com" className="block text-gray-400 hover:text-blue-400 transition-colors">
                  nithin200511@gmail.com
                </a>
                <div className="text-gray-400">Chennai, Tamil Nadu</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© 2025 Nithin S | Built with React, HTML & CSS</span>
              <Heart size={16} className="text-red-400 animate-pulse" />
            </div>

            {/* Additional Info */}
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span>SRM University</span>
              <span>•</span>
              <span>B.Tech AI</span>
              <span>•</span>
              <span>Chennai</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;