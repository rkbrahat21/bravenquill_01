import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/Braven Quill logo website.svg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-forest text-white py-20 px-6 border-t border-emerald/20 mt-auto relative z-10">
      <div className="max-w-300 mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">

        {/* Left Side: Brand & Links (Spans 7 columns on md) */}
        <div className="md:col-span-7 flex flex-col md:flex-row gap-16 justify-between">

          <div className="flex flex-col items-start gap-6 max-w-xs">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={logo}
                alt="Braven Quill Logo"
                className="h-8 md:h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-105 brightness-0 invert"
              />
            </Link>
            <p className="font-ui text-sm leading-relaxed text-celadon/70">
              Operational intelligence and luxury-grade systems engineering for elite enterprise automation.
            </p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <h4 className="font-ui text-sm font-bold tracking-widest uppercase text-emerald">Explore</h4>
              <Link to="/" className="font-ui text-sm text-white/70 hover:text-white transition-colors duration-200">Home</Link>
              <Link to="/about-us" className="font-ui text-sm text-white/70 hover:text-white transition-colors duration-200">About Us</Link>
              <Link to="/#services" className="font-ui text-sm text-white/70 hover:text-white transition-colors duration-200">Services</Link>
              <Link to="/#case-studies" className="font-ui text-sm text-white/70 hover:text-white transition-colors duration-200">Case Studies</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-ui text-sm font-bold tracking-widest uppercase text-emerald">Legal</h4>
              <Link to="/" className="font-ui text-sm text-white/70 hover:text-white transition-colors duration-200">Privacy Policy</Link>
              <Link to="/" className="font-ui text-sm text-white/70 hover:text-white transition-colors duration-200">Terms of Service</Link>
            </div>
          </div>

        </div>

        {/* Right Side: Subscribe Newsletter (Spans 5 columns on md) */}
        <div className="md:col-span-5 flex flex-col items-start md:items-end md:text-right">
          <h4 className="font-heading font-extrabold text-2xl mb-4">Subscribe to our newsletter</h4>
          <p className="font-ui text-sm text-celadon/70 mb-6 max-w-sm">
            Get the latest insights on AI automation and operational intelligence delivered to your inbox.
          </p>

          <form className="w-full max-w-sm flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald transition-colors"
              required
            />
            <button
              type="submit"
              className="w-full px-8 py-4 bg-emerald hover:bg-white hover:text-forest text-white rounded-full font-bold tracking-widest uppercase text-sm transition-all duration-300 shadow-lg"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      <div className="max-w-300 mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-ui text-xs text-celadon/40 tracking-wider">
          © {currentYear} Braven Quill. All rights reserved.
        </span>
        <span className="font-ui text-xs text-celadon/40 tracking-wider uppercase">
          Engineered by Braven Quill
        </span>
      </div>
    </footer>
  );
}
