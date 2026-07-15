import React from "react";
import {
  Sparkles,
  Users,
  Hammer,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

export default function AboutCtrin() {
  const coreServices = [
    "Residential Interior Design",
    "Commercial & Office Interiors",
    "Modular Kitchen and Wardrobe Design",
    "Turnkey Interior Solutions",
    "Space Planning and 3D Visualization",
  ];

  return (
    <div className="relative text-[#0A1F3D] font-sans antialiased py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient gold glow, matches Banner */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#C9A227]/8 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header Tagline & Brand Intro */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 sm:p-10 mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#C9A227] uppercase">
              <span className="h-px w-6 bg-[#C9A227]" />
              About Ctrin Interior
              <span className="h-px w-6 bg-[#C9A227]" />
            </span>

            <h2 className="mt-5 font-serif text-3xl sm:text-5xl font-semibold text-[#0A1F3D] tracking-tight">
              You Need, We Create.
            </h2>

            <p className="mt-6 text-lg sm:text-xl text-[#4A5568] leading-relaxed">
              At Ctrin Interior, we believe that great design is more than just
              visual appeal—it’s about creating functional, meaningful, and
              inspiring environments.
            </p>
          </div>
        </div>

        {/* Founders Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 sm:p-12 rounded-2xl border border-[#0A1F3D]/8 shadow-[0_20px_50px_-20px_rgba(10,31,61,0.15)] mb-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-[#C9A227] font-semibold text-sm uppercase tracking-wider">
              <Users className="w-5 h-5" aria-hidden="true" />
              <span>The visionaries behind Ctrin</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0A1F3D]">
              A brother-sister duo redefining spaces
            </h3>
            <p className="text-[#4A5568] leading-relaxed">
              Founded by{" "}
              <strong className="text-[#0A1F3D] font-semibold">
                Mr. Sonu Kumar Sharma
              </strong>{" "}
              and{" "}
              <strong className="text-[#0A1F3D] font-semibold">
                Ms. Shalini Kumari
              </strong>
              , Ctrin Interior was established with a shared passion for
              transforming properties into artistic, precise, and highly
              innovative spaces.
            </p>
            <p className="text-[#4A5568] leading-relaxed">
              Our company merges striking artistic imagination with deep
              technical expertise to deliver complete, hassle-free layout
              transformations for both modern residential and sophisticated
              commercial projects.
            </p>
          </div>

          {/* Brand Promise Callout Box */}
          <div className="lg:col-span-5 relative bg-[#0A1F3D] text-white p-8 rounded-2xl border border-[#C9A227]/20 overflow-hidden">
            <div className="pointer-events-none absolute -right-8 -bottom-8 w-32 h-32 bg-[#C9A227]/10 rounded-full blur-2xl" />
            <div className="pointer-events-none absolute top-4 right-4 h-8 w-8 border-t-2 border-r-2 border-[#C9A227]/50" />
            <Sparkles
              className="text-[#C9A227] w-8 h-8 mb-4"
              aria-hidden="true"
            />
            <h4 className="font-serif text-lg font-semibold text-[#C9A227] mb-2">
              Our mission
            </h4>
            <p className="text-[#D7DCE5] text-sm leading-relaxed">
              To transform your space into a true reflection of your personality
              and purpose, seamlessly blending ultimate creativity with peak
              functionality for timeless, lifelong results.
            </p>
          </div>
        </div>

        {/* Core Capabilities Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Values / Workflow Approach */}
          <div className="space-y-6 bg-white p-8 rounded-2xl border border-[#C9A227]/15 shadow-[0_20px_50px_-20px_rgba(10,31,61,0.1)]">
            <h4 className="font-serif text-xl font-semibold text-[#0A1F3D]">
              Why clients trust Ctrin
            </h4>
            <p className="text-[#4A5568] text-sm leading-6">
              From initial blue-sky concept sketches to the final turnkey
              execution, every project we signature reflects absolute dedication
              to technical perfection and client happiness.
            </p>

            <div className="space-y-5 pt-2">
              <div className="flex gap-4 group">
                <div className="h-9 w-9 shrink-0 rounded-full bg-[#C9A227]/10 flex items-center justify-center transition-colors group-hover:bg-[#C9A227]/20">
                  <Hammer
                    className="w-4 h-4 text-[#C9A227]"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-[#0A1F3D]">
                    Quality craftsmanship
                  </h5>
                  <p className="text-xs text-[#7C879C] mt-0.5">
                    Meticulous attention to physical details and materials
                    ensures longevity.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="h-9 w-9 shrink-0 rounded-full bg-[#C9A227]/10 flex items-center justify-center transition-colors group-hover:bg-[#C9A227]/20">
                  <ShieldCheck
                    className="w-4 h-4 text-[#C9A227]"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-[#0A1F3D]">
                    Client-focused service
                  </h5>
                  <p className="text-xs text-[#7C879C] mt-0.5">
                    Your requirements form the foundation of our creative
                    structural decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* List of Main Services */}
          <div className="bg-[#0A1F3D] p-8 rounded-2xl border border-[#C9A227]/15 space-y-6 relative overflow-hidden">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, #C9A227 0px, #C9A227 1px, transparent 1px, transparent 40px)",
              }}
            />

            <h4 className="relative font-serif text-xl font-semibold text-white">
              Our core services
            </h4>
            <p className="relative text-[#A9B2C3] text-sm leading-6">
              We provide an integrated, end-to-end framework to cater to varying
              interior spatial demands:
            </p>

            <ul className="relative space-y-3">
              {coreServices.map((service, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-[#D7DCE5] font-medium text-sm sm:text-base transition-colors hover:text-white"
                >
                  <CheckCircle
                    className="w-4 h-4 text-[#C9A227] shrink-0"
                    aria-hidden="true"
                  />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
