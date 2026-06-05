import React, { useEffect } from 'react';

// New Automaly Architecture Components
import AutomalyHero from '../components/AutomalyHero';
import AutomalyPainPoints from '../components/AutomalyPainPoints';
import AutomalyServices from '../components/AutomalyServices';
import AutomalyProcess from '../components/AutomalyProcess';
import AutomalyCaseStudies from '../components/AutomalyCaseStudies';
import AutomalyCTA from '../components/AutomalyCTA';

export default function Homepage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full flex flex-col font-ui">
      <AutomalyHero />
      <AutomalyPainPoints />
      <AutomalyServices />
      <AutomalyProcess />
      <AutomalyCaseStudies />
      <AutomalyCTA />
    </main>
  );
}
