import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MouseFollower from './components/MouseFollower';
import InteractiveBackground from './components/InteractiveBackground';
import MouseInteractiveElements from './components/MouseInteractiveElements';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <MouseFollower />
      <InteractiveBackground />
      <MouseInteractiveElements />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;