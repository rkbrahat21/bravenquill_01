import React from 'react';
import Hero from '../components/Hero';
import LogoTicker from '../components/LogoTicker';

export default function Home({ onRequestAccess }) {
  return (
    <>
      {/* Hero Section */}
      <Hero onRequestAccess={onRequestAccess} />

      {/* Integration Logo Ticker */}
      <LogoTicker />
    </>
  );
}
