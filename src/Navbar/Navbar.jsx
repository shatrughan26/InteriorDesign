import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Privacy Policy", id: "privacypolicy" },
    { label: "Refund Policy", id: "refundpolicy" },
    { label: "Terms & Cond.", id: "termCondition" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  const handleScroll = (item) => {
    setActiveItem(item.label);
    setIsOpen(false);

    const element = document.getElementById(item.id);

    if (element) {
      const navbarHeight = 100;

      const offsetTop =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50 rounded-2xl border border-slate-200/80 bg-white/80 px-6 py-3.5 shadow-lg backdrop-blur-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleScroll({ label: "Home", id: "home" })}
        >
          <div className="h-8 w-8 rounded-lg bg-slate-900 flex items-center justify-center text-amber-500 font-bold text-lg">
            C
          </div>

          <div>
            <h1 className="text-slate-900 font-black uppercase tracking-wide text-sm">
              CTRIN Interior
            </h1>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest">
              You Need, We Create
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleScroll(item)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeItem === item.label
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-900 hover:bg-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white rounded-xl border border-slate-200 p-3 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleScroll(item)}
              className={`block w-full text-left px-3 py-2 rounded-lg text-sm ${
                activeItem === item.label
                  ? "bg-amber-50 text-amber-700 font-semibold"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}