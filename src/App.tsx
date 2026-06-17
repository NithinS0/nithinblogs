import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import GithubRepos from "./components/GithubRepos";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MouseFollower from "./components/MouseFollower";
import InteractiveBackground from "./components/InteractiveBackground";
import { lazy, Suspense, Component, ReactNode, useState } from "react";

const GlobalCanvas = lazy(() =>
  import("./components/HeroCanvas").catch(() => ({ default: () => <></> })),
);

class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-[#fafafc] text-slate-900 dark:bg-[#050810] dark:text-white transition-colors duration-500 overflow-x-hidden relative">
      <MouseFollower />
      <InteractiveBackground />

      {/* Global 3D Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-60 dark:opacity-40 transition-opacity duration-500">
        <ErrorBoundary>
          <Suspense fallback={null}>
            <GlobalCanvas activeSection={activeSection} />
          </Suspense>
        </ErrorBoundary>
      </div>

      {/* Premium Glassmorphism Overlay to ensure text legibility */}
      <div className="fixed inset-0 z-[1] pointer-events-none bg-white/30 dark:bg-[#050810]/60 backdrop-blur-[3px] transition-colors duration-500" />

      <div className="relative z-10">
        <Navigation
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
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
    </div>
  );
}

export default App;
