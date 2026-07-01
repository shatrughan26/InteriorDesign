import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Components/Home";
import AboutCtrin from "./Components/About";
import ContactCtrin from "./Components/Contact";
import Banner from "./Components/Banner/Banner";

const App = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Global Floating Navigation Bar */}
      <Navbar />
      <Navbar />

      <div id="home" className="pt-24">
        <Banner />
        <Home />
      </div>

      {/* Main Structural Content Sections */}
      <div id="home" className="pt-24">
        <Home />
      </div>

      <div id="about">
        <AboutCtrin />
      </div>

      <div id="contact">
        <ContactCtrin />
      </div>
    </div>
  );
};

export default App;
