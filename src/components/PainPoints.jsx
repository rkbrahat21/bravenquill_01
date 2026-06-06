import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function PainPoints() {
  const painPoints = [
    {
      badge: "Missed Opportunities",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-100/60",
      tapeClass: "washi-tape-rose",
      tiltClass: "rotate-[-1.5deg] hover:rotate-0",
      title: "Calls go unanswered. Revenue walks out.",
      desc: "Your staff can't be on three calls at once. So when a high-intent lead calls during a busy hour, lunch break, or after closing — they hang up, Google the next option, and book there. You never even knew they existed.",
      icon: (
        /* Ringing Phone - Hand-drawn look */
        <svg className="w-6 h-6 overflow-visible" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 6.5 c 1 -1.5, 3 -1.5, 4.5 -0.5 c 1 0.7, 1.5 2, 0.8 3.2 L 7.5 11.5 c 2 2, 4 4, 6 6 l 2.3 -1.3 c 1.2 -0.7, 2.5 -0.2, 3.2 0.8 c 1 1.5, 1 3.5, -0.5 4.5 c -2.5 1.5 -6 -0.5 -9 -3.5 C 6.5 15, 2 10.5, 3.5 6.5 Z" />
          <path strokeLinecap="round" d="M 18.5 4 Q 21.5 7 18.5 10" opacity="0.6" />
          <path strokeLinecap="round" d="M 20.5 2 Q 24.5 7 20.5 12" opacity="0.4" />
        </svg>
      ),
      metric: (
        <div className="mt-6 pt-4 border-t border-[#074026]/10 flex flex-col gap-2 relative">
          <div className="flex justify-between items-center text-[11px] font-bold text-forest/70">
            <span className="uppercase tracking-wider font-mono">Unanswered Call Rate</span>
            <span className="text-rose-600 font-extrabold text-xs tracking-wider uppercase font-sketchy">critical leak</span>
          </div>
          
          <div className="relative w-full h-10 flex items-center">
            <svg className="w-full h-8 overflow-visible" viewBox="0 0 300 30" fill="none">
              {/* Background wobbly track */}
              <path d="M 5 15 Q 75 12 150 15 T 295 15" stroke="#074026" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.2" />
              
              {/* Highlighter-style wobbly fill for 64% lost */}
              <path 
                d="M 6 15 Q 50 11 100 15 T 192 14" 
                stroke="var(--color-rose-500, #f43f5e)" 
                strokeWidth="8" 
                strokeLinecap="round" 
                opacity="0.2"
              />
              
              {/* Hand-drawn scribble stroke over it */}
              <path 
                d="M 10 15 C 40 16 80 13 120 15 C 145 16 160 14 188 15" 
                stroke="var(--color-rose-600, #e11d48)" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              
              {/* Scribbled crosshatching inside the fill */}
              <path 
                d="M 15 10 L 22 20 M 35 9 L 42 21 M 55 10 L 62 20 M 75 9 L 82 21 M 95 10 L 102 20 M 115 9 L 122 21 M 135 10 L 142 20 M 155 9 L 162 21 M 175 10 L 182 20 animate-pulse" 
                stroke="var(--color-rose-500, #f43f5e)" 
                strokeWidth="1" 
                opacity="0.5"
              />
            </svg>
          </div>
          <div className="absolute -bottom-1.5 right-2 text-[13px] font-handwritten text-rose-600 font-bold rotate-[-2deg]">
            "64% lost to voicemail"
          </div>
        </div>
      )
    },
    {
      badge: "Slow Response",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-100/60",
      tapeClass: "washi-tape-amber",
      tiltClass: "rotate-[1.2deg] hover:rotate-0 translate-y-2 lg:translate-y-0",
      title: "Leads go cold before anyone follows up.",
      desc: "Someone fills out your form, sends a DM, or leaves a voicemail. By the time a staff member gets to it — hours later, maybe the next day — that person has already moved on. Speed-to-lead isn't a nice-to-have. It's the difference between booked and ghosted.",
      icon: (
        /* Hourglass/Clock - Hand-drawn look */
        <svg className="w-6 h-6 overflow-visible" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 3 H18 M6 21 H18 M6 3 Q 12 9 6 15 T 6 21 M18 3 Q 12 9 18 15 T 18 21" />
          <path d="M9 6 H15" opacity="0.5" />
          <path d="M10 18 Q 12 17 14 18" strokeWidth="1.5" />
          {/* Dripping sand */}
          <circle cx="12" cy="10" r="1" fill="currentColor" />
          <circle cx="12" cy="13" r="1" fill="currentColor" />
          <path d="M 12 15 L 12 19" strokeWidth="1" opacity="0.7" />
        </svg>
      ),
      metric: (
        <div className="mt-6 pt-4 border-t border-[#074026]/10 flex flex-col gap-2 relative">
          <div className="flex justify-between items-center text-[11px] font-bold text-forest/70">
            <span className="uppercase tracking-wider font-mono">Conversion Prob. vs. Delay</span>
            <span className="text-amber-600 font-extrabold text-xs tracking-wider uppercase font-sketchy">speed matters</span>
          </div>
          
          <div className="relative w-full h-20 flex items-center justify-center mt-2">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80" fill="none">
              {/* Wobbly axes */}
              <path d="M 25 5 L 25 68 L 285 68" stroke="#074026" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
              {/* Arrowheads */}
              <path d="M 22 10 L 25 5 L 28 10" stroke="#074026" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
              <path d="M 280 65 L 285 68 L 280 71" stroke="#074026" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
              
              {/* Fading conversion rate path (curving down sharply from top-left to bottom-right) */}
              <path 
                d="M 30 15 C 65 15 95 62 250 65" 
                stroke="var(--color-amber-500, #f59e0b)" 
                strokeWidth="4.5" 
                strokeLinecap="round" 
                opacity="0.25" 
              />
              <path 
                d="M 30 15 C 65 15 95 62 250 65" 
                stroke="var(--color-amber-600, #d97706)" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
              />
              
              {/* Axis Labels */}
              <text x="35" y="19" className="text-[9px] font-ui fill-forest/50 font-semibold">Instant reply (80%)</text>
              <text x="180" y="58" className="text-[9px] font-ui fill-forest/50 font-semibold">After 1 hour (5%)</text>
              
              {/* Dotted pointer to ghosted state */}
              <path d="M 220 54 Q 240 45 250 60" stroke="#b45309" strokeWidth="1" strokeDasharray="2 2" fill="none" />
            </svg>
            
            <div className="absolute bottom-1 right-2 text-[14px] font-handwritten text-[#b45309] font-bold rotate-[4deg]">
              "Ghosted!"
            </div>
          </div>
        </div>
      )
    },
    {
      badge: "Human Overload",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100/60",
      tapeClass: "washi-tape-emerald",
      tiltClass: "rotate-[-0.8deg] hover:rotate-0 translate-y-4 lg:translate-y-0",
      title: "Your team is buried in work that shouldn't need a human.",
      desc: "Answering the same five questions. Sending appointment reminders. Confirming bookings. Re-scheduling no-shows. Your staff is spending hours every week on tasks that a system could handle in seconds — while actual clients wait.",
      icon: (
        /* Stacked check boxes/List - Hand-drawn look */
        <svg className="w-6 h-6 overflow-visible" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5 H20 M9 12 H20 M9 19 H20" />
          <rect x="3" y="3" width="4" height="4" rx="1" strokeLinecap="round" />
          <rect x="3" y="10" width="4" height="4" rx="1" strokeLinecap="round" />
          <rect x="3" y="17" width="4" height="4" rx="1" strokeLinecap="round" />
          {/* Handdrawn checks inside */}
          <path d="M 4 5 L 5 6 L 6.5 4.5" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 4 12 L 5 13 L 6.5 11.5" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      metric: (
        <div className="mt-6 pt-4 border-t border-[#074026]/10 flex flex-col gap-2 relative">
          <div className="flex justify-between items-center text-[11px] font-bold text-forest/70 mb-1">
            <span className="uppercase tracking-wider font-mono">Daily Operations Log</span>
            <span className="text-emerald font-extrabold text-xs tracking-wider uppercase font-sketchy">wasted hours</span>
          </div>
          
          <div className="flex flex-col gap-2 font-handwritten text-[15px] text-forest/80 pl-2">
            <div className="flex items-center gap-2.5">
              <svg className="w-4 h-4 shrink-0 overflow-visible" viewBox="0 0 20 20" fill="none">
                <path d="M 2 3 Q 10 1 18 2 T 17 18 T 3 17 Z" stroke="#074026" strokeWidth="1.5" />
                <path d="M 4 8 L 8 13 L 16 5" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="line-through decoration-rose-500/80 decoration-2 text-forest/50">Repetitive FAQs answering</span>
            </div>
            
            <div className="flex items-center gap-2.5">
              <svg className="w-4 h-4 shrink-0 overflow-visible" viewBox="0 0 20 20" fill="none">
                <path d="M 3 2 Q 11 3 17 2 T 18 18 T 2 17 Z" stroke="#074026" strokeWidth="1.5" />
                <path d="M 5 9 L 9 12 L 15 4" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="line-through decoration-rose-500/80 decoration-2 text-forest/50">Booking confirmation text</span>
            </div>
            
            <div className="flex items-center gap-2.5 relative">
              <svg className="w-4 h-4 shrink-0 overflow-visible" viewBox="0 0 20 20" fill="none">
                <path d="M 2 2 Q 10 3 18 1 T 17 17 T 3 18 Z" stroke="#074026" strokeWidth="1.5" />
                <path d="M 3 10 Q 10 4 17 10 T 3 10 Z" stroke="#10b981" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
              </svg>
              <span className="font-bold text-emerald leading-tight">Re-scheduling no-shows</span>
              <span className="text-[10px] font-sketchy text-emerald border border-emerald/30 bg-emerald/5 px-1 rounded rotate-[4deg] shrink-0 ml-1">
                AI Handled
              </span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="w-full px-6 py-24 relative z-10 bg-white border-t border-forest/10 overflow-hidden notebook-grid">
      {/* Dynamic atmospheric radial gradient under the sketchbook grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-[#ECFFF6]/40 blur-[130px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-full mx-auto flex flex-col items-center text-center relative z-10 w-full mb-16 md:mb-20">
        {/* Section Badge */}
        <AnimatedSection delay={0}>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 mb-4 text-[10px] font-bold uppercase tracking-widest text-emerald bg-white/70 border border-emerald/20 rounded-full shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse"></span>
            Operational Realities
          </div>
        </AnimatedSection>

        {/* Section Heading */}
        <AnimatedSection delay={50}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-forest leading-tight tracking-tight mb-4 max-w-3xl relative">
            Your front desk is costing you
            <br />
            <span className="relative inline-block text-emerald">
              more than you think
              {/* Hand-drawn sketchy underline curve under heading */}
              <svg className="absolute -bottom-2.5 left-0 w-full h-3 overflow-visible text-[#5ABF92]" viewBox="0 0 100 10" fill="none" preserveAspectRatio="none">
                <path d="M 0 5 Q 30 10 50 5 T 100 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 5 7 Q 40 4 80 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
              </svg>
            </span>
          </h2>
        </AnimatedSection>

        {/* Subtitle */}
        <AnimatedSection delay={100}>
          <p className="text-[14px] md:text-base text-forest/70 font-medium leading-relaxed max-w-2xl mt-4">
            Every missed call, slow reply, and forgotten follow-up is a paying client walking straight to your competitor.
          </p>
        </AnimatedSection>
      </div>

      {/* 3-Column Grid of Sketchbook Notebook Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 relative z-10 w-full pt-4">
        {painPoints.map((point, idx) => (
          <AnimatedSection key={idx} delay={150 + idx * 80}>
            <div className={`relative w-full p-8 md:p-9 rounded-3xl bg-white border border-[#074026]/12 transition-all duration-500 hover:rotate-0 hover:scale-[1.03] hover:shadow-[0_30px_60px_-15px_rgba(7,64,38,0.12)] flex flex-col justify-between h-full min-h-[380px] group notebook-paper-texture ${point.tiltClass}`}>
              
              {/* Washi Tape visual overlay */}
              <div className={`washi-tape ${point.tapeClass}`}></div>

              {/* Card Header: Badge & Number */}
              <div className="flex justify-between items-start mb-6">
                <span className={`px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-md border ${point.badgeColor}`}>
                  {point.badge}
                </span>
                <span className="text-[15px] font-sketchy font-bold text-forest/20 group-hover:text-emerald/45 transition-colors duration-300">
                  {`#0${idx + 1}`}
                </span>
              </div>

              {/* Title & Body */}
              <div className="flex-grow">
                {/* Icon & Title */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-forest/5 flex items-center justify-center text-forest group-hover:bg-emerald group-hover:text-white transition-all duration-300">
                    {point.icon}
                  </div>
                  <h3 className="text-base md:text-[17px] font-heading font-bold text-forest group-hover:text-emerald transition-colors duration-200 leading-snug">
                    {point.title}
                  </h3>
                </div>

                <p className="text-[13px] text-forest/70 font-medium leading-relaxed">
                  {point.desc}
                </p>
              </div>

              {/* Handdrawn SVG Metric Widget */}
              {point.metric}
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Decorative notebook doodles outside grid */}
      <div className="hidden xl:block absolute left-8 bottom-12 font-handwritten text-forest/40 text-sm rotate-[-8deg] pointer-events-none select-none max-w-[200px]">
        * System inefficiencies leak up to 35% of inbound pipeline before automation.
      </div>
      <div className="hidden xl:block absolute right-8 top-24 font-handwritten text-forest/40 text-sm rotate-[6deg] pointer-events-none select-none max-w-[200px]">
        * A human agent can only scale linearly. Systems scale exponentially.
      </div>
    </section>
  );
}
