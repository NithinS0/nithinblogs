import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import GithubRepos from './components/GithubRepos';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MouseFollower from './components/MouseFollower';
import InteractiveBackground from './components/InteractiveBackground';

function App() {
  return (
    <div className="min-h-screen bg-[#fafafc] text-slate-900 dark:bg-[#050810] dark:text-white transition-colors duration-500 overflow-x-hidden">
      <MouseFollower />
      <InteractiveBackground />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GithubRepos />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;