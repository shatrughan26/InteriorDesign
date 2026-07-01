import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold">
          Interior<span className="text-gray-500">Studio</span>
        </h1>

        <ul className="flex gap-8 text-sm font-medium">
          <li>
            <a href="#home" className="hover:text-gray-500">
              Home
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-gray-500">
              Projects
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-gray-500">
              About
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-gray-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;