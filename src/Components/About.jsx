import React from 'react';
import { Sparkles, Users, Hammer, ShieldCheck, CheckCircle } from 'lucide-react';

export default function AboutCtrin() {
  const coreServices = [
    "Residential Interior Design",
    "Commercial & Office Interiors",
    "Modular Kitchen and Wardrobe Design",
    "Turnkey Interior Solutions",
    "Space Planning and 3D Visualization"
  ];

  return (
    <div className="bg-slate-50 text-slate-800 font-sans antialiased py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Tagline & Brand Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-amber-600 uppercase bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">
            About Ctrin Interior
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            You Need, We Create.
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
            At Ctrin Interior, we believe that great design is more than just visual appeal — it’s about creating functional, meaningful, and inspiring environments.
          </p>
        </div>

        {/* Founders Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-100 mb-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-amber-600 font-semibold text-sm">
              <Users className="w-5 h-5" />
              <span>The Visionaries Behind Ctrin</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              A Brother-Sister Duo Redefining Spaces
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Founded by <strong className="text-slate-950 font-semibold">Mr. Sonu Kumar Sharma</strong> and <strong className="text-slate-950 font-semibold">Ms. Shalini Kumari</strong>, Ctrin Interior was established with a shared passion for transforming properties into artistic, precise, and highly innovative spaces.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our company merges striking artistic imagination with deep technical expertise to deliver complete, hassle-free layout transformations for both modern residential and sophisticated commercial projects.
            </p>
          </div>
          
          {/* Brand Promise Callout Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-2xl border border-slate-700 shadow-xl relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />
            <Sparkles className="text-amber-400 w-8 h-8 mb-4" />
            <h4 className="text-lg font-bold text-amber-400 mb-2">Our Mission</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              To transform your space into a true reflection of your personality and purpose, seamlessly blending ultimate creativity with peak functionality for timeless, lifelong results.
            </p>
          </div>
        </div>

        {/* Core Capabilities Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Values / Workflow Approach */}
          <div className="space-y-6 bg-amber-50/40 p-8 rounded-2xl border border-amber-100/70">
            <h4 className="text-xl font-bold text-slate-900">Why Clients Trust Ctrin</h4>
            <p className="text-slate-600 text-sm">
              From initial blue-sky concept sketches to the final turnkey execution, every project we signature reflects absolute dedication to technical perfection and client happiness.
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="flex gap-3">
                <Hammer className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-semibold text-slate-900">Quality Craftsmanship</h5>
                  <p className="text-xs text-slate-500 mt-0.5">Meticulous attention to physical details and materials ensures longevity.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-semibold text-slate-900">Client-Focused Service</h5>
                  <p className="text-xs text-slate-500 mt-0.5">Your requirements form the foundation of our creative structural decisions.</p>
                </div>
              </div>
            </div>
          </div>

          {/* List of Main Services */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
            <h4 className="text-xl font-bold text-slate-900">Our Core Services</h4>
            <p className="text-slate-600 text-sm">
              We provide an integrated, end-to-end framework to cater to varying interior spatial demands:
            </p>
            
            <ul className="space-y-3">
              {coreServices.map((service, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-700 font-medium text-sm sm:text-base">
                  <CheckCircle className="w-5 h-5 text-amber-600 shrink-0" />
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