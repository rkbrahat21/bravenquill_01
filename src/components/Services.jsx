import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function Services() {
  const services = [
    {
      title: "AI-Powered Automation",
      description: "Replace repetitive manual tasks with intelligent agents that run 24/7. From customer support triage to data entry, we automate the mundane.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
      )
    },
    {
      title: "Custom CRM Integrations",
      description: "Seamlessly connect your tools. We build custom pipelines that sync data across Salesforce, HubSpot, and your proprietary systems.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
      )
    },
    {
      title: "Operational Intelligence",
      description: "Transform raw data into actionable insights. We set up luxury-grade dashboards that give you a bird's-eye view of your business health.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
      )
    }
  ];

  return (
    <section className="relative w-full py-32 px-6 bg-white overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col items-center text-center mb-20">
          <AnimatedSection delay={0}>
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-emerald mb-4">Our Services</h2>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-forest tracking-tight">
              Systems designed for scale.
            </h3>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 150} className="flex">
              <div className="group relative w-full bg-white border border-forest/10 p-10 rounded-[32px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(7,64,38,0.08)] cursor-default">
                
                {/* Hover Glow Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>

                <div className="relative z-10 flex flex-col items-start h-full">
                  <div className="w-14 h-14 rounded-2xl bg-bloom/50 border border-celadon/30 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  
                  <h4 className="text-2xl font-heading font-bold text-forest mb-4">
                    {service.title}
                  </h4>
                  
                  <p className="text-forest/70 font-medium leading-relaxed mb-8 grow">
                    {service.description}
                  </p>

                  <div className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-emerald mt-auto group-hover:text-forest transition-colors duration-300">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
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
