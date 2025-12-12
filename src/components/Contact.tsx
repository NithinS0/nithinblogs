import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nithin200511@gmail.com',
      href: 'mailto:nithin200511@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9042645273',
      href: 'tel:+919042645273'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chennai, Tamil Nadu, India',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Communication-themed Floating Shapes */}
        <div className="absolute top-16 left-16 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-sm animate-pulse shadow-lg shadow-blue-500/10"></div>
        <div className="absolute top-32 right-24 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg rotate-45 blur-xl animate-bounce shadow-lg shadow-purple-500/10"></div>
        <div className="absolute bottom-40 left-1/3 w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full animate-ping shadow-lg shadow-green-500/10"></div>
        <div className="absolute top-1/2 right-16 w-18 h-18 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg rotate-12 animate-pulse shadow-lg shadow-pink-500/10" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-24 right-1/4 w-14 h-14 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-lg animate-bounce shadow-lg shadow-cyan-500/10" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Message Bubbles */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              <div className={`w-3 h-3 rounded-full shadow-lg ${
                i % 4 === 0 ? 'bg-blue-400/40 shadow-blue-400/20' :
                i % 4 === 1 ? 'bg-purple-400/40 shadow-purple-400/20' :
                i % 4 === 2 ? 'bg-green-400/40 shadow-green-400/20' : 'bg-pink-400/40 shadow-pink-400/20'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Communication Network Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-pulse shadow-sm shadow-blue-400/10"></div>
          <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-pulse shadow-sm shadow-purple-400/10" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/20 to-transparent animate-pulse shadow-sm shadow-green-400/10" style={{ animationDelay: '2s' }}></div>
          
          {/* Vertical connection lines */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400/15 to-transparent animate-pulse shadow-sm shadow-blue-400/5" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400/15 to-transparent animate-pulse shadow-sm shadow-purple-400/5" style={{ animationDelay: '1.5s' }}></div>
        </div>

        {/* Large Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500/12 to-purple-500/12 rounded-full blur-3xl animate-pulse shadow-2xl shadow-blue-500/5"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-purple-500/12 to-pink-500/12 rounded-full blur-3xl animate-pulse shadow-2xl shadow-purple-500/5" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse shadow-2xl shadow-green-500/5" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Communication Icons */}
        <div className="absolute inset-0 text-gray-400/20 text-4xl font-mono">
          <div className="absolute top-24 left-24 animate-pulse drop-shadow-lg" style={{ animationDelay: '0s' }}>@</div>
          <div className="absolute top-40 right-40 animate-pulse drop-shadow-lg" style={{ animationDelay: '1s' }}>✉</div>
          <div className="absolute bottom-48 left-48 animate-pulse drop-shadow-lg" style={{ animationDelay: '2s' }}>📞</div>
          <div className="absolute bottom-32 right-32 animate-pulse drop-shadow-lg" style={{ animationDelay: '3s' }}>📍</div>
          <div className="absolute top-1/2 left-16 animate-pulse drop-shadow-lg" style={{ animationDelay: '1.5s' }}>💬</div>
          <div className="absolute top-1/3 right-16 animate-pulse drop-shadow-lg" style={{ animationDelay: '2.5s' }}>🌐</div>
        </div>

        {/* Message Bubble Trails */}
        <div className="absolute inset-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-ping"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: '3s'
              }}
            >
              <div className={`w-full h-full rounded-full shadow-lg ${
                i % 3 === 0 ? 'bg-blue-400/50 shadow-blue-400/20' :
                i % 3 === 1 ? 'bg-purple-400/50 shadow-purple-400/20' : 'bg-green-400/50 shadow-green-400/20'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Animated Signal Waves */}
        <div className="absolute inset-0">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="absolute border border-blue-400/10 rounded-full animate-ping"
              style={{
                left: '50%',
                top: '50%',
                width: `${(i + 1) * 100}px`,
                height: `${(i + 1) * 100}px`,
                marginLeft: `${-(i + 1) * 50}px`,
                marginTop: `${-(i + 1) * 50}px`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '4s'
              }}
            ></div>
          ))}
        </div>

        {/* Contact Form Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-4 bg-blue-400/30 rounded animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-4 bg-purple-400/30 rounded animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-40 h-6 bg-green-400/30 rounded animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`relative z-10 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 relative">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x bg-size-300 relative drop-shadow-lg">
                Get In Touch
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
                Let's discuss opportunities, collaborations, or just connect!
              </span>
              {/* Enhanced Subtle text glow */}
              <div className="absolute inset-0 bg-gray-400/15 blur-sm animate-pulse opacity-60"></div>
            </p>
          </div>

          {/* Contact Information Only */}
          <div className="max-w-2xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 text-center relative">
                  <span className="relative z-10 drop-shadow-sm">Let's Connect</span>
                  {/* Text glow effect */}
                  <div className="absolute inset-0 text-blue-400/20 blur-sm animate-pulse">Let's Connect</div>
                </h3>
                <p className="text-gray-400 text-lg mb-8 text-center relative">
                  <span className="relative z-10 drop-shadow-sm">
                    I'm always interested in discussing new opportunities, innovative projects, 
                    and collaborations in AI and machine learning. Feel free to reach out!
                  </span>
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`group flex items-center space-x-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg
                             hover:bg-gray-800/80 transition-all duration-300 transform hover:scale-105
                             ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
                             border border-gray-700/50 hover:border-blue-500/30 relative overflow-hidden shadow-sm`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    {/* Enhanced background animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Floating particles inside card */}
                    <div className="absolute inset-0 overflow-hidden">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 shadow-sm shadow-blue-400/20"
                          style={{
                            left: `${20 + i * 30}%`,
                            top: `${20 + i * 20}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: '2s'
                          }}
                        ></div>
                      ))}
                    </div>

                    <div className="p-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg relative overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      <info.icon size={24} className="text-blue-400 relative z-10 drop-shadow-sm" />
                      {/* Icon glow effect */}
                      <div className="absolute inset-0 bg-blue-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="relative z-10">
                      <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors drop-shadow-sm">{info.label}</div>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-white hover:text-blue-400 transition-colors font-medium drop-shadow-sm"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-white font-medium drop-shadow-sm">{info.value}</div>
                      )}
                    </div>

                    {/* Enhanced Animated border effect */}
                    <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-blue-500/30 transition-colors duration-300 shadow-sm"></div>
                    
                    {/* Enhanced Corner accents */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-blue-400/0 group-hover:border-blue-400/50 transition-colors duration-300 rounded-tl-lg shadow-sm"></div>
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-purple-400/0 group-hover:border-purple-400/50 transition-colors duration-300 rounded-br-lg shadow-sm"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;