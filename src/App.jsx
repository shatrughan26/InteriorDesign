import React from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";

import Banner from "./Components/Banner/Banner";
import AboutCtrin from "./Components/About";
import ContactCtrin from "./Components/Contact";
import Footer from "./Components/Footer/Footer";

import PrivacyPolicy from "./Components/Privacy";
import RefundPolicy from "./Components/RefundPolicy";
import TandC from "./Components/TandC";
import { Route } from "lucide-react";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Animated Waves */}
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <section id="home" className="pt-24">
        <Banner />
      </section>

      {/* Privacy Policy */}
      <section id="privacypolicy" className="pt-5">
        <PrivacyPolicy />
      </section>

      {/* Refund Policy */}
      <section id="refundpolicy" className="pt-5">
        <RefundPolicy />
      </section>

      {/* Terms and Conditions */}
      <section id="termCondition" className="pt-5">
        <TandC />
      </section>

      {/* About */}
      <section id="about" className="pt-5">
        <AboutCtrin />
      </section>

      {/* Contact */}
      <section id="contact" className="pt-5">
        <ContactCtrin />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;