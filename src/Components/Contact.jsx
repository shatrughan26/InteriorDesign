import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

export default function ContactCtrin() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential',
    message: ''
  });

  const offices = [
    {
      city: "Bengaluru, Karnataka",
      address: "211/3 7th C cross road, Basavanagar, Kalappa layout, Bengaluru, Karnataka 560037"
    },
    {
      city: "New Delhi",
      address: "K-5/32 Mohan garden, Uttam Nagar, New Delhi 110059"
    },
    {
      city: "Begusarai, Bihar",
      address: "Matihani, Begusarai, Bihar 848202"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-slate-50 text-slate-800 font-sans antialiased py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Intro */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-amber-600 uppercase bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">
            Contact Us
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let’s Bring Your Vision to Life
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Whether you’re planning to design your dream home or revamp your commercial space, our team at Ctrin Interior is here to help.
          </p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Essential Contact Details & Branches */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Rapid Direct Channels */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Direct Contact</h3>
              
              <a href="tel:+918970375011" className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Phone / WhatsApp</p>
                  <p className="text-sm font-semibold text-slate-800">+91-8970375011</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Email Support</p>
                  <a href="mailto:hello@ctrininterior.com" className="text-sm font-semibold text-slate-800 block hover:text-amber-600">hello@ctrininterior.com</a>
                  <a href="mailto:help@ctrininterior.com" className="text-sm font-semibold text-slate-800 block hover:text-amber-600">help@ctrininterior.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Business Hours</p>
                  <p className="text-sm font-semibold text-slate-800">Mon – Sat: 10:00 AM – 7:00 PM</p>
                  <p className="text-xs text-red-500 font-medium">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 px-2">Our Office Branches</h3>
              
              {offices.map((office, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex gap-4">
                  <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">{office.city}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{office.address}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Dynamic Consultation Request Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Request a Consultation</h3>
            <p className="text-sm text-slate-500 mb-6">Fill out the quick form below, and our creative team will reach out with estimates and layout concepts.</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Your Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Sonu Sharma"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-amber-600 transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-amber-600 transition-colors"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="you@example.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-amber-600 transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Project Classification</label>
                <select 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-amber-600 transition-colors text-slate-700"
                  value={formData.projectType}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                >
                  <option value="Residential">Residential Interior Design</option>
                  <option value="Commercial">Commercial & Office Interiors</option>
                  <option value="Kitchen">Modular Kitchen & Wardrobes</option>
                  <option value="Turnkey">Complete Turnkey Solution</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Project Requirements / Scope</label>
                <textarea 
                  rows="4"
                  placeholder="Tell us a little bit about your space (e.g., 3 BHK apartment layout, false ceiling needs...)"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-amber-600 transition-colors resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button 
                  type="submit" 
                  className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-xl transition-colors text-sm flex items-center justify-center gap-2 shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
                
                <a 
                  href="https://wa.me/918970375011"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-colors text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/10"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}