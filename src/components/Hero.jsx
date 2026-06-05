import React from 'react';
import AnimatedSection from './AnimatedSection';

// Note: Ensure these images are copied to public/assets or import them correctly if they are in src/assets
// The user artifacts were previously in brain dir. I'll just use a placeholder path that implies they should be put in public, or use the artifact path directly.
// Actually, it's safer to use the actual artifact paths since they are available locally in the system.
const HERO_IMG_1 = "file:///C:/Users/rkbrahat/.gemini/antigravity-ide/brain/482179b5-fe13-46cb-b68e-b21940eb02bf/hero_round_window_1779579306998.png";
const HERO_IMG_2 = "file:///C:/Users/rkbrahat/.gemini/antigravity-ide/brain/482179b5-fe13-46cb-b68e-b21940eb02bf/hero_typing_desk_1779579323440.png";
const HERO_IMG_3 = "file:///C:/Users/rkbrahat/.gemini/antigravity-ide/brain/482179b5-fe13-46cb-b68e-b21940eb02bf/hero_walking_coffee_1779579344274.png";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-bloom pt-32 pb-24 rounded-b-[40px] md:rounded-b-[80px] lg:rounded-b-[120px] overflow-hidden" style={{ clipPath: "ellipse(150% 100% at 50% 0%)" }}>
      {/* Belly Curve implementation: using clip-path on the section to create a convex belly curve downwards, or border-radius */}
      
      {/* The background masonry grid of images */}
      <div className="absolute inset-0 w-full h-full p-4 md:p-8 z-0">
        <div className="w-full h-full max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 h-full">
          
          {/* Left: Tall image */}
          <div className="w-full h-full rounded-[32px] overflow-hidden hidden md:block">
            <img src={HERO_IMG_1} alt="Collaborating at round window" className="w-full h-full object-cover grayscale opacity-20 hover:grayscale-0 hover:opacity-100 transition-all duration-1000" />
          </div>

          {/* Right: Top wide, Bottom tall */}
          <div className="w-full h-full flex flex-col gap-4 md:gap-8 hidden md:flex">
            <div className="w-full h-2/5 rounded-[32px] overflow-hidden">
              <img src={HERO_IMG_2} alt="Typing at desk" className="w-full h-full object-cover grayscale opacity-20 hover:grayscale-0 hover:opacity-100 transition-all duration-1000" />
            </div>
            <div className="w-full h-3/5 rounded-[32px] overflow-hidden">
              <img src={HERO_IMG_3} alt="Walking with coffee" className="w-full h-full object-cover grayscale opacity-20 hover:grayscale-0 hover:opacity-100 transition-all duration-1000" />
            </div>
          </div>
        </div>
        
        {/* Fallback pattern if images are not visible on mobile */}
        <div className="absolute inset-0 bg-forest/5 mix-blend-multiply md:hidden"></div>
      </div>

      {/* Floating Center Overlay Card */}
      <div className="relative z-10 w-full h-full flex items-center justify-center min-h-[70vh] px-6">
        <AnimatedSection delay={0}>
          <div className="bg-white/95 backdrop-blur-xl border border-white/20 p-8 md:p-16 rounded-[40px] max-w-4xl text-center shadow-[0_30px_80px_rgba(7,64,38,0.15)] flex flex-col items-center">
            
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-emerald mb-6">
              OPERATIONAL SYSTEMS ENGINEERING
            </p>
            
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-forest tracking-tight leading-[1.1] mb-8">
              Deploy custom AI agents that manage your operations 24/7.
            </h1>
            
            <p className="text-lg md:text-xl text-forest/70 font-medium max-w-2xl leading-relaxed mb-12">
              We build human-grade conversational voice assistants and automated backend workflows. Solve support tickets instantly, sync calendar bookings automatically, and eliminate operational overhead without scaling your staff.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="px-8 py-4 bg-forest text-white rounded-full font-bold tracking-widest uppercase text-sm shadow-[0_8px_30px_rgba(7,64,38,0.2)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                Request a System Audit
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-forest text-forest rounded-full font-bold tracking-widest uppercase text-sm hover:bg-forest/5 transition-all duration-300 w-full sm:w-auto">
                Watch Live Voice Agent Demo
              </button>
            </div>

          </div>
        </AnimatedSection>
      </div>
      
    </section>
  );
}
