import React from 'react';
import { Compass, Ship, Sun } from 'lucide-react';

const features = [
  {
    icon: Compass,
    title: 'Smart coastal routes',
    desc: 'Discover curated itineraries with scenic ocean drives, hidden coves, and breezy promenades.'
  },
  {
    icon: Ship,
    title: 'Seamless bookings',
    desc: 'Stay, sail, and shuttle in one flow. Transparent pricing, trusted partners, oceanfront first.'
  },
  {
    icon: Sun,
    title: 'Weather-aware planning',
    desc: 'Sunshine windows and tide timing help you pick the perfect beach day for your plan.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl text-sky-900 md:text-4xl">Everything you need for the shore</h2>
        <p className="mt-4 text-sky-700/90">
          Thoughtfully designed tools to take you from idea to toes-in-the-sand with a smile.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-sky-100 backdrop-blur transition hover:shadow-md"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-100/0 via-sky-100/0 to-sky-200/30 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative z-10">
              <div className="mb-4 inline-flex rounded-xl bg-sky-50 p-3 text-sky-700 ring-1 ring-sky-100">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-sky-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-sky-700/90">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
