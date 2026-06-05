import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "AI Readiness & Process Assessment",
      desc: "We start with an AI Readiness Assessment to evaluate your current processes, systems, and data. This helps us pinpoint where AI and automation will have the greatest impact, uncover inefficiencies, and ensure your organisation is ready for change.",
      outcome: "This step ensures all decisions are informed, realistic, and commercially viable."
    },
    {
      num: "02",
      title: "Prioritised AI & Automation Roadmap",
      desc: "Based on the assessment, we develop a prioritised roadmap that outlines where and how AI and automation should be deployed. We assess each opportunity for impact, feasibility, and ROI, ensuring focus on areas that drive the most value.",
      outcome: "The roadmap provides clarity on sequencing, scope, and expected outcomes—ensuring efforts are aligned with your business goals."
    },
    {
      num: "03",
      title: "Implementation, Integration & Testing",
      desc: "Once priorities are set, our team designs and implements AI and automation solutions that integrate seamlessly into your existing tech stack. We refine processes, connect systems, and rigorously test solutions for reliability and performance.",
      outcome: "This phase is focused on scalability, governance, and security to ensure long-term success."
    },
    {
      num: "04",
      title: "Optimisation & Ongoing Improvement",
      desc: "AI and automation generate the most value when continuously optimised. We provide ongoing support to monitor, adjust, and enhance solutions to ensure they remain effective as your organisation evolves.",
      outcome: "This step helps maintain performance, identify emerging opportunities, and ensure that your investment in AI continues to deliver sustained ROI."
    }
  ];

  return (
    <section className="w-full bg-forest text-white py-24 md:py-32 px-6" id="how-we-work">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center">
        
        <AnimatedSection delay={0}>
          <p className="text-lg md:text-xl text-celadon/90 font-medium leading-relaxed max-w-3xl text-center mb-20">
            A structured approach designed to help growing organisations implement AI and automation with clarity, confidence, and measurable ROI.
          </p>
        </AnimatedSection>

        <div className="flex flex-col w-full relative">
          
          {/* Vertical Track Line for Desktop */}
          <div className="hidden md:block absolute left-[48px] top-0 bottom-0 w-[2px] bg-white/10"></div>

          {steps.map((step, idx) => (
            <AnimatedSection key={idx} delay={idx * 100}>
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 mb-16 relative z-10 group">
                
                {/* Step Number & Circle */}
                <div className="flex-shrink-0 flex items-center md:items-start gap-6">
                  <div className="w-24 h-24 md:w-24 md:h-24 rounded-full bg-forest border-4 border-emerald flex items-center justify-center relative shadow-[0_0_30px_rgba(31,130,85,0.2)] group-hover:bg-emerald group-hover:scale-110 transition-all duration-500">
                    <span className="text-3xl font-heading font-extrabold text-white">{step.num}</span>
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex flex-col pt-3">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-white/70 font-medium leading-relaxed mb-6">
                    {step.desc}
                  </p>
                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                    <p className="text-celadon font-bold text-base">
                      {step.outcome}
                    </p>
                  </div>
                </div>

              </div>
            </AnimatedSection>
          ))}
          
        </div>

      </div>
    </section>
  );
}
