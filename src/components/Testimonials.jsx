import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Within 30 days of deploying Braven Quill's booking agent, our dental clinic booked 45 appointments after hours without a single staff member picking up a phone.",
      author: "Dr. Sarah Jenkins",
      title: "Founder, Smile Dental"
    },
    {
      quote: "The AI agents they deployed feel indistinguishable from our senior support staff. A true luxury service.",
      author: "Michael Chang",
      title: "Director of Operations, FinServe"
    },
    {
      quote: "Minimal friction, maximum impact. Their team understood our bottleneck and delivered a solution in weeks, not months.",
      author: "Elena Rodriguez",
      title: "VP of Engineering, CloudScale"
    }
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative w-full py-32 px-6 bg-[#0a1f14] overflow-hidden flex items-center justify-center">
      
      {/* Background Subtle Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwaGF0aCBkPSJNMCAwdjQwTTAgMGg0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald/10 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex items-center justify-between">
        
        {/* Left Arrow */}
        <button onClick={prev} className="w-14 h-14 rounded-full bg-white/10 hover:bg-emerald text-white flex items-center justify-center transition-colors duration-300 backdrop-blur-sm shrink-0 hidden md:flex z-20">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>

        {/* Center Quote Card */}
        <AnimatedSection delay={0} className="w-full md:px-12 flex-grow">
          <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-emerald mb-8 opacity-20"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.999v2c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/></svg>
            
            <p className="text-2xl md:text-3xl text-forest font-bold leading-relaxed mb-10">
              "{testimonials[currentIndex].quote}"
            </p>
            
            <div className="flex flex-col items-center">
              <h4 className="font-heading font-extrabold text-forest text-xl">{testimonials[currentIndex].author}</h4>
              <p className="text-forest/60 font-medium mt-1">{testimonials[currentIndex].title}</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Right Arrow */}
        <button onClick={next} className="w-14 h-14 rounded-full bg-white/10 hover:bg-emerald text-white flex items-center justify-center transition-colors duration-300 backdrop-blur-sm shrink-0 hidden md:flex z-20">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>

      </div>
      
      {/* Mobile Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 md:hidden z-20">
        <button onClick={prev} className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center backdrop-blur-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <button onClick={next} className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center backdrop-blur-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>

    </section>
  );
}
