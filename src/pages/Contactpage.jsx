import React, { useEffect, useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import FAQs from '../components/FAQs';

const Contactpage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! We will get back to you shortly.");
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <main className="w-full flex flex-col bg-white overflow-hidden pt-20">
      
      {/* Contact Hero Section */}
      <section className="relative w-full py-20 px-6 flex flex-col items-center justify-center">
        
        {/* Ambient blurs */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-bloom/60 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-celadon/20 rounded-full blur-[120px] pointer-events-none translate-y-1/2"></div>

        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center mt-12 mb-8">
          <AnimatedSection delay={0}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest/5 border border-forest/10 text-forest font-bold tracking-widest uppercase text-xs mb-6 shadow-sm">
              Get In Touch
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={150}>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-black tracking-tight leading-[1.05] mb-8">
              Let's build something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest to-emerald">extraordinary.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="text-lg md:text-xl text-forest/70 font-medium max-w-xl leading-relaxed tracking-wide">
              Whether you need a full enterprise automation overhaul or just want to explore what AI can do for your business, our team is ready to talk.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Split Layout */}
      <section className="relative w-full py-20 px-6 bg-white z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left: Contact Info */}
          <div className="flex flex-col justify-center">
            <AnimatedSection delay={0}>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-black mb-12">
                Direct Channels
              </h2>
            </AnimatedSection>

            <div className="flex flex-col gap-12">
              
              <AnimatedSection delay={150}>
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-forest/10 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-emerald/30 group-hover:shadow-md transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-forest text-xl mb-1">Email</h3>
                    <p className="text-forest/70 font-medium text-sm mb-2">For general inquiries and support:</p>
                    <a href="mailto:hello@bravenquill.com" className="text-emerald font-bold tracking-wide hover:text-forest transition-colors text-lg">hello@bravenquill.com</a>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-forest/10 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-emerald/30 group-hover:shadow-md transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-forest text-xl mb-1">Global Headquarters</h3>
                    <p className="text-forest/70 font-medium leading-relaxed">
                      123 Innovation Drive<br />
                      Tech District, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={450}>
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-forest/10 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-emerald/30 group-hover:shadow-md transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-forest text-xl mb-1">Operating Hours</h3>
                    <p className="text-forest/70 font-medium">Monday - Friday</p>
                    <p className="text-forest/70 font-medium">9:00 AM - 6:00 PM (EST)</p>
                  </div>
                </div>
              </AnimatedSection>

            </div>
          </div>

          {/* Right: Contact Form */}
          <AnimatedSection delay={300} className="w-full">
            <div className="relative w-full">
              {/* Form Blur Backdrop */}
              <div className="absolute inset-0 bg-emerald/10 rounded-[40px] blur-[80px] pointer-events-none translate-x-4 translate-y-4"></div>
              
              <div className="relative bg-white/70 backdrop-blur-2xl border border-white/50 shadow-[0_30px_60px_rgba(7,64,38,0.08)] p-8 md:p-12 rounded-[40px] w-full">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-bold text-forest tracking-widest uppercase ml-2">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white/60 backdrop-blur-sm border border-forest/10 rounded-2xl px-5 py-4 text-forest focus:outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20 transition-all placeholder:text-forest/30 font-medium shadow-inner"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-bold text-forest tracking-widest uppercase ml-2">Work Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white/60 backdrop-blur-sm border border-forest/10 rounded-2xl px-5 py-4 text-forest focus:outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20 transition-all placeholder:text-forest/30 font-medium shadow-inner"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-xs font-bold text-forest tracking-widest uppercase ml-2">Company Name</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-white/60 backdrop-blur-sm border border-forest/10 rounded-2xl px-5 py-4 text-forest focus:outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20 transition-all placeholder:text-forest/30 font-medium shadow-inner"
                      placeholder="Acme Corp"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-bold text-forest tracking-widest uppercase ml-2">How can we help?</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="4" 
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-white/60 backdrop-blur-sm border border-forest/10 rounded-2xl px-5 py-4 text-forest focus:outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20 transition-all resize-none placeholder:text-forest/30 font-medium shadow-inner"
                      placeholder="Tell us about your current operational bottlenecks..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="mt-4 bg-emerald hover:bg-forest text-white font-bold tracking-widest uppercase text-sm py-5 rounded-2xl transition-all duration-300 shadow-[0_10px_30px_rgba(31,130,85,0.3)] hover:shadow-xl hover:-translate-y-1 cursor-pointer w-full text-center"
                  >
                    Send Message
                  </button>

                </form>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* FAQs Section */}
      <FAQs />

    </main>
  );
};

export default Contactpage;
