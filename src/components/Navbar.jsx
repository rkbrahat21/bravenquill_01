import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/Braven Quill logo website.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about-us' },
    { name: 'Services', href: '/#services' },
    { name: 'Case Studies', href: '/#case-studies' }
  ];

  return (
    <>
      <nav className={`w-full h-18 z-50 transition-all duration-500 ease-out p-2 bg-transparent`}>
        <div className="max-w-full mx-auto px-6 md:px-12 h-full flex items-center justify-between">

          {/* Left: Logo + Text */}
          <Link to="/" className="flex items-center gap-3 group cursor-pointer z-50">
            <img
              src={logo}
              alt="Braven Quill Logo"
              className="h-8 md:h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Center: Nav Links (Desktop) */}
          <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-ui text-sm font-semibold tracking-md uppercase text-forest/80 hover:text-emerald transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-emerald transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right: CTA (Desktop) */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact-us"
              className="font-ui text-xs font-bold tracking-widest uppercase text-white bg-forest hover:bg-emerald px-8 py-4 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(7,64,38,0.2)] hover:shadow-[0_15px_40px_rgba(31,130,85,0.3)] hover:-translate-y-1"
            >
              WORK WITH ME
            </Link>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-forest transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-forest transition-all duration-300 origin-center ${isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`} />
            <span className={`w-6 h-0.5 bg-forest transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-3xl z-40 flex flex-col justify-center px-8 transition-all duration-500 md:hidden ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
      >
        <div className="flex flex-col gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-heading text-4xl font-extrabold text-forest hover:text-emerald transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}

          <div className="flex flex-col items-center w-full max-w-xs mt-12">
            <Link
              to="/contact-us"
              onClick={() => setIsOpen(false)}
              className="font-ui text-sm font-bold tracking-widest uppercase text-white bg-forest hover:bg-emerald px-10 py-5 rounded-full transition-all duration-300 w-full text-center shadow-2xl"
            >
              WORK WITH ME
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
