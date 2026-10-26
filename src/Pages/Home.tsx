import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero/Hero';
import { Work } from '../components/Work/Work';
import { Experience } from '../components/Experience/Experience';
import { About } from '../components/About/About';
import { Contact } from '../components/Contact/Contact';
import { Footer } from '../components/Footer/Footer';
import { AppDialog } from '../components/AppDialog/AppDialog';
import type { Project } from '../content';
import './Home.css';

export default function Home() {
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const { hash } = useLocation();

  // Arriving from /projects or /experience (or any #link) lands on that section.
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);

  return (
    <div className="site">
      <Hero />
      <main>
        <Work onOpen={setOpenProject} />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
      <AppDialog project={openProject} onClose={() => setOpenProject(null)} />
    </div>
  );
}
