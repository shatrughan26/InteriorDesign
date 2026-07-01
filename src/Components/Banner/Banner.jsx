import React, { useEffect, useState } from "react";

const images = [
  "/src/assets/banner.jpeg",
  "/src/assets/banner1.jpeg",
  "/src/assets/banner2.jpeg",
  "/src/assets/banner4.jpeg",
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="relative bg-white py-12 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto overflow-hidden rounded-3xl shadow-2xl">
        <div className="grid lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="bg-[#f7f5f2] p-10 lg:p-16 flex flex-col justify-center">
            <p className="uppercase tracking-[0.3em] text-sm text-amber-700 font-semibold">
              Ctrin Interior
            </p>

            <h1 className="mt-5 text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Transforming
              <br />
              Spaces Into
              <br />
              Experiences.
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-8">
              Modern interiors crafted with elegance, functionality and timeless
              aesthetics.
            </p>

            <div className="mt-10 flex gap-5">
              <button className="rounded-xl bg-black text-white px-8 py-4 font-semibold hover:bg-gray-800 transition">
                Get Free Quote
              </button>

              <button className="rounded-xl border border-black px-8 py-4 font-semibold hover:bg-black hover:text-white transition">
                View Projects
              </button>
            </div>
          </div>

          {/* RIGHT CAROUSEL */}
          <div className="relative h-[500px] overflow-hidden group bg-black">
            {/* Image */}
            <img
              src={images[index]}
              alt="Interior"
              className="w-full h-full object-cover object-center scale-105 transition-all duration-700"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>

            {/* Controls */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-2 rounded-full"
            >
              ‹
            </button>

            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-2 rounded-full"
            >
              ›
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
                    i === index ? "bg-white w-4" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
