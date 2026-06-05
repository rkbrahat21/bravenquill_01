import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Diagnosis from '../components/Diagnosis';
import RealProblem from '../components/RealProblem';
import FiveTraps from '../components/FiveTraps';
import LogoBand from '../components/LogoBand';
import Philosophy from '../components/Philosophy';
import Founder from '../components/Founder';
import Strategy from '../components/Strategy';
import Testimonials from '../components/Testimonials';
import FooterCTA from '../components/FooterCTA';

export default function Homepage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full flex flex-col overflow-hidden bg-white">
      <Hero />
      <Diagnosis />
      <RealProblem />
      <FiveTraps />
      <LogoBand />
      <Philosophy />
      <Founder />
      <Strategy />
      <Testimonials />
      <FooterCTA />
    </main>
  );
}
