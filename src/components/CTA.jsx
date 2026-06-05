import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

export default function CTA() {
  return (
    <section className="relative w-full py-32 px-6 overflow-hidden bg-forest text-white">
      
      {/* Background Graphic elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-50%] left-[-20%] w-[1000px] h-[1000px] bg-gradient-to-br from-emerald/40 to-transparent rounded-full blur-[100px]"></div>
      </div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwaGF0aCBkPSJNMCAwdjQwTTAgMGg0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-20 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        <AnimatedSection delay={0}>
          <h2 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight mb-8">
            Ready to <span className="text-emerald">automate?</span>
          </h2>
        </AnimatedSection>
        
        <AnimatedSection delay={150}>
          <p className="text-xl md:text-2xl text-celadon/90 max-w-2xl mb-12 font-medium">
            Stop losing thousands of hours to manual operations. Let's architect a custom solution for your enterprise today.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={300}>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link 
              to="/contact-us" 
              className="px-10 py-5 bg-emerald hover:bg-white hover:text-forest text-white rounded-full font-bold tracking-widest uppercase text-sm transition-colors duration-300 shadow-[0_10px_30px_rgba(31,130,85,0.3)] hover:shadow-xl"
            >
              Book a Consultation
            </Link>
            <Link 
              to="/about-us" 
              className="px-10 py-5 bg-transparent border border-white/30 hover:border-white hover:bg-white/5 text-white rounded-full font-bold tracking-widest uppercase text-sm transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
