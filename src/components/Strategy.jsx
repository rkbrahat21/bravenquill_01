import React from 'react';
import AnimatedSection from './AnimatedSection';

const BG_IMG = "file:///C:/Users/rkbrahat/.gemini/antigravity-ide/brain/482179b5-fe13-46cb-b68e-b21940eb02bf/hero_office_1_1779578276636.png";

export default function Strategy() {
  return (
    <section className="relative w-full py-32 md:py-48 px-6 bg-forest overflow-hidden flex items-center justify-center">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img src={BG_IMG} alt="Background" className="w-full h-full object-cover grayscale opacity-20" />
        <div className="absolute inset-0 bg-forest/80 mix-blend-multiply"></div>
      </div>

      {/* Faded Watermark Text */}
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center pointer-events-none z-0">
        <h2 className="text-[15vw] font-heading font-extrabold text-white/5 whitespace-nowrap select-none">
          CALM AS A STRATEGY
        </h2>
      </div>

      {/* Center Overlay Card */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <AnimatedSection delay={0}>
          <div className="bg-white p-8 md:p-16 lg:p-20 rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.3)] flex flex-col md:flex-row gap-16 md:gap-24">
            
            {/* Left Side */}
            <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-black leading-[1.1] tracking-tight mb-8">
                Your Business Needs <span className="text-emerald">A Plan.</span>
              </h3>
              <p className="text-lg text-forest/70 font-medium leading-relaxed mb-10">
                Traditionally, handling more volume meant hiring more staff. With automated AI systems, you can scale from 100 queries a day to 10,000 without hiring, training, or managing additional personnel.
              </p>
              <button className="px-10 py-5 bg-forest text-white rounded-full font-bold tracking-widest uppercase text-sm hover:bg-emerald hover:-translate-y-1 transition-all duration-300 shadow-xl">
                Claim Free System Audit
              </button>
            </div>

            {/* Right Side: Services List */}
            <div className="w-full md:w-1/2 flex flex-col gap-10 justify-center">
              {[
                {
                  title: "AI Voice Call Centers",
                  desc: "Scale to 10,000 concurrent calls with zero wait times."
                },
                {
                  title: "24/7 Receptionist & Booking",
                  desc: "Fill your calendar while your front desk is asleep."
                },
                {
                  title: "E-Commerce Concierge",
                  desc: "Instantly resolve 75% of post-purchase inquiries."
                }
              ].map((service, index) => (
                <div key={index} className="flex flex-col border-b border-forest/10 pb-8 last:border-0 last:pb-0">
                  <h4 className="text-2xl font-bold text-forest mb-2">{service.title}</h4>
                  <p className="text-forest/70 font-medium">{service.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </AnimatedSection>
      </div>

    </section>
  );
}
