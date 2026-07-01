import React from "react";
import Navbar from "./Navbar/Navbar";
import About from "./Components/About";
import Location from "./Components/Location";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black font-sans text-black">
      {/* Background Depth Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-[10%] -top-[20%] h-[50vw] w-[50vw] rounded-full bg-white/[0.03] mix-blend-screen blur-[130px]" />
        <div className="absolute -bottom-[20%] -right-[10%] h-[50vw] w-[50vw] rounded-full bg-slate-800/[0.05] mix-blend-screen blur-[130px]" />
      </div>

      {/* 1. Navigation Component (Floats at the top) */}
      <Navbar />

      {/* Home Target Group (Banner + Hero elements mapped to 'home') */}
      <div id="home" className="w-full">

        {/* Main Hero Container */}
        <main className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-6 pb-16 pt-12 lg:flex-row lg:gap-16">
          {/* Left: Text Elements */}
          <div className="flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-slate-300 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
              Now Open in Gurugram
            </div>

            <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl">
              Sip. Snap. <br />
              <span className="text-slate-400">Share.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg text-slate-400 sm:text-xl">
              Experience the perfect blend of artisanal coffee and
              picture-perfect aesthetics. Your next viral moment starts right
              here.
            </p>

            <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <button
                onClick={() =>
                  document
                    .getElementById("menu")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group relative flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-black transition-all hover:bg-slate-200 hover:scale-105 active:scale-95"
              >
                Explore Menu
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("location")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10 active:scale-95"
              >
                Book a Table
              </button>
            </div>
          </div>

          {/* Right: Graphic Card Element */}
          <div className="relative mt-16 flex w-full justify-center lg:mt-0 lg:w-1/2">
            <div className="relative h-[400px] w-full max-w-sm rounded-3xl border border-white/10 bg-zinc-900/40 p-2 shadow-2xl backdrop-blur-xl sm:h-[500px]">
              <div className="flex h-full w-full flex-col justify-between rounded-2xl border border-white/5 bg-gradient-to-b from-white/10 to-transparent p-6">
                <div className="flex items-center justify-end">
                  <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl backdrop-blur-md transition-transform hover:scale-110">
                    📸
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="h-10 w-3/4 animate-pulse rounded-lg bg-white/10"></div>
                  <div className="h-4 w-1/2 animate-pulse rounded-lg bg-white/5"></div>
                </div>
              </div>

              {/* Coffee Badge */}
              <div className="absolute -bottom-6 -left-6 hidden animate-[bounce_6s_infinite] rounded-2xl border border-white/10 bg-zinc-950 p-4 shadow-2xl backdrop-blur-md sm:block">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-2xl border border-white/10">
                    ☕
                  </div>
                  <div>
                    <p className="text-xs font-medium text-zinc-400">
                      Freshly Roasted
                    </p>
                    <p className="text-lg font-bold text-white">100% Arabica</p>
                  </div>
                </div>
              </div>

              {/* Reviews Badge */}
              <div className="absolute -right-6 -top-6 hidden animate-[bounce_7s_infinite_reverse] rounded-2xl border border-white/10 bg-zinc-950 p-4 shadow-2xl backdrop-blur-md sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="h-8 w-8 rounded-full border-2 border-zinc-950 bg-zinc-700"></div>
                    <div className="h-8 w-8 rounded-full border-2 border-zinc-950 bg-zinc-500"></div>
                    <div className="h-8 w-8 rounded-full border-2 border-zinc-950 bg-zinc-300"></div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1 text-xs text-white">
                      ★ ★ ★ ★ ★
                    </div>
                    <span className="text-xs font-semibold text-zinc-300">
                      4.9/5 Ratings
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* 4. Refocused Multi-Cuisine About Section */}
      <div id="about">
        <About />
      </div>

      {/* 5. Location Section */}
      <div id="location">
        <Location />
      </div>

      <Footer />
    </div>
  );
};

export default App;
