import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

export default function FiveTraps() {
  const [openIndex, setOpenIndex] = useState(0);

  const traps = [
    {
      title: "1. The Manual Entry Trap",
      desc: "Your team spends hours copying customer details between forms, sending booking reminders, or answering 'Where is my order?'."
    },
    {
      title: "2. The Voicemail Leak",
      desc: "Calls go unanswered during peak hours or after closing, bleeding qualified leads to your competitors."
    },
    {
      title: "3. The Overhead Fallacy",
      desc: "Believing the only way to handle more volume is to hire, train, and manage more staff."
    },
    {
      title: "4. The Siloed Data Swamp",
      desc: "Using 5 different tools that don't talk to each other, creating operational blind spots."
    },
    {
      title: "5. The Founder Bottleneck",
      desc: "Every major decision or exception requires your personal approval to move forward."
    }
  ];

  return (
    <section className="w-full py-32 px-6 bg-bloom border-t border-emerald/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
        
        {/* Left Text */}
        <div className="sticky top-32">
          <AnimatedSection delay={0}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-black leading-[1.1] tracking-tight">
              Most Early-Stage Founders are caught in these <span className="text-emerald">5 traps.</span>
            </h2>
          </AnimatedSection>
        </div>

        {/* Right Accordion */}
        <div className="flex flex-col gap-4">
          {traps.map((trap, index) => {
            const isOpen = openIndex === index;
            return (
              <AnimatedSection key={index} delay={index * 100}>
                <div className={`w-full border-b border-forest/10 transition-all duration-300`}>
                  <button 
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full text-left py-8 flex items-center justify-between focus:outline-none group"
                  >
                    <span className={`font-heading font-bold text-2xl md:text-3xl transition-colors duration-300 ${isOpen ? 'text-emerald' : 'text-forest group-hover:text-emerald/70'}`}>
                      {trap.title}
                    </span>
                    <span className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-500 ${isOpen ? 'rotate-180 bg-emerald text-white' : 'bg-transparent text-forest group-hover:bg-forest/5'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-64 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
                    <p className="text-xl text-forest/70 font-medium leading-relaxed pr-12">
                      {trap.desc}
                    </p>
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
