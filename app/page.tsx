import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Hero from './components/sections/Hero';
import Navbar from './components/sections/Navbar';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}