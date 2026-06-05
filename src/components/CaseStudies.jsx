import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function CaseStudies() {
  const cases = [
    {
      title: "RevOps transformation built the engine that led to acquisition",
      before: "Unstructured CRM, no scalable sales ops",
      after: "Automated pipelines, scalable inbound & outbound",
      quote: "Automaly have really understood our needs as a business and delivered quality advice, support, and software training at every step to help support our ambitious growth goals.",
      name: "Thomas McKenzie",
      role: "CEO | RankedRight Ltd"
    },
    {
      title: "CRM overhaul saved 260+ hours/year",
      before: "15 manual processes, fragmented CRM",
      after: "3 automated workflows, unified CRM",
      quote: "Automaly assisted us with our marketing automation programme. From the initial onboarding sessions through to ongoing support they have been first class throughout and I would highly recommend them.",
      name: "Joe Struggles",
      role: "CMO | Ethixbase"
    },
    {
      title: "AI chatbot development secured a 6-figure contract",
      before: "Manual customer service, high support burden",
      after: "Intelligent chatbot, automated knowledge base",
      quote: "As a result of Automaly's work we secured a 6-figure contract with a new customer. Their consultancy was first class, and the team consistently went the extra mile with service.",
      name: "Denise Parmer",
      role: "COO | Pattrn Data"
    }
  ];

  return (
    <section className="w-full bg-white py-24 md:py-32 px-6" id="testimonials">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        
        <AnimatedSection delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald mb-3">Real results from real businesses</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-forest leading-[1.1] tracking-tight mb-6">
              Client Success Stories
            </h3>
            <p className="text-lg text-forest/70 font-medium leading-relaxed max-w-3xl mx-auto">
              Discover how we have helped organisations across various industries implement AI and automation to drive measurable outcomes and accelerate growth.
            </p>
          </div>
        </AnimatedSection>

        {/* Top Metrics Row */}
        <AnimatedSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-t border-b border-forest/10 py-10 mb-16 text-center">
            <div className="flex flex-col gap-2">
              <span className="text-4xl font-heading font-extrabold text-forest">3</span>
              <span className="text-xs font-bold uppercase tracking-wider text-forest/60">Industries transformed</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-4xl font-heading font-extrabold text-forest">260+</span>
              <span className="text-xs font-bold uppercase tracking-wider text-forest/60">Hours saved annually</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-4xl font-heading font-extrabold text-forest">£100K+</span>
              <span className="text-xs font-bold uppercase tracking-wider text-forest/60">Revenue generated</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {cases.map((cs, idx) => (
            <AnimatedSection key={idx} delay={200 + (idx * 100)}>
              <div className="flex flex-col h-full bg-bloom/20 border border-forest/10 rounded-[24px] p-8 hover:shadow-2xl hover:border-emerald/30 transition-all duration-300">
                <h4 className="text-xl font-heading font-bold text-forest mb-6 leading-tight">
                  {cs.title}
                </h4>
                
                <div className="flex flex-col gap-5 mb-8 flex-grow">
                  <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                    <span className="text-[10px] font-bold text-red-800 uppercase tracking-wider mb-1 block">Before</span>
                    <p className="text-sm font-medium text-red-900">{cs.before}</p>
                  </div>
                  <div className="bg-emerald/10 p-4 rounded-xl border border-emerald/20">
                    <span className="text-[10px] font-bold text-emerald uppercase tracking-wider mb-1 block">After</span>
                    <p className="text-sm font-medium text-forest">{cs.after}</p>
                  </div>
                </div>

                <div className="mt-auto border-t border-forest/10 pt-6 relative">
                  <svg className="w-6 h-6 text-emerald/30 absolute top-4 left-0 -translate-y-1/2 -translate-x-1" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                  <p className="text-base text-forest/80 font-medium italic relative z-10 mb-4">"{cs.quote}"</p>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-forest">{cs.name}</span>
                    <span className="text-xs text-forest/60">{cs.role}</span>
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
