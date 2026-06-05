import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function Features() {
  return (
    <section className="relative w-full py-32 px-6 bg-bloom/20 overflow-hidden" id="features">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Text */}
          <div className="flex flex-col items-start text-left">
            <AnimatedSection delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 text-forest font-bold tracking-widest uppercase text-xs mb-6 border border-emerald/20">
                Core Architecture
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-black tracking-tight mb-8 leading-[1.1]">
                A foundation built for <span className="text-emerald">unprecedented scale.</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <p className="text-lg text-forest/80 font-medium mb-10 leading-relaxed">
                Braven Quill isn't a simple wrapper. We deploy custom models, enterprise-grade security protocols, and proprietary workflows designed to integrate directly into your most sensitive operations.
              </p>
            </AnimatedSection>

            <div className="flex flex-col gap-6">
              {[
                { title: 'Military-Grade Encryption', desc: 'Your data never leaves your secure tenant.' },
                { title: 'Sub-second Latency', desc: 'Optimized inference engines for real-time decisions.' },
                { title: 'Infinite Scalability', desc: 'From 100 to 10M requests effortlessly.' }
              ].map((feature, i) => (
                <AnimatedSection key={i} delay={450 + (i * 100)}>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-emerald/20 flex items-center justify-center shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-forest"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-forest text-lg">{feature.title}</h4>
                      <p className="text-forest/70 text-sm mt-1">{feature.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <AnimatedSection delay={300} className="w-full">
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[40px] bg-gradient-to-br from-forest to-emerald p-1 overflow-hidden shadow-[0_20px_50px_rgba(7,64,38,0.2)]">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwaGF0aCBkPSJNMCAwdjQwTTAgMGg0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-40"></div>
              
              <div className="w-full h-full bg-[#0a1f14] rounded-[38px] relative overflow-hidden flex items-center justify-center">
                {/* Abstract Data Visualization */}
                <div className="absolute w-[150%] h-[150%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#0a1f14_0%,#1f8255_50%,#0a1f14_100%)] opacity-30 blur-2xl"></div>
                <div className="relative z-10 w-3/4 h-3/4 border border-emerald/30 rounded-full flex items-center justify-center">
                  <div className="w-2/3 h-2/3 border border-emerald/50 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-1/3 h-1/3 bg-emerald rounded-full shadow-[0_0_40px_rgba(31,130,85,1)]"></div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
