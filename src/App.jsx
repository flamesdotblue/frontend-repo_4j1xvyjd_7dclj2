import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import OceanReveal from './components/OceanReveal';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Hero />
      <Features />
      <OceanReveal />
      <CTA />
      <footer className="mx-auto mt-10 max-w-6xl px-6 py-12 text-center text-sm text-sky-700/70">
        © {new Date().getFullYear()} Shoreline. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
