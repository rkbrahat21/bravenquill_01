import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function CTA() {
  return (
    <section className="w-full bg-forest text-white py-24 md:py-32 px-6">
      <div className="max-w-250 mx-auto flex flex-col items-center text-center">

        <AnimatedSection delay={0}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-[1.1] tracking-tight mb-6">
            Unlock Growth with <span className="text-celadon">AI & Automation</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed max-w-3xl mb-4">
            Our AI Readiness Assessment offers a clear view of where AI and automation can bring the most value to your business. We evaluate your processes, systems, and data to identify practical opportunities and create a detailed implementation roadmap.
          </p>
          <p className="text-base text-celadon font-bold mb-10">
            Start with a clear strategy before committing to change.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="bg-white/5 border border-white/20 p-5 md:p-6 rounded-3xl mb-10 max-w-2xl relative overflow-hidden group hover:bg-white/10 transition-colors duration-300">
            <div className="absolute top-0 left-0 w-1 h-full bg-emerald"></div>
            <p className="text-base md:text-lg font-medium text-white/90">
              <span className="font-bold text-emerald">No Risk Guarantee:</span> If we can't identify at least 5 AI & Automation opportunities with positive ROI, our assessment fee is fully refunded.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
            <button className="px-6 py-3 bg-emerald text-white rounded-full font-bold tracking-widest uppercase text-xs shadow-[0_10px_30px_rgba(31,130,85,0.3)] hover:shadow-[0_15px_40px_rgba(31,130,85,0.4)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
              Expose hidden growth
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white/20 text-white rounded-full font-bold tracking-widest uppercase text-xs hover:border-white hover:bg-white/5 transition-all duration-300 w-full sm:w-auto">
              Chat with our CTO
            </button>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-xs font-bold tracking-wider uppercase text-white/50">
            <span>Clients save an average of 260+ hours annually</span>
            <span className="hidden md:inline text-white/20">•</span>
            <span>ROI realised within 90 days</span>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
