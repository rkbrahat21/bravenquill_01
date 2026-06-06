import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef
  });

  const [maxSlide, setMaxSlide] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    const calculateSlide = () => {
      if (trackRef.current) {
        const scrollWidth = trackRef.current.scrollWidth;
        const clientWidth = window.innerWidth;
        setMaxSlide(Math.max(0, scrollWidth - clientWidth));
      }
    };

    calculateSlide();
    window.addEventListener('resize', calculateSlide);
    const timer = setTimeout(calculateSlide, 200);

    return () => {
      window.removeEventListener('resize', calculateSlide);
      clearTimeout(timer);
    };
  }, [painPoints.length]);

  const totalCards = painPoints.length;
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxSlide]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const cardIndexRef = useRef(0);
  const isTransitioningRef = useRef(false);

  // Sync scroll position changes from regular scrolls to keep the index updated
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (!isTransitioningRef.current) {
        const index = Math.round(latest * (totalCards - 1));
        cardIndexRef.current = index;
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, totalCards]);

  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      const rect = el.getBoundingClientRect();
      // Section is pinned if top is near top of screen and bottom is near bottom of screen
      const isPinned = rect.top <= 5 && rect.bottom >= window.innerHeight - 5;

      if (!isPinned) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextIndex = cardIndexRef.current + direction;

      // Allow natural scroll to proceed past the ends
      if (nextIndex < 0 || nextIndex >= totalCards) {
        return;
      }

      // Intercept the scroll event
      e.preventDefault();

      if (isTransitioningRef.current) return;
      isTransitioningRef.current = true;
      cardIndexRef.current = nextIndex;

      const offsetTop = el.offsetTop;
      const viewportHeight = window.innerHeight;
      const totalScrollable = (4.5 - 1) * viewportHeight;
      const targetScroll = offsetTop + (nextIndex / (totalCards - 1)) * totalScrollable;

      if (window.lenis) {
        window.lenis.scrollTo(targetScroll, {
          duration: 0.95,
          immediate: false,
          force: true,
          onComplete: () => {
            setTimeout(() => {
              isTransitioningRef.current = false;
            }, 150);
          }
        });
      } else {
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
        setTimeout(() => {
          isTransitioningRef.current = false;
        }, 850);
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', handleWheel);
    };
  }, [totalCards]);

  return (
    <section ref={targetRef} className="w-full px-6 relative z-10 bg-white" style={{ height: '450vh' }}>
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
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

        {/* Interactive Redesigned Cards Sticky Scroll */}
        <div className="w-full overflow-hidden relative py-4">
          <motion.div
            ref={trackRef}
            className="flex gap-6 px-8 md:px-16"
            style={{ x }}
          >
            {painPoints.map((point, idx) => (
              <div
                key={idx}
                className="w-[280px] sm:w-[320px] md:w-[360px] shrink-0"
              >
                <div className="relative overflow-hidden w-full p-6 md:p-8 rounded-2xl bg-linear-to-b from-[#fbfdfc] to-[#f7fcf9] border border-[#074026]/6 hover:border-emerald/20 transition-all duration-300 group hover:shadow-[0_12px_24px_rgba(7,64,38,0.02)] flex flex-col justify-between min-h-[220px]">
                  {/* Subtle card-specific radial gradient overlay on hover */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-bloom),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  {/* Card Number */}
                  <div className="absolute top-4 right-5 text-lg md:text-xl font-heading font-black text-forest/8 group-hover:text-emerald/15 transition-colors duration-300">
                    {`0${idx + 1}`}
                  </div>

                  {/* Content Container */}
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      {/* Icon */}
                      <div className="w-9 h-9 rounded-lg bg-forest/5 flex items-center justify-center text-forest group-hover:bg-emerald group-hover:text-white transition-all duration-300 mb-4">
                        {point.icon}
                      </div>

                      {/* Card Title */}
                      <h3 className="text-base md:text-[17px] font-heading font-bold text-forest mb-2 transition-colors duration-200 group-hover:text-emerald">
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
          </motion.div>
        </div>

        {/* Progress Indicator */}
        <div className="w-full flex justify-center mt-8">
          <div className="w-32 md:w-48 h-0.5 bg-forest/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-emerald rounded-full"
              style={{ width: progressWidth }}
            ></motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
