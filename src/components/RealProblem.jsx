import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function RealProblem() {
  return (
    <section className="w-full py-32 px-6 bg-white flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection delay={0}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-black mb-8 leading-[1.1] tracking-tight">
            You built a real business, but it still <span className="text-emerald">relies purely on your effort.</span>
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={150}>
          <p className="text-xl md:text-2xl text-forest/70 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            Early growth is fueled by sheer willpower. But scaling requires intelligent infrastructure. Uncouple your growth from your payroll.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={300}>
          <button className="px-10 py-5 bg-forest text-white rounded-full font-bold tracking-widest uppercase text-sm hover:bg-emerald hover:-translate-y-1 transition-all duration-300 shadow-xl">
            See How We Can Help
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}
