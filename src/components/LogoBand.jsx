import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function LogoBand() {
  return (
    <section className="w-full py-16 bg-celadon/20 border-t border-b border-emerald/10 overflow-hidden flex flex-col items-center justify-center">
      <AnimatedSection delay={0}>
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-forest/40 mb-8 text-center">
          Trusted by operational leaders
        </p>
      </AnimatedSection>
      
      <div className="w-full relative flex items-center">
        {/* Gradients for fade effect on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F4FAF7] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F4FAF7] to-transparent z-10 pointer-events-none"></div>

        <div className="flex gap-16 md:gap-32 items-center animate-scroll whitespace-nowrap min-w-full">
          {[1, 2].map((group) => (
            <div key={group} className="flex gap-16 md:gap-32 items-center opacity-40 grayscale">
              <span className="text-2xl font-heading font-extrabold text-forest">ACME CORP</span>
              <span className="text-2xl font-heading font-extrabold text-forest">VOGUE</span>
              <span className="text-2xl font-heading font-extrabold text-forest">FAST COMPANY</span>
              <span className="text-2xl font-heading font-extrabold text-forest">GLOBEX</span>
              <span className="text-2xl font-heading font-extrabold text-forest">SOYLENT</span>
              <span className="text-2xl font-heading font-extrabold text-forest">INITECH</span>
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}} />
    </section>
  );
}
