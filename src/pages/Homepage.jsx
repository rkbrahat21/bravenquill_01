import React, { useEffect } from 'react';

// Core Components
import Hero from '../components/Hero';
import PainPoints from '../components/PainPoints';
import Services from '../components/Services';
import Process from '../components/Process';
import CaseStudies from '../components/CaseStudies';
import CTA from '../components/CTA';

export default function Homepage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full flex flex-col font-ui">
      <Hero />
      <PainPoints />
      <Services />
      <Process />
      <CaseStudies />
      <CTA />
    </main>
  );
}
