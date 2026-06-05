import React, { useEffect } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import CTA from '../components/CTA';

const Aboutpage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coreValues = [
    {
      title: "Relentless Efficiency",
      description: "We hate busywork as much as you do. We build systems that eliminate repetitive tasks so human capital can focus on what truly matters.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald group-hover:scale-110 transition-transform"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
    },
    {
      title: "Luxury-Grade Engineering",
      description: "We don't do clunky software. Our AI agents are designed to feel natural, intelligent, and perfectly aligned with your brand's high standards.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald group-hover:scale-110 transition-transform"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
    },
    {
      title: "Zero Friction",
      description: "Technology should get out of your way. We handle the complex setup, integration, and deployment so you just get results.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald group-hover:scale-110 transition-transform"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
    }
  ];

  return (
    <main className="w-full flex flex-col bg-white overflow-hidden pt-20">
      
      {/* About Hero Section */}
      <section className="relative w-full py-24 md:py-32 px-6 flex flex-col items-center justify-center min-h-[60vh]">
        
        {/* Ambient blurs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bloom/60 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-celadon/30 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/4 pointer-events-none animate-pulse" style={{ animationDuration: '12s' }}></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <AnimatedSection delay={0}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest/5 border border-forest/10 text-forest font-bold tracking-widest uppercase text-xs mb-8 shadow-sm">
              Our Mission
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={150}>
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-heading font-extrabold text-black tracking-tight leading-[1.05] mb-8">
              We build systems, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest to-emerald">not just software.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="text-lg md:text-xl text-forest/70 font-medium max-w-2xl leading-relaxed tracking-wide">
              Braven Quill was founded on a simple premise: human capital is too valuable to be wasted on repetitive, low-level tasks.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative w-full py-24 md:py-32 px-6 bg-white border-t border-forest/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          <div className="flex flex-col gap-8">
            <AnimatedSection delay={0}>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-black tracking-tight leading-[1.1]">
                The Era of Manual Operations <span className="text-emerald">is Over</span>
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={150}>
              <div className="w-16 h-1.5 bg-gradient-to-r from-emerald to-forest rounded-full"></div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <p className="text-lg text-forest/80 leading-relaxed font-medium">
                For years, businesses have been forced to choose between scaling their operations and maintaining high-quality customer experiences. Hiring more staff increases overhead, while cutting corners leads to lost revenue.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={450}>
              <p className="text-lg text-forest/80 leading-relaxed font-medium">
                We realized that off-the-shelf software wasn't enough. Businesses need intelligent, autonomous agents that can seamlessly integrate into their existing workflows—acting as a 24/7 workforce that never sleeps, never takes a sick day, and always delivers luxury-grade service.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={300} className="w-full">
            <div className="w-full aspect-[4/3] rounded-[40px] bg-gradient-to-br from-forest to-emerald relative overflow-hidden shadow-[0_20px_50px_rgba(7,64,38,0.2)]">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwaGF0aCBkPSJNMCAwdjQwTTAgMGg0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-30"></div>
              <div className="absolute w-[200%] h-[200%] animate-spin-slow bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)]"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white opacity-80 animate-pulse">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* Core Values Grid */}
      <section className="relative w-full py-32 px-6 bg-bloom/20 border-t border-forest/5">
        <div className="max-w-7xl mx-auto">
          
          <AnimatedSection delay={0}>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-black mb-6 tracking-tight">
                Our Core Values
              </h2>
              <p className="text-xl text-forest/70 max-w-2xl mx-auto font-medium">
                The principles that drive every system we architect.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <AnimatedSection key={index} delay={(index + 1) * 150} className="flex">
                <div className="bg-white/80 backdrop-blur-xl p-10 rounded-[32px] border border-white/50 shadow-[0_8px_30px_rgba(7,64,38,0.04)] hover:shadow-[0_20px_50px_rgba(7,64,38,0.1)] hover:-translate-y-2 transition-all duration-500 flex flex-col items-start w-full group relative overflow-hidden">
                  
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald/5 rounded-full blur-[30px] -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="w-16 h-16 rounded-2xl bg-white border border-emerald/10 shadow-sm flex items-center justify-center mb-8 relative z-10">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-heading font-extrabold text-forest mb-4 relative z-10">
                    {value.title}
                  </h3>
                  <p className="text-forest/70 font-medium leading-relaxed tracking-wide relative z-10">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      <CTA />

    </main>
  );
};

export default Aboutpage;
