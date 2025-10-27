import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/*
  OceanReveal: scroll-driven mask reveal section
  As the user scrolls, images and gradients are revealed with a soft mask.
*/
const OceanReveal = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  // Map scroll progress to mask position/size
  const maskSize = useTransform(scrollYProgress, [0, 1], [10, 140]);
  const yShift = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="reveal" ref={ref} className="relative w-full bg-gradient-to-b from-white via-sky-50 to-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl text-sky-900 md:text-4xl">Feel the tide roll in</h2>
          <p className="mt-4 text-sky-700/90">
            Smooth, scroll-based reveals mimic the rhythm of ocean waves—calm, immersive, and playful.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i} index={i} maskSize={maskSize} yShift={yShift} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ index, maskSize, yShift }) => {
  const images = [
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1501959915551-4e8a04a3a1b5?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop'
  ];

  const captions = [
    'Crystal waters',
    'Golden horizons',
    'Carefree escapes'
  ];

  return (
    <motion.div
      style={{
        WebkitMaskImage: maskSize && `radial-gradient(${maskSize}% ${maskSize}% at 50% 50%, #000 60%, transparent 61%)`,
        maskImage: maskSize && `radial-gradient(${maskSize}% ${maskSize}% at 50% 50%, #000 60%, transparent 61%)`,
        y: yShift
      }}
      className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-sky-100 shadow-sm"
    >
      <img
        src={images[index - 1]}
        alt={captions[index - 1]}
        className="h-full w-full object-cover"
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sky-900/40 via-sky-900/0 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-sky-800 backdrop-blur">
          {captions[index - 1]}
        </div>
      </div>
    </motion.div>
  );
};

export default OceanReveal;
