import React from 'react';
// Fixed the import syntax to correctly load your local asset image
import bannerImg from '../../../src/assets/banner.jpg';

const Banner = () => {
  return (
    <div className="relative w-full bg-black py-12 px-4 md:px-8">
      {/* Container tracking maximum layout line width */}
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/20 bg-zinc-950 shadow-2xl">
        
        {/* Creative Flex Layout: Text details stack on mobile, sit next to image on desktop */}
        <div className="flex flex-col lg:flex-row items-stretch">
          
          {/* Left Column: Minimalist Typography & Accent Details */}
          <div className="flex flex-col justify-between p-8 md:p-12 lg:w-2/5 border-b lg:border-b-0 lg:border-r border-white/10 bg-zinc-900/20 backdrop-blur-sm">
            <div>
              {/* Subtle design tracker line */}
              <div className="mb-4 h-[1px] w-12 bg-white" />
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                Est. 2026 / Original Space
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                THE ART OF <br />
                THE SHOT.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                Where high-contrast aesthetics meet precision roasting. Capture the texture, taste the shadow.
              </p>
            </div>

            {/* Design Footer Accent */}
            <div className="mt-8 flex items-center gap-4 text-zinc-600">
              <span className="text-xs font-mono">01 // BRUSHED MONO</span>
              <div className="h-[1px] flex-1 bg-zinc-800" />
            </div>
          </div>

          {/* Right Column: Hero Visual Container */}
          <div className="relative min-h-[300px] sm:min-h-[400px] lg:w-3/5 overflow-hidden group bg-zinc-900">
            {/* The single main banner image */}
            <img 
              src={bannerImg} 
              alt="Selfie Cafe Aesthetic Banner" 
              className="absolute inset-0 h-full w-full object-cover grayscale contrast-125 brightness-90 transition-transform duration-700 ease-out group-hover:scale-105"
            />
            
            {/* High-Contrast overlay mask that sharpens the edge profile */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

            {/* Subtle floating branding indicator on the image canvas */}
            <div className="absolute bottom-4 right-4 rounded-md border border-white/20 bg-black/60 px-3 py-1 text-[10px] font-mono tracking-widest text-white backdrop-blur-md uppercase">
              [ RAW FRAME ]
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;