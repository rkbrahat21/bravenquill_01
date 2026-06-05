import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How long does implementation take?",
      answer: "Most custom automation workflows can be deployed within 2-4 weeks. Complex enterprise integrations may take up to 8 weeks. We handle the heavy lifting so your team experiences zero downtime."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We utilize military-grade encryption and tenant isolation. Your proprietary data is never used to train global models, ensuring complete confidentiality."
    },
    {
      question: "Do I need technical expertise to use this?",
      answer: "Not at all. Our agents are designed to communicate via natural language. If you can write an email, you can operate our automation systems."
    },
    {
      question: "What platforms do you integrate with?",
      answer: "We support seamless integration with Salesforce, HubSpot, Jira, Slack, Microsoft 365, Google Workspace, and any platform with an accessible REST API."
    }
  ];

  return (
    <section className="relative w-full py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <AnimatedSection delay={0}>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-forest tracking-tight">
              Common Questions
            </h2>
          </AnimatedSection>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <AnimatedSection key={index} delay={index * 100}>
                <div 
                  className={`w-full border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-emerald/40 bg-bloom/10 shadow-sm' : 'border-forest/10 bg-white hover:border-emerald/20'}`}
                >
                  <button 
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full text-left px-8 py-6 flex items-center justify-between focus:outline-none"
                  >
                    <span className="font-heading font-bold text-lg text-forest pr-8">{faq.question}</span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-emerald text-white rotate-180' : 'bg-forest/5 text-forest/50'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-8 pb-6 text-forest/70 font-medium leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

      </div>
    </section>
  );
}
