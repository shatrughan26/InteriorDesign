import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  // Updated navigation items matching your Ctrin Interior pages
  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Estimator', id: 'estimator' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' }
  ];

  // Smooth scroll handler function
  const handleScroll = (item) => {
    setActiveItem(item.label);
    setIsOpen(false); // Close mobile drawer if open

    const element = document.getElementById(item.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50 rounded-2xl border border-slate-200/80 bg-white/80 px-6 py-3.5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all duration-300">
      <div className="flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => handleScroll({ label: 'Home', id: 'home' })}>
          <div className="h-8 w-8 rounded-lg bg-slate-900 flex items-center justify-center font-bold text-amber-500 text-lg shadow-sm">
            C
          </div>
          <div className="flex flex-col">
            <span className="text-slate-900 text-base font-black tracking-wider uppercase leading-none">
              Ctrin Interior
            </span>
            <span className="text-[9px] text-slate-500 tracking-widest font-semibold uppercase mt-0.5">
              You Need, We Create
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 rounded-xl bg-slate-100/60 p-1 border border-slate-200/40">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleScroll(item)}
              className={`px-4 py-1.5 text-xs lg:text-sm font-semibold transition-all duration-300 rounded-lg ${
                activeItem === item.label
                  ? 'text-slate-950 bg-white shadow-sm font-bold'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-white/40'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Dynamic CTA Button (Desktop) */}
        <div className="hidden md:block">
          <button 
            onClick={() => handleScroll({ label: 'Estimator', id: 'estimator' })}
            className="bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold text-xs px-4 py-2 rounded-xl transition-colors shadow-sm"
          >
            Calculate Cost
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-500 hover:text-slate-900 focus:outline-none p-1"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6 fill-none stroke-current transition-transform duration-200" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-1.5 rounded-xl bg-white p-2.5 border border-slate-200 shadow-inner">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleScroll(item)}
              className={`w-full text-left px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                activeItem === item.label
                  ? 'bg-amber-50 text-amber-800 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}