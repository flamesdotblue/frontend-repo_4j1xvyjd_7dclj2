import React from 'react';

const CTA = () => {
  return (
    <section className="relative mx-auto my-24 max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-sky-600 via-sky-500 to-cyan-500 px-6 py-16 text-white shadow-lg">
      <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-cyan-300/20 blur-2xl" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h3 className="font-display text-3xl md:text-4xl">Ready to ride the next wave?</h3>
        <p className="mt-4 text-white/90">
          Join now and craft your perfect beach escape with live availability, smart tips, and serene design.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-sky-700 shadow-sm transition hover:bg-sky-50"
          >
            Create an account
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-white/70 px-6 py-3 font-medium text-white/95 backdrop-blur transition hover:bg-white/10"
          >
            See plans
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
