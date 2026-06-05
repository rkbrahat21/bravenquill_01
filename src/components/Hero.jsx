import React from 'react';
import AnimatedSection from './AnimatedSection';

import makeLogo from '../assets/images/make.svg';
import zapierLogo from '../assets/images/zapier.svg';
import n8nLogo from '../assets/images/n8n.svg';


export default function Hero() {
  return (
    <section className="w-full text-forest pt-20 md:32 pb-20 relative overflow-hidden flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-bloom/20 via-white to-emerald/10">

      {/* Background Subtle Gradients/Glows */}
      <div className="absolute w-screen inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="absolute bottom-[30%] right-[30%] h-[50%] w-[50%] aspect-square bg-emerald/20 rounded-full blur-3xl opacity-60 mix-blend-multiply border-2 border-emerald"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-12">

        {/* Overline Badge */}
        <AnimatedSection delay={0}>
          <div className="inline-flex items-center justify-center px-5 py-1.5 mb-4 text-[10px] font-bold uppercase tracking-widest text-emerald bg-white/40 backdrop-blur-md border border-emerald/30 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-white/50">
            Grow Smarter
          </div>
        </AnimatedSection>

        {/* H1 Title */}
        <AnimatedSection delay={100}>
          <h1 className="font-heading font-bold leading-tight tracking-normal text-forest mb-6 max-w-4xl">
            <span className="text-forest text-[42px] md:text-[52px] lg:text-[66px]">More Revenue</span>
            <br />
            <span className="text-emerald text-[32px] md:text-[42px] lg:text-[52px]">with less stress</span>
          </h1>
        </AnimatedSection>

        {/* Subtitle */}
        <AnimatedSection delay={200}>
          <p className="text-sm md:text-base text-forest/70 font-medium leading-relaxed max-w-xl mb-8">
            Custom AI automations that cut your costs, speed up your operations, and free your team to focus on growth.
          </p>
        </AnimatedSection>

        {/* Action Area */}
        <AnimatedSection delay={300}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-8">

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-forest text-white rounded-full font-semibold tracking-wide hover:bg-forest/90 transition-all duration-300 text-sm shadow-md hover:shadow-lg cursor-pointer">
                See How Others Scaled
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">

            {/* Avatars & Rating */}
            <div className="flex flex-row items-center gap-3">
              <div className="flex -space-x-2 relative z-0">
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <img src="https://i.pravatar.cc/100?img=33" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <img src="https://i.pravatar.cc/100?img=44" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <img src="https://i.pravatar.cc/100?img=12" alt="Avatar" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex text-amber-400 text-xs mb-1">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                </div>
                <span className="text-xs text-forest/70 font-medium leading-none">Trusted by 50+ clients</span>
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
