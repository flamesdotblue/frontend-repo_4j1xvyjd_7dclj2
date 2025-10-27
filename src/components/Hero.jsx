import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-gradient-to-b from-sky-100 via-sky-50 to-white">
      {/* 3D Ocean Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient veil to keep text readable without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-100/70 via-sky-50/40 to-white/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-xs font-medium text-sky-700 shadow-sm ring-1 ring-sky-200 backdrop-blur">
          🌊 Beach vibes • Stress-free travel planning
        </span>
        <h1 className="font-display text-4xl leading-tight text-sky-900 md:text-6xl">
          Plan coastal getaways with ease
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-sky-700/90 md:text-lg">
          A modern travel platform for sun chasers and wave seekers. Discover, plan,
          and book dreamy ocean-side escapes—beautifully.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#features"
            className="group inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-white shadow-lg shadow-sky-600/30 transition hover:bg-sky-700"
          >
            Get started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#reveal"
            className="inline-flex items-center gap-2 rounded-full bg-white/70 px-6 py-3 text-sky-800 shadow ring-1 ring-sky-200 backdrop-blur transition hover:bg-white"
          >
            Explore the experience
          </a>
        </div>
      </div>

      {/* Bottom wave fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;
