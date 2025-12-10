import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;