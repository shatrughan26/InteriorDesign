import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import banner from "../../assets/banner.jpeg";
import banner1 from "../../assets/banner1.jpeg";
import banner2 from "../../assets/banner2.jpeg";
import banner4 from "../../assets/banner4.jpeg";

const images = [banner, banner1, banner2, banner4];

const SLIDE_DURATION = 5000; // ms

const Banner = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto slide, pauses on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [isPaused, index]);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="relative py-6 sm:py-12 px-4 sm:px-6 lg:px-10 overflow-hidden">
      {/* Ambient gold glow */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#0A1F3D]/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_-15px_rgba(10,31,61,0.35)] border border-[#0A1F3D]/5">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="relative bg-white p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center overflow-hidden">
            {/* subtle diagonal gold line texture */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, #C9A227 0px, #C9A227 1px, transparent 1px, transparent 40px)",
              }}
            />

            <div className="relative flex items-center gap-4">
              <p className="uppercase tracking-[0.35em] text-[10px] sm:text-xs text-slate-950 font-semibold">
                Ctrin Interior
              </p>
            </div>

            <h1 className="relative mt-4 sm:mt-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.15] lg:leading-[1.1]">
              Transforming
              <br />
              Spaces Into
              <br />
              <span className="text-[#3B5BDB]">Experiences.</span>
            </h1>

            <p className="relative mt-4 sm:mt-6 text-black text-sm sm:text-base lg:text-lg leading-6 sm:leading-8 max-w-md font-mono">
              Modern interiors crafted with elegance, functionality, and
              timeless aesthetics designed for those who expect nothing
              less than the extraordinary.
            </p>
          </div> {/* <--- Added this missing closing tag */}

          {/* RIGHT CAROUSEL */}
          <div
            className="relative h-[300px] sm:h-[420px] lg:h-auto min-h-[300px] lg:min-h-[500px] overflow-hidden group bg-[#0A1F3D]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Crossfading images with slow Ken Burns zoom on the active slide */}
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Interior design showcase ${i + 1}`}
                className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
                  i === index
                    ? "opacity-100 animate-kenburns"
                    : "opacity-0"
                }`}
              />
            ))}

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F3D]/70 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F3D]/20 to-transparent" />

            {/* Gold corner frame — signature detail */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 h-6 sm:h-10 w-6 sm:w-10 border-t-2 border-l-2 border-[#C9A227] opacity-80" />
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 h-6 sm:h-10 w-6 sm:w-10 border-t-2 border-r-2 border-[#C9A227] opacity-80" />
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 h-6 sm:h-10 w-6 sm:w-10 border-b-2 border-l-2 border-[#C9A227] opacity-80" />
            <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 h-6 sm:h-10 w-6 sm:w-10 border-b-2 border-r-2 border-[#C9A227] opacity-80" />

            {/* Controls */}
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-8 sm:h-10 w-8 sm:w-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur text-white border border-white/20 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:focus:opacity-100 transition-all duration-300 hover:bg-[#C9A227] hover:text-[#0A1F3D] hover:border-[#C9A227]"
            >
              ‹
            </button>

            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 h-8 sm:h-10 w-8 sm:w-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur text-white border border-white/20 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:focus:opacity-100 transition-all duration-300 hover:bg-[#C9A227] hover:text-[#0A1F3D] hover:border-[#C9A227]"
            >
              ›
            </button>

            {/* Progress dots with animated gold timer fill */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="relative h-1 sm:h-1.5 w-8 sm:w-10 rounded-full bg-white/25 overflow-hidden"
                >
                  {i === index && (
                    <span
                      className="absolute inset-y-0 left-0 bg-[#C9A227] rounded-full"
                      style={{
                        animation: `fillSlide ${SLIDE_DURATION}ms linear forwards`,
                        animationPlayState: isPaused ? "paused" : "running",
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fillSlide {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes kenburns {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }
        .animate-kenburns {
          animation: kenburns ${SLIDE_DURATION + 1000}ms ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-kenburns { animation: none; }
          * { transition-duration: 0.01ms !important; }
        }
      `}</style>
    </section>
  );
};

export default Banner;