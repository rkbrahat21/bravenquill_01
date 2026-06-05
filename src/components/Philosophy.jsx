import React from 'react';
import AnimatedSection from './AnimatedSection';

const PHILOSOPHY_IMG = "file:///C:/Users/rkbrahat/.gemini/antigravity-ide/brain/482179b5-fe13-46cb-b68e-b21940eb02bf/hero_architectural_1779578291542.png";

export default function Philosophy() {
  return (
    <section className="w-full py-32 px-6 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Side: Overlapping Image & Card */}
        <AnimatedSection delay={0} className="w-full md:w-1/2 relative">
          <div className="relative w-full aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
            <img src={PHILOSOPHY_IMG} alt="Architecture" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-forest/20 mix-blend-multiply"></div>
          </div>
          
          <div className="absolute -bottom-10 -right-10 bg-emerald text-white p-8 md:p-12 rounded-[32px] shadow-[0_20px_40px_rgba(31,130,85,0.3)] max-w-xs rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
            <h3 className="text-3xl font-heading font-extrabold leading-tight">
              Systems &gt; Heroics
            </h3>
          </div>
        </AnimatedSection>

        {/* Right Side: Text */}
        <AnimatedSection delay={150} className="w-full md:w-1/2 flex flex-col items-start mt-16 md:mt-0 md:pl-12">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-emerald mb-6">
            Philosophy
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-black leading-[1.1] tracking-tight mb-8">
            We design the systems that make <span className="text-emerald">growth repeatable.</span>
          </h2>
          <p className="text-xl text-forest/70 font-medium leading-relaxed mb-10">
            Reclaim your time from manual repetition. Every hour your team spends copying customer details between forms, sending booking reminders, or answering "Where is my order?" is an hour lost. 
          </p>
          <p className="text-xl text-forest/70 font-medium leading-relaxed mb-10">
            We map your current workflows and build integrations that run silently in the background, freeing your staff to focus on high-value growth.
          </p>
          <button className="px-10 py-5 bg-white text-forest border-2 border-forest/10 rounded-full font-bold tracking-widest uppercase text-sm hover:border-emerald hover:text-emerald hover:shadow-lg transition-all duration-300">
            Explore Solutions
          </button>
        </AnimatedSection>

      </div>
    </section>
  );
}
