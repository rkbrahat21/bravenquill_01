import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function SandboxPreview() {
  return (
    <section className="relative w-full py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <AnimatedSection delay={0}>
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-emerald mb-4">Interactive Demo</h2>
        </AnimatedSection>
        
        <AnimatedSection delay={150}>
          <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-black tracking-tight mb-8">
            Experience the <span className="text-forest">Quill Engine.</span>
          </h3>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <p className="text-lg text-forest/70 font-medium max-w-2xl mb-16">
            Interact with our sandbox environment to see how our agents process natural language commands and execute complex workflows in real-time.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={450} className="w-full">
          <div className="w-full max-w-4xl mx-auto bg-[#0a1f14] rounded-t-[32px] rounded-b-[16px] shadow-[0_30px_60px_rgba(7,64,38,0.2)] border border-forest/20 overflow-hidden flex flex-col h-[500px]">
            
            {/* Mac-style Window Header */}
            <div className="h-12 bg-white/5 border-b border-white/10 flex items-center px-6 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald/80"></div>
              <div className="mx-auto text-xs font-mono text-celadon/50 tracking-wider">quill-engine-v2.1</div>
            </div>

            {/* Chat/Command Interface Body */}
            <div className="flex-1 p-6 flex flex-col gap-6 overflow-hidden relative">
              
              {/* Background watermark */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 text-white/5 pointer-events-none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>

              <div className="flex flex-col gap-4 w-full max-w-2xl text-left relative z-10">
                
                {/* User Message */}
                <div className="self-end bg-emerald/20 border border-emerald/30 text-white p-4 rounded-2xl rounded-tr-sm max-w-[80%]">
                  <p className="text-sm font-medium">Extract the Q3 revenue metrics from the attached Salesforce export and generate a summary report.</p>
                </div>

                {/* Agent Processing State */}
                <div className="self-start flex items-center gap-3 text-celadon/70">
                  <svg className="animate-spin h-5 w-5 text-emerald" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="text-sm font-mono tracking-wide">Processing query...</span>
                </div>

                {/* Agent Response */}
                <div className="self-start bg-white/10 border border-white/20 text-white p-4 rounded-2xl rounded-tl-sm max-w-[90%] mt-2">
                  <p className="text-sm font-medium mb-3">Analysis complete. I've generated the summary report.</p>
                  <div className="bg-black/30 rounded-lg p-3 border border-white/5">
                    <div className="flex justify-between text-xs font-mono text-celadon mb-2">
                      <span>Total Revenue (Q3)</span>
                      <span className="text-emerald">$4.2M</span>
                    </div>
                    <div className="flex justify-between text-xs font-mono text-celadon mb-2">
                      <span>YoY Growth</span>
                      <span className="text-emerald">+18.5%</span>
                    </div>
                    <div className="flex justify-between text-xs font-mono text-celadon">
                      <span>Top Performing Region</span>
                      <span className="text-emerald">EMEA</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Input Area */}
              <div className="mt-auto relative z-10 w-full max-w-2xl mx-auto">
                <div className="relative flex items-center">
                  <input type="text" placeholder="Type a command to test the engine..." className="w-full bg-black/40 border border-white/20 rounded-full py-4 pl-6 pr-12 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-emerald/50 focus:ring-1 focus:ring-emerald/50 transition-all" disabled />
                  <button className="absolute right-2 w-10 h-10 rounded-full bg-emerald text-white flex items-center justify-center hover:bg-forest transition-colors cursor-not-allowed opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
