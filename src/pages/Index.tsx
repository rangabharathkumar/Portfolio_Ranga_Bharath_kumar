import React from 'react';
import Hero from '@/components/sections/hero';
import Skills from '@/components/sections/skills';
import Education from '@/components/sections/education';
import Projects from '@/components/sections/projects';
import InteractiveCubeSection from '@/components/sections/interactive-cube';
import ContactSimple from '@/components/sections/contact-simple';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Skills />
      <Education />
      <Projects />
      <InteractiveCubeSection />
      <ContactSimple />
    </div>
  );
};

export default Index;
