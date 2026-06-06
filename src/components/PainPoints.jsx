import React, { useRef, useEffect, useState } from 'react';
import AnimatedSection from './AnimatedSection';

export default function PainPoints() {
  const painPoints = [
    {
      title: "Foundations Under Strain",
      desc: "Manual workarounds are hiding deeper problems. Layering automation onto fragmented workflows amplifies inefficiency instead of fixing it - making future improvements costlier.",
      icon: (
        <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 17L12 22L22 17M2 12L12 17L22 12M12 2L2 7L12 12L22 7L12 2Z" />
        </svg>
      )
    },
    {
      title: "Complexity Without Control",
      desc: "More tools, less visibility. Without governance and clear ownership, every new integration adds risk. Scaling becomes harder, not easier.",
      icon: (
        <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <circle cx="12" cy="5" r="2.5" />
          <circle cx="5" cy="19" r="2.5" />
          <circle cx="19" cy="19" r="2.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 16.5v-2.5a3.5 3.5 0 013.5-3.5h7a3.5 3.5 0 013.5 3.5v2.5" />
        </svg>
      )
    },
    {
      title: "Effort Without Return",
      desc: "Busy does not mean productive. Point solutions consume budget without delivering measurable ROI. Without prioritisation, complexity grows and value stalls.",
      icon: (
        <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M23 18l-9.5-9.5-5 5L1 6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 18h6v-6" />
        </svg>
      )
    },
    {
      title: "Governance & Security Gaps",
      desc: "Speed without safeguards is a liability. Rapid AI adoption without compliance, data governance, and security frameworks exposes your business to regulatory and operational risk.",
      icon: (
        <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    }
  ];

  const parentRef = useRef(null);
  const totalCards = painPoints.length;

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const parent = parentRef.current;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      const parentHeight = rect.height;
      const viewHeight = window.innerHeight;

      // Scrolled height within the parent sticky track
      const scrolled = -rect.top;
      const totalScrollable = parentHeight - viewHeight;

      if (totalScrollable <= 0) return;

      let progress = scrolled / totalScrollable;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const getCardStyle = (idx) => {
    const progressPerCard = 1 / (totalCards - 1);
    // Relative position of this card (e.g. 0 means centered, -1 means next card in stack, 1 means card has left)
    const x = (scrollProgress / progressPerCard) - idx;

    let transform = '';
    let opacity = 0;
    let zIndex = 10;
    let pointerEvents = 'none';

    if (x >= 0) {
      // Card is leaving or has left (sliding up)
      // Interpolate between x = 0 (active) and x = 1 (left)
      const t = Math.max(0, Math.min(1, x)); // 0 to 1
      const y = -t * 60; // slides up by 60px
      const scale = 1 - t * 0.05; // scales down to 0.95
      opacity = 1 - t; // fades out fully
      zIndex = 30 + idx; // keep leaving cards on top of entering cards
      pointerEvents = t < 0.2 ? 'auto' : 'none';
      transform = `translate3d(0, ${y}px, 0) scale(${scale})`;
    } else {
      // Card is entering or waiting in the deck (x < 0)
      if (x > -1) {
        // Interpolate between x = -1 (next card in stack) and x = 0 (active)
        const t = x + 1; // 0 (next) to 1 (active)
        const y = 14 - t * 14; // moves from 14px to 0px
        const scale = 0.96 + t * 0.04; // scales from 0.96 to 1.0
        opacity = 0.35 + t * 0.65; // opacity from 0.35 to 1.0
        zIndex = 20;
        pointerEvents = t > 0.8 ? 'auto' : 'none';
        transform = `translate3d(0, ${y}px, 0) scale(${scale})`;
      } else if (x > -2) {
        // Interpolate between x = -2 (deep deck) and x = -1 (next card)
        const t = x + 2; // 0 (deep) to 1 (next)
        const y = 28 - t * 14; // moves from 28px to 14px
        const scale = 0.92 + t * 0.04; // scales from 0.92 to 0.96
        opacity = 0.0 + t * 0.35; // opacity from 0 to 0.35
        zIndex = 10;
        transform = `translate3d(0, ${y}px, 0) scale(${scale})`;
      } else {
        // Deep in the deck
        transform = 'translate3d(0, 28px, 0) scale(0.92)';
        opacity = 0;
        zIndex = 5;
      }
    }

    return {
      transform,
      opacity,
      zIndex,
      pointerEvents,
    };
  };

  return (
    <section ref={parentRef} className="w-full relative z-10 bg-white" style={{ height: '220vh' }}>
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden px-6">
        {/* Subtle background glow to add premium aesthetic */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#ECFFF6]/40 blur-[130px] rounded-full pointer-events-none z-0"></div>

        <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10 w-full mb-6 md:mb-10">

          {/* Section Badge */}
          <AnimatedSection delay={0}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 text-[10px] font-bold uppercase tracking-widest text-[#1F8255] bg-[#ECFFF6] border border-[#1F8255]/15 rounded-full">
              <span className="w-1 h-1 rounded-full bg-[#1F8255]"></span>
              The Reality of Scale
            </div>
          </AnimatedSection>

          {/* Section Heading with smaller, elegant typography */}
          <AnimatedSection delay={50}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-forest leading-tight tracking-tight mb-3 max-w-3xl">
              Why Scaling with AI & Automation is <span className="text-emerald">Harder Than It Looks</span>
            </h2>
          </AnimatedSection>

          {/* Subtitle with smaller, elegant typography */}
          <AnimatedSection delay={100}>
            <p className="text-[13px] md:text-sm text-forest/70 font-medium leading-relaxed max-w-2xl">
              As organisations scale, processes that once operated smoothly begin to stretch under increased demand. Manual efforts grow, complexity deepens, and what was once efficient becomes a bottleneck.
            </p>
          </AnimatedSection>

        </div>

        {/* Interactive Redesigned Cards Sticky Scroll - Stacking Deck */}
        <div className="w-full max-w-2xl mx-auto relative h-[280px] md:h-[260px]">
          {painPoints.map((point, idx) => (
            <div
              key={idx}
              className="absolute inset-x-0 top-0 transition-all duration-300 ease-out"
              style={getCardStyle(idx)}
            >
              <div className="relative overflow-hidden w-full p-6 md:p-8 rounded-2xl bg-white bg-linear-to-b from-[#fbfdfc] to-[#f7fcf9] border border-emerald/20 transition-all duration-300 group shadow-[0_12px_24px_rgba(7,64,38,0.02)] flex flex-col justify-between min-h-[220px]">
                {/* Subtle card-specific radial gradient overlay on hover */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-bloom),transparent_60%)] opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Card Number */}
                <div className="absolute top-4 right-5 text-lg md:text-xl font-heading font-black text-emerald/15 transition-colors duration-300">
                  {`0${idx + 1}`}
                </div>

                {/* Content Container */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Icon */}
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-emerald text-white transition-all duration-300 mb-4">
                      {point.icon}
                    </div>

                    {/* Card Title */}
                    <h3 className="text-base md:text-[17px] font-heading font-bold mb-2 transition-colors duration-200 text-emerald">
                      {point.title}
                    </h3>
                  </div>

                  {/* Card Description */}
                  <p className="text-[12px] md:text-[13px] text-forest/65 font-medium leading-relaxed pr-2 mt-2">
                    {point.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="w-full flex justify-center mt-8">
          <div className="w-32 md:w-48 h-0.5 bg-forest/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald rounded-full transition-all duration-150 ease-out"
              style={{ width: `${scrollProgress * 100}%` }}
            ></div>
          </div>
        </div>

      </div>
    </section>
  );
}
