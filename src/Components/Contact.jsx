import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactCtrin() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Residential",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success

  const offices = [
    {
      city: "Bengaluru, Karnataka",
      address:
        "211/3 7th C cross road, Basavanagar, Kalappa layout, Bengaluru, Karnataka 560037",
    },
    {
      city: "New Delhi",
      address: "K-5/32 Mohan garden, Uttam Nagar, New Delhi 110059",
    },
    { city: "Begusarai, Bihar", address: "Matihani, Begusarai, Bihar 848202" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    // Replace with your real submission call (API, email service, etc.)
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setStatus("success");
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "Residential",
      message: "",
    });
    setStatus("idle");
  };

  return (
    <div className="relative text-[#0A1F3D] font-sans antialiased py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#C9A227]/8 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header Intro */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 sm:p-10 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#C9A227] uppercase">
              <span className="h-px w-6 bg-[#C9A227]" />
              Contact Us
              <span className="h-px w-6 bg-[#C9A227]" />
            </span>

            <h2 className="mt-5 font-serif text-3xl sm:text-4xl font-semibold text-[#0A1F3D] tracking-tight">
              Let's Bring Your Vision to Life
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#4A5568] leading-relaxed">
              Whether you're planning to design your dream home or revamp your
              commercial space, our team at Ctrin Interior is here to help.
            </p>
          </div>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Essential Contact Details & Branches */}
          <div className="lg:col-span-5 space-y-8">
            {/* Rapid Direct Channels */}
            <div className="bg-white p-6 rounded-2xl border border-[#0A1F3D]/8 shadow-[0_20px_50px_-20px_rgba(10,31,61,0.12)] space-y-2">
              <h3 className="font-serif text-lg font-semibold text-[#0A1F3D] mb-3">
                Direct contact
              </h3>

              <a
                href="tel:+918970375011"
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#FAF9F6] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] group-hover:bg-[#C9A227] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-[#7C879C] font-medium">
                    Phone / WhatsApp
                  </p>
                  <p className="text-sm font-semibold text-[#0A1F3D]">
                    +91-8970375011
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-[#FAF9F6] transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] mt-1">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-[#7C879C] font-medium">
                    Email support
                  </p>
                  <a
                    href="mailto:hello@ctrininterior.com"
                    className="text-sm font-semibold text-[#0A1F3D] block hover:text-[#C9A227] transition-colors"
                  >
                    hello@ctrininterior.com
                  </a>
                  <a
                    href="mailto:help@ctrininterior.com"
                    className="text-sm font-semibold text-[#0A1F3D] block hover:text-[#C9A227] transition-colors"
                  >
                    help@ctrininterior.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-[#0A1F3D]/5 flex items-center justify-center text-[#0A1F3D]">
                  <Clock className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-[#7C879C] font-medium">
                    Business hours
                  </p>
                  <p className="text-sm font-semibold text-[#0A1F3D]">
                    Mon – Sat: 10:00 AM – 7:00 PM
                  </p>
                  <p className="text-xs text-[#B23B3B] font-medium">
                    Sunday: closed
                  </p>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-semibold text-[#0A1F3D] px-2">
                Our office branches
              </h3>

              {offices.map((office, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-2xl border border-[#0A1F3D]/8 shadow-[0_20px_50px_-20px_rgba(10,31,61,0.1)] flex gap-4"
                >
                  <MapPin
                    className="w-5 h-5 text-[#C9A227] shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-[#0A1F3D] mb-1">
                      {office.city}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                      {office.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Consultation Request Form */}
          <div className="lg:col-span-7 relative bg-[#0A1F3D] p-8 rounded-2xl border border-[#C9A227]/15 overflow-hidden">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, #C9A227 0px, #C9A227 1px, transparent 1px, transparent 40px)",
              }}
            />

            {status === "success" ? (
              <div className="relative flex flex-col items-center justify-center text-center py-16">
                <div className="h-14 w-14 rounded-full bg-[#C9A227]/10 flex items-center justify-center mb-5">
                  <CheckCircle2
                    className="w-7 h-7 text-[#C9A227]"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-white mb-2">
                  Request received
                </h3>
                <p className="text-[#A9B2C3] text-sm max-w-sm">
                  Thank you, {formData.name.split(" ")[0] || "there"}. Our
                  design team will reach out within one business day with
                  estimates and layout concepts.
                </p>
                <button
                  onClick={resetForm}
                  className="mt-6 text-sm font-semibold text-[#C9A227] hover:text-white transition-colors underline underline-offset-4"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <h3 className="relative font-serif text-xl font-semibold text-white mb-2">
                  Request a consultation
                </h3>
                <p className="relative text-sm text-[#A9B2C3] mb-6">
                  Fill out the quick form below, and our creative team will
                  reach out with estimates and layout concepts.
                </p>

                <form onSubmit={handleSubmit} className="relative space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#C9A227] uppercase tracking-wider mb-2">
                        Your name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Sonu Sharma"
                        className="w-full bg-white/5 border border-white/15 rounded-lg p-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#C9A227] transition-colors"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#C9A227] uppercase tracking-wider mb-2">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-white/5 border border-white/15 rounded-lg p-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#C9A227] transition-colors"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#C9A227] uppercase tracking-wider mb-2">
                      Email address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full bg-white/5 border border-white/15 rounded-lg p-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#C9A227] transition-colors"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#C9A227] uppercase tracking-wider mb-2">
                      Project classification
                    </label>
                    <select
                      className="w-full bg-[#0A1F3D] border border-white/15 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-[#C9A227] transition-colors"
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          projectType: e.target.value,
                        })
                      }
                    >
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Turnkey Interior">Turnkey Interior</option>
                    </select>
                  </div>

                  {/* Added missing Textarea field */}
                  <div>
                    <label className="block text-xs font-semibold text-[#C9A227] uppercase tracking-wider mb-2">
                      Message Details
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your space requirements..."
                      className="w-full bg-white/5 border border-white/15 rounded-lg p-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#C9A227] transition-colors resize-none"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  {/* Added missing Action Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full mt-2 bg-[#C9A227] hover:bg-[#b59020] text-[#0A1F3D] font-semibold text-sm py-4 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <span>Sending request...</span>
                    ) : (
                      <>
                        <span>Send Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
