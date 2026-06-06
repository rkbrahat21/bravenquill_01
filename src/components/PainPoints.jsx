import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function PainPoints() {
  const painPoints = [
    {
      title: "Foundations Under Strain",
      desc: "Manual workarounds are hiding deeper problems. Layering automation onto fragmented workflows amplifies inefficiency instead of fixing it - making future improvements costlier."
    },
    {
      title: "Complexity Without Control",
      desc: "More tools, less visibility. Without governance and clear ownership, every new integration adds risk. Scaling becomes harder, not easier."
    },
    {
      title: "Effort Without Return",
      desc: "Busy does not mean productive. Point solutions consume budget without delivering measurable ROI. Without prioritisation, complexity grows and value stalls."
    },
    {
      title: "Governance & Security Gaps",
      desc: "Speed without safeguards is a liability. Rapid AI adoption without compliance, data governance, and security frameworks exposes your business to regulatory and operational risk."
    }
  ];
  return (
    <section className="w-full py-24 md:py-32 px-6 relative z-10 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">

        <AnimatedSection delay={0}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-forest leading-[1.1] tracking-tight mb-6 max-w-4xl">
            Why Scaling with AI & Automation is <span className="text-emerald">Harder Than It Looks</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <p className="text-lg md:text-xl text-forest/70 font-medium leading-relaxed max-w-3xl mb-16">
            As organisations scale, processes that once operated smoothly begin to stretch under increased demand. Manual efforts grow, complexity deepens, and what was once efficient becomes a bottleneck.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 w-full text-left">
          {painPoints.map((point, idx) => (
            <AnimatedSection key={idx} delay={200 + (idx * 100)}>
              <div className="flex flex-col gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-forest/5 flex items-center justify-center group-hover:bg-emerald transition-colors duration-300">
                  <svg className="w-5 h-5 text-forest group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-forest">
                  {point.title}
                </h3>
                <p className="text-base text-forest/70 font-medium leading-relaxed pr-6">
                  {point.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
