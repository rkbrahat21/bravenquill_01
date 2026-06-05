import React from 'react';
import AnimatedSection from './AnimatedSection';

const FOOTER_CTA_IMG = "file:///C:/Users/rkbrahat/.gemini/antigravity-ide/brain/482179b5-fe13-46cb-b68e-b21940eb02bf/footer_meeting_1779579375942.png";

export default function FooterCTA() {
  return (
    <section className="w-full py-32 px-6 bg-bloom relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection delay={0}>
          <div className="bg-white rounded-[40px] shadow-[0_30px_80px_rgba(7,64,38,0.1)] overflow-hidden flex flex-col md:flex-row border border-forest/5">
            
            {/* Left Image */}
            <div className="w-full md:w-5/12 h-64 md:h-auto relative">
              <img src={FOOTER_CTA_IMG} alt="Team meeting" className="w-full h-full object-cover" />
            </div>

            {/* Right Content */}
            <div className="w-full md:w-7/12 p-10 md:p-16 lg:p-20 flex flex-col items-start justify-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-black leading-[1.1] tracking-tight mb-8">
                Let's build your blueprint. <span className="text-emerald">The first 15 minutes are on us.</span>
              </h2>
              
              <p className="text-lg text-forest/70 font-medium leading-relaxed mb-10">
                When you book an audit, our system architects will analyze your current workflow bottlenecks, show you live voice prototypes relevant to your industry, and give you a clear map of what can be automated.
              </p>

              <div className="flex flex-col gap-4 mb-10 w-full">
                <div className="flex items-center gap-4 bg-bloom/50 p-4 rounded-xl border border-emerald/10">
                  <div className="w-8 h-8 rounded-full bg-emerald text-white font-bold flex items-center justify-center shrink-0">1</div>
                  <span className="font-bold text-forest">Select a Time</span>
                </div>
                <div className="flex items-center gap-4 bg-bloom/50 p-4 rounded-xl border border-emerald/10">
                  <div className="w-8 h-8 rounded-full bg-emerald text-white font-bold flex items-center justify-center shrink-0">2</div>
                  <span className="font-bold text-forest">Receive Your Blueprint</span>
                </div>
                <div className="flex items-center gap-4 bg-bloom/50 p-4 rounded-xl border border-emerald/10">
                  <div className="w-8 h-8 rounded-full bg-emerald text-white font-bold flex items-center justify-center shrink-0">3</div>
                  <span className="font-bold text-forest">Launch Your Automations</span>
                </div>
              </div>

              <button className="w-full px-8 py-5 bg-forest text-white rounded-full font-bold tracking-widest uppercase text-sm hover:bg-emerald hover:-translate-y-1 transition-all duration-300 shadow-xl text-center">
                Claim Your Free System Audit
              </button>
              <p className="text-xs text-forest/50 font-medium text-center w-full mt-4 uppercase tracking-wider">
                No credit card required.
              </p>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
