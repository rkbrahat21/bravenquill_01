import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function AutomalyServices() {
  const services = [
    {
      title: "Enhance Your CRM with AI-Powered Automations",
      desc: "Upgrade your CRM from a simple tool to a central part of your sales engine. Our AI and automation solutions automate routine tasks, allowing your team to focus on high-value activities that drive revenue."
    },
    {
      title: "Improve Marketing Results with Automation",
      desc: "55% of companies that do not use marketing automation cite lack of expertise as the reason. We integrate your marketing tools with your CRM and sales teams, enabling more effective campaigns without adding complexity."
    },
    {
      title: "Increase Sales with Automation",
      desc: "Sales teams spend just 33% of their time selling. Our AI solutions automate time-consuming tasks like data entry, lead qualification, and follow-ups, freeing your team to focus on high-priority leads."
    },
    {
      title: "Efficient Software Integration and Automation",
      desc: "Your technology should support growth, not hinder it. We optimise your tech stack to ensure seamless integration and automation across all your operational departments."
    }
  ];

  return (
    <section className="w-full bg-white py-24 md:py-32 px-6" id="services">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        
        {/* Left: Sticky Header */}
        <div className="w-full md:w-1/3">
          <div className="sticky top-32 flex flex-col items-start">
            <AnimatedSection delay={0}>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-forest leading-[1.1] tracking-tight mb-6">
                Real capabilities that have saved clients 260+ hours and unlocked six-figure revenue.
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <button className="px-6 py-3 bg-transparent border-2 border-forest text-forest rounded-full font-bold tracking-widest uppercase text-xs hover:bg-forest hover:text-white transition-all duration-300 mt-2">
                See How It Works
              </button>
            </AnimatedSection>
          </div>
        </div>

        {/* Right: Services List */}
        <div className="w-full md:w-2/3 flex flex-col gap-10 md:gap-12">
          {services.map((service, idx) => (
            <AnimatedSection key={idx} delay={idx * 100}>
              <div className="flex flex-col bg-bloom/30 p-8 md:p-10 rounded-[32px] border border-emerald/10 hover:border-emerald/30 transition-colors duration-300">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-forest mb-3">
                  {service.title}
                </h3>
                <p className="text-base text-forest/70 font-medium leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
