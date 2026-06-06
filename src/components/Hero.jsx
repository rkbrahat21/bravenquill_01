import React from 'react';
import AnimatedSection from './AnimatedSection';

import makeLogo from '../assets/images/make.svg';
import zapierLogo from '../assets/images/zapier.svg';
import n8nLogo from '../assets/images/n8n.svg';



export default function Hero() {
  return (
    <section
      className="w-full text-forest pt-20 md:32 pb-20 relative overflow-hidden flex flex-col items-center justify-center min-h-screen bg-[#fafafa]"
    >
      {/* Aurora Sequence-Style Vertical Stripes Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-80 top-0 left-0">
        <div className="absolute -top-[10%] -left-[10%] blur-[100px] w-[400px] h-[400px] bg-[#A5EBCB] rounded-full animate-pulse" style={{ animationDuration: '7s' }}></div>
        <div className="absolute -top-[20%] -right-[10%] blur-[100px] w-[400px] h-[400px] bg-[#A5EBCB] rounded-full animate-pulse" style={{ animationDuration: '10s', animationDelay: '4s' }}></div>
        <div className="absolute bottom-[20%] left-[20%] blur-[100px] w-[150px] h-[150px] bg-[#5ABF92] rounded-full animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-[20%] right-[15%] blur-[100px] w-[150px] h-[150px] bg-[#5ABF92] rounded-full animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
      </div>
      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-12">

        {/* Overline Badge */}
        <AnimatedSection delay={0}>
          <div className="relative inline-flex items-center justify-center px-5 py-1.5 mb-6 text-[10px] font-bold uppercase tracking-widest text-emerald bg-white/70 backdrop-blur-xl border border-emerald/30 rounded-full shadow-[0_4px_20px_rgba(46,136,100,0.15)] ring-1 ring-white/80 group overflow-hidden cursor-default">
            <div className="absolute inset-0 bg-linear-to-r from-emerald/0 via-emerald/10 to-emerald/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative z-10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald shadow-[0_0_8px_#2e8864] animate-pulse"></span>
              Grow Smarter
            </span>
          </div>
        </AnimatedSection>

        {/* H1 Title */}
        <AnimatedSection delay={100}>
          <h1 className="font-heading font-bold leading-tight tracking-normal mb-6 max-w-4xl relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald/10 blur-[80px] rounded-full pointer-events-none"></div>
            <span className="relative text-transparent bg-clip-text bg-linear-to-b from-forest to-[#1a4a35] text-[42px] md:text-[52px] lg:text-[72px] drop-shadow-sm">More Revenue</span>
            <br />
            <span className="relative text-transparent bg-clip-text bg-linear-to-r from-[#2e8864] to-[#45c391] text-[32px] md:text-[42px] lg:text-[56px] drop-shadow-sm">with less stress</span>
          </h1>
        </AnimatedSection>

        {/* Subtitle */}
        <AnimatedSection delay={200}>
          <p className="text-sm md:text-lg text-forest/70 font-medium leading-relaxed max-w-2xl mb-10 relative">
            Custom AI automations that cut your costs, speed up your operations, and free your team to focus on growth.
          </p>
        </AnimatedSection>

        {/* Action Area */}
        <AnimatedSection delay={300}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-8">

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 relative">
              <div className="absolute inset-0 bg-emerald/20 blur-xl rounded-full scale-110 opacity-50"></div>
              <button className="relative group flex items-center gap-2 px-8 py-4 bg-linear-to-b from-forest to-[#1a4a35] text-white rounded-full font-bold tracking-wide hover:scale-[1.02] transition-all duration-300 text-sm shadow-[0_8px_25px_rgba(26,74,53,0.3)] hover:shadow-[0_12px_30px_rgba(26,74,53,0.4)] cursor-pointer overflow-hidden border border-white/10 ring-2 ring-transparent hover:ring-emerald/30 ring-offset-2 ring-offset-[#f4fbfa]">
                <div className="absolute inset-0 bg-white/20 -translate-y-full group-hover:translate-y-full transition-transform duration-700 ease-in-out"></div>
                <span className="relative z-10 flex items-center gap-2">
                  See How Others Scaled
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">

            {/* Avatars & Rating */}
            {/* Guarantee Block */}
            <div className="flex flex-row items-center gap-3">
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#f4fbfa] border border-[#2e8864]/30 shadow-sm flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-[#2e8864] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <div className="text-[13px] font-bold text-forest mb-1 leading-none">
                  Results guaranteed
                </div>
                <span className="text-[11px] text-forest/70 font-medium leading-none uppercase tracking-wider">or you don't pay</span>
              </div>
            </div>

            {/* Divider for Desktop */}
            <div className="hidden sm:block h-10 w-px bg-gray-300"></div>

            <div className="flex flex-wrap items-center justify-center gap-10">
              <img src={makeLogo} alt="Make Logo" className="h-7 md:h-9 w-auto object-contain" />
              <img src={zapierLogo} alt="Zapier Logo" className="h-7 md:h-9 w-auto object-contain" />
              <img src={n8nLogo} alt="n8n Logo" className="h-7 md:h-9 w-auto object-contain" />
            </div>
          </div>

        </AnimatedSection>

      </div >
    </section >
  );
}
