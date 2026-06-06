import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function PainPoints() {
  const painPoints = [
    {
      badge: "Missed Opportunities",
      badgeColor: "bg-bloom text-emerald border-celadon/40",
      tiltClass: "rotate-[-1.5deg] hover:rotate-0",
      title: "Calls go unanswered. Revenue walks out.",
      desc: "Your staff can't be on three calls at once. So when a high-intent lead calls during a busy hour, lunch break, or after closing — they hang up, Google the next option, and book there. You never even knew they existed.",
      icon: (
        /* Sleek Digital Phone Receiver */
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      metric: (
        <div className="mt-6 pt-4 border-t border-forest/10 flex flex-col gap-3">
          <div className="flex justify-between items-center text-[11px] font-bold text-forest/80">
            <span className="uppercase tracking-wider font-mono">Unanswered Call Rate</span>
            <span className="text-emerald font-mono font-bold">64%</span>
          </div>
          <div className="w-full h-2 bg-forest/5 rounded-full overflow-hidden">
            <div className="h-full bg-emerald rounded-full" style={{ width: '64%' }}></div>
          </div>
          <div className="flex justify-between items-center text-[10px] text-forest/60 font-semibold font-mono">
            <span>Busy Hours / After-Hours</span>
            <span className="text-emerald font-bold">82% Missed</span>
          </div>
        </div>
      )
    },
    {
      badge: "Slow Response",
      badgeColor: "bg-bloom text-emerald border-celadon/40",
      tiltClass: "rotate-[1.2deg] hover:rotate-0 translate-y-2 lg:translate-y-0",
      title: "Leads go cold before anyone follows up.",
      desc: "Someone fills out your form, sends a DM, or leaves a voicemail. By the time a staff member gets to it — hours later, maybe the next day — that person has already moved on. Speed-to-lead isn't a nice-to-have. It's the difference between booked and ghosted.",
      icon: (
        /* Sleek Digital Clock */
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      metric: (
        <div className="mt-6 pt-4 border-t border-forest/10 flex flex-col gap-3">
          <div className="flex justify-between items-center text-[11px] font-bold text-forest/80">
            <span className="uppercase tracking-wider font-mono">Conversion Prob. vs. Delay</span>
            <span className="text-emerald font-mono font-bold">-90% Drop</span>
          </div>
          <div className="w-full h-20 relative flex items-center justify-center bg-bloom/10 rounded-xl border border-celadon/30 px-2 py-1">
            <svg className="w-full h-full" viewBox="0 0 280 60" fill="none">
              {/* Grid Lines */}
              <line x1="10" y1="10" x2="270" y2="10" stroke="rgba(7,64,38,0.04)" strokeWidth="1" />
              <line x1="10" y1="30" x2="270" y2="30" stroke="rgba(7,64,38,0.04)" strokeWidth="1" />
              <line x1="10" y1="50" x2="270" y2="50" stroke="rgba(7,64,38,0.04)" strokeWidth="1" />

              {/* Curve path */}
              <path
                d="M 15 12 C 60 12 110 48 265 52"
                stroke="var(--color-emerald)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M 15 12 C 60 12 110 48 265 52"
                stroke="var(--color-verdant)"
                strokeWidth="1"
                strokeLinecap="round"
                opacity="0.5"
              />

              {/* Data Points */}
              <circle cx="15" cy="12" r="3" fill="var(--color-forest)" />
              <circle cx="265" cy="52" r="3" fill="var(--color-emerald)" />
            </svg>
            <div className="absolute top-2 left-3 text-[9px] font-semibold text-emerald bg-bloom px-1.5 py-0.5 rounded border border-celadon/50">
              Instant: 80%
            </div>
            <div className="absolute bottom-2 right-3 text-[9px] font-semibold text-forest/70 bg-forest/5 px-1.5 py-0.5 rounded border border-forest/10">
              30m+ Delay: 8%
            </div>
          </div>
        </div>
      )
    },
    {
      badge: "Human Overload",
      badgeColor: "bg-bloom text-emerald border-celadon/40",
      tiltClass: "rotate-[-0.8deg] hover:rotate-0 translate-y-4 lg:translate-y-0",
      title: "Your team is buried in work that shouldn't need a human.",
      desc: "Answering the same five questions. Sending appointment reminders. Confirming bookings. Re-scheduling no-shows. Your staff is spending hours every week on tasks that a system could handle in seconds — while actual clients wait.",
      icon: (
        /* Sleek Digital Clipboard Check */
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      metric: (
        <div className="mt-6 pt-4 border-t border-forest/10 flex flex-col gap-3">
          <div className="flex justify-between items-center text-[11px] font-bold text-forest/80">
            <span className="uppercase tracking-wider font-mono">Weekly Time Allocation</span>
            <span className="text-emerald font-mono font-bold">72% Automatable</span>
          </div>

          {/* Stacked bar */}
          <div className="w-full h-4 bg-forest/5 rounded-md overflow-hidden flex">
            <div className="h-full bg-forest/20" style={{ width: '42%' }} title="Repetitive Tasks"></div>
            <div className="h-full bg-verdant" style={{ width: '30%' }} title="Reminders & Followups"></div>
            <div className="h-full bg-emerald" style={{ width: '28%' }} title="High-Value Client Work"></div>
          </div>

          <div className="grid grid-cols-3 gap-1 text-[9px] font-semibold text-forest/65">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded bg-forest/20 shrink-0"></span>
              <span>42% FAQs/Inbox</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded bg-verdant shrink-0"></span>
              <span>30% Reminders</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded bg-emerald shrink-0"></span>
              <span>28% Client Care</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="w-full px-6 py-12 relative z-10 bg-white overflow-hidden notebook-grid">
      {/* Dynamic atmospheric radial gradient under the sketchbook grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-[#ECFFF6]/40 blur-[130px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-full mx-auto flex flex-col items-center text-center relative z-10 w-full mb-8 md:mb-12">
        {/* Section Badge */}
        <AnimatedSection delay={0}>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 mb-4 text-[10px] font-bold uppercase tracking-widest text-emerald bg-white/70 border border-emerald/20 rounded-full shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse"></span>
            Operational Realities
          </div>
        </AnimatedSection>

        {/* Section Heading */}
        <AnimatedSection delay={50}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-forest leading-tight tracking-tight mb-4 max-w-3xl">
            Your front desk is costing you
            <br />
            <span className="text-emerald underline decoration-2 decoration-emerald/20 underline-offset-6">
              more than you think
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

      {/* 3-Column Grid of Notebook Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 relative z-10 w-full pt-4">
        {painPoints.map((point, idx) => (
          <AnimatedSection key={idx} delay={150 + idx * 80}>
            <div className={`relative w-full p-8 md:p-9 rounded-3xl bg-white border border-[#074026]/12 transition-all duration-500 hover:rotate-0 hover:scale-[1.03] hover:shadow-[0_30px_60px_-15px_rgba(7,64,38,0.12)] flex flex-col justify-between h-full min-h-[380px] group notebook-paper-texture ${point.tiltClass}`}>

              {/* Card Header: Badge & Number */}
              <div className="flex justify-between items-start mb-6">
                <span className={`px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-md border ${point.badgeColor}`}>
                  {point.badge}
                </span>
                <span className="text-[15px] font-mono font-bold text-forest/20 group-hover:text-emerald/45 transition-colors duration-300">
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

              {/* Pure Graph Metric Widget */}
              {point.metric}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
