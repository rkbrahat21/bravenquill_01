import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export default function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    window.lenis = lenis;

    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen text-black bg-white font-ui selection:bg-emerald/30 selection:text-forest flex flex-col justify-between">
        <div className="w-full grow flex flex-col">
          {/* 1. Navbar */}
          <Navbar />

          {/* 2. Routes (Pages) */}
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>

        {/* 3. Premium Footer */}
        <Footer />
      </div>
    </Router>
  );
}
