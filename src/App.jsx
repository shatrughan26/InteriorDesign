import React from "react";
import Navbar from "./Navbar/Navbar";

import Banner from "./Components/Banner/Banner";
import Home from "./Components/Home";
import AboutCtrin from "./Components/About";
import ContactCtrin from "./Components/Contact";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";

import PrivacyPolicy from "./Components/Privacy";
import RefundPolicy from "./Components/RefundPolicy";
import TandC from "./Components/TandC";

const App = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <section id="home" className="pt-24">
        <Banner />
      </section>

      {/* Home Content */}
      <section id="services" className="pt-24">
        <Home />
      </section>

      {/* Privacy Policy */}
      <section id="privacypolicy" className="pt-24">
        <PrivacyPolicy />
      </section>

      {/* Refund Policy */}
      <section id="refundpolicy" className="pt-24">
        <RefundPolicy />
      </section>

      {/* Terms and Conditions */}
      <section id="termCondition" className="pt-24">
        <TandC />
      </section>

      {/* About */}
      <section id="about" className="pt-24">
        <AboutCtrin />
      </section>

      {/* Contact */}
      <section id="contact" className="pt-24">
        <ContactCtrin />
      </div>
      <Footer/>
    </div>
  );
};

export default App;