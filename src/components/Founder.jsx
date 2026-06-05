import React from 'react';
import AnimatedSection from './AnimatedSection';

const PORTRAIT_IMG = "file:///C:/Users/rkbrahat/.gemini/antigravity-ide/brain/482179b5-fe13-46cb-b68e-b21940eb02bf/founder_portrait_1779579358971.png";

export default function Founder() {
  return (
    <section className="w-full py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        {/* Left Side: Vertical Portrait */}
        <AnimatedSection delay={0} className="w-full md:w-5/12">
          <div className="w-full aspect-[3/4] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(7,64,38,0.15)] relative group">
            <img src={PORTRAIT_IMG} alt="Founder" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-forest/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </AnimatedSection>

        {/* Right Side: Bio Text */}
        <AnimatedSection delay={150} className="w-full md:w-7/12 flex flex-col items-start">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-emerald mb-6">
            Meet the Architect
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-black leading-[1.1] tracking-tight mb-8">
            Built by engineers, <span className="text-emerald">not marketers.</span>
          </h2>
          <p className="text-xl text-forest/80 font-medium leading-relaxed mb-8">
            Braven Quill was founded to bridge the gap between high-level AI theory and practical, ground-level business operations. We saw too many companies being sold generic wrappers when what they actually needed was custom infrastructure.
          </p>
          <p className="text-xl text-forest/80 font-medium leading-relaxed mb-10">
            Our mission is simple: Uncouple your growth from your payroll. We build systems that allow you to scale your impact without scaling your stress.
          </p>
          
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="font-heading font-bold text-2xl text-forest">E. Braven</span>
              <span className="text-sm font-bold tracking-widest text-emerald uppercase mt-1">Lead Systems Architect</span>
            </div>
            <div className="w-24 h-1 bg-emerald rounded-full"></div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
