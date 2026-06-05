import React from 'react';

export default function LogoTicker() {
  const integrations = [
    {
      name: 'Stacked Lab',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      name: 'Powersurge',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="5" y="2" width="14" height="20" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 7v10M9 12h6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      name: 'Warpspeed',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      name: 'Leapyear',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      name: 'EasyTrack',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full bg-bloom py-12 border-t border-celadon/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Label */}
        <p className="font-ui text-xs md:text-sm font-medium tracking-wide text-forest/40 mb-8 uppercase">
          Built to be integrated with your current stack
        </p>

        {/* Logos Flex Grid */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16">
          {integrations.map((item, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 text-forest/50 hover:text-emerald transition-colors duration-300 cursor-default select-none group"
            >
              <span className="transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </span>
              <span className="font-ui text-base font-bold tracking-tight">
                {item.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
