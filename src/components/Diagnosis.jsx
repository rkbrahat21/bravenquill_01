import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function Diagnosis() {
  return (
    <section className="w-full py-32 px-6 bg-bloom relative z-10 -mt-16 md:-mt-24">
      {/* Negative margin pulls this section slightly up into the belly curve of the hero if needed, or sits below it */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col">
            <AnimatedSection delay={0}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-black leading-[1.1] tracking-tight">
                Growth shouldn't rely on pure effort.
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <p className="text-3xl md:text-4xl font-heading font-bold text-forest/40 mt-6 leading-[1.1] tracking-tight">
                Your systems should support you.
              </p>
            </AnimatedSection>
          </div>

          {/* Right Column: Checklists */}
          <div className="flex flex-col gap-10">
            {[
              {
                title: "Missed Connections",
                desc: "Calls going to voicemail after hours or during peak rushes."
              },
              {
                title: "Human Overhead",
                desc: "Support agents spending 80% of their day answering repetitive order-tracking questions."
              },
              {
                title: "Siloed Systems",
                desc: "Leads coming in from booking forms but failing to sync with your actual CRM."
              }
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 150 + 150}>
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border-2 border-emerald/30 flex items-center justify-center shrink-0 group-hover:bg-emerald transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald group-hover:text-white transition-colors duration-300">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold text-forest mb-2">{item.title}</h3>
                    <p className="text-lg text-forest/70 font-medium">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
