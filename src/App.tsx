import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
