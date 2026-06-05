import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function Hero() {
  return (
    <section className="w-full bg-white pt-32 pb-16 relative overflow-hidden">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-bloom rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-celadon/20 rounded-full blur-[100px] opacity-60"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Main Hero Content */}
        <div className="flex flex-col items-start max-w-4xl pt-12 pb-24">
          <AnimatedSection delay={0}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-forest leading-[1.05] tracking-tight mb-6">
              Grow Revenue without Growing Complexity
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <p className="text-lg md:text-xl text-forest/70 font-medium leading-relaxed max-w-3xl mb-8">
              We identify where AI & automation will save you the most time and money - then we build it.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button className="px-6 py-3 bg-emerald text-white rounded-full font-bold tracking-widest uppercase text-xs shadow-[0_10px_30px_rgba(31,130,85,0.3)] hover:shadow-[0_15px_40px_rgba(31,130,85,0.4)] hover:-translate-y-1 transition-all duration-300">
                See How It Works
              </button>
              
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-xs font-bold text-forest">Your dedicated team of AI & automation process consultants</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-xs font-bold text-forest">Custom Built Workflows</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Metrics Bar */}
        <AnimatedSection delay={300}>
          <div className="w-full bg-forest rounded-[24px] p-8 md:p-10 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
              
              {/* Metric 1 */}
              <div className="flex flex-col gap-1">
                <span className="text-3xl md:text-4xl font-heading font-extrabold text-white">£100K+</span>
                <span className="text-xs font-bold uppercase tracking-wider text-celadon/80">Revenue unlocked per client</span>
              </div>
              
              {/* Metric 2 */}
              <div className="flex flex-col gap-1">
                <span className="text-3xl md:text-4xl font-heading font-extrabold text-white">3x</span>
                <span className="text-xs font-bold uppercase tracking-wider text-celadon/80">Faster pipeline velocity</span>
              </div>
              
              {/* Metric 3 */}
              <div className="flex flex-col gap-1">
                <span className="text-3xl md:text-4xl font-heading font-extrabold text-white">12</span>
                <span className="text-xs font-bold uppercase tracking-wider text-celadon/80">Avg. opportunities identified</span>
              </div>
              
              {/* Metric 4 */}
              <div className="flex flex-col gap-1">
                <span className="text-3xl md:text-4xl font-heading font-extrabold text-white">90-Day</span>
                <span className="text-xs font-bold uppercase tracking-wider text-celadon/80">ROI realised</span>
              </div>
              
            </div>
            
            <div className="w-full flex justify-end mt-8 pt-6 border-t border-white/10 relative z-10">
              <span className="text-xs font-ui tracking-wider text-white/50 uppercase">
                No obligation. NDA available on request.
              </span>
            </div>
            
            {/* Dark green ambient glow inside the metrics bar */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-emerald/10 to-transparent pointer-events-none"></div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
