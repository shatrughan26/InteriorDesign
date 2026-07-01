import React from 'react';
import { Shield, Lock, Eye, RefreshCw, Mail, Phone, MapPin } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    { title: "1. Information We Collect", icon: <Eye className="w-5 h-5 text-amber-600" /> },
    { title: "2. How We Use Your Information", icon: <RefreshCw className="w-5 h-5 text-amber-600" /> },
    { title: "3. Data Protection and Security", icon: <Lock className="w-5 h-5 text-amber-600" /> },
  ];

  return (
    <div className="bg-slate-50 text-slate-800 font-sans antialiased py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Document Header */}
        <div className="text-center mb-12 border-b border-slate-200 pb-10">
          <div className="mx-auto w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 mb-4">
            <Shield className="w-6 h-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-slate-500 font-medium">
            CTRIN INTERIOR PVT. LTD. &bull; Last Updated: July 2026
          </p>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            At CTRIN INTERIOR PVT. LTD., we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or engage with our services.
          </p>
        </div>

        {/* Legal Clause Body Content */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-slate-600">
          
          <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-3 mb-4">
              <span className="w-1.5 h-5 bg-amber-500 rounded-full inline-block" />
              1. Information We Collect
            </h2>
            <p className="mb-3">We may collect the following information when you visit our website or contact us:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Personal details such as name, phone number, email address, and location.</li>
              <li>Project-related details shared by you for quotations or service requests.</li>
              <li>Website usage data, including your IP address, browser type, and pages visited (via cookies or analytics tools).</li>
            </ul>
          </section>

          <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-3 mb-4">
              <span className="w-1.5 h-5 bg-amber-500 rounded-full inline-block" />
              2. How We Use Your Information
            </h2>
            <p className="mb-3">Your information is used to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Provide interior design and related services.</li>
              <li>Respond to your inquiries, quotations, or consultation requests.</li>
              <li>Send updates, offers, or promotional communications (only with your consent).</li>
              <li>Improve our website performance and user experience.</li>
            </ul>
          </section>

          <section className="bg-slate-900 text-slate-300 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-lg">
            <h2 className="text-lg font-bold text-amber-400 flex items-center gap-3 mb-4">
              <Lock className="w-5 h-5 text-amber-400" />
              3. Data Protection and Security
            </h2>
            <p>
              We use appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, please note that no online transmission is 100% secure, and we cannot guarantee absolute data security.
            </p>
          </section>

          <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-3 mb-4">
              <span className="w-1.5 h-5 bg-amber-500 rounded-full inline-block" />
              4. Sharing of Information
            </h2>
            <p className="mb-2">We do not sell or rent your personal information to third parties.</p>
            <p className="mb-2">Information may be shared only with trusted partners, vendors, or contractors who assist in delivering our services — and only to the extent necessary.</p>
            <p>We may also disclose information if required by law or to protect our legal rights.</p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-base font-bold text-slate-900 mb-3">5. Cookies and Tracking</h2>
              <p className="text-sm">Our website may use cookies or analytics tools to enhance user experience and analyze traffic. You can choose to disable cookies in your browser settings, but some parts of the site may not function properly without them.</p>
            </section>
            
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-base font-bold text-slate-900 mb-3">6. Third-Party Links</h2>
              <p className="text-sm">Our website may contain links to third-party websites. CTRIN INTERIOR PVT LTD is not responsible for the privacy practices or content of these external sites.</p>
            </section>

            <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-base font-bold text-slate-900 mb-3">7. Data Retention</h2>
              <p className="text-sm">We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by law.</p>
            </section>

            <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-base font-bold text-slate-900 mb-3">8. Your Rights</h2>
              <p className="text-sm">You may request to access or update your information, withdraw marketing consent, or request deletion of your data (subject to legal or contractual obligations).</p>
            </section>
          </div>

          <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-3 mb-3">
              <span className="w-1.5 h-5 bg-amber-500 rounded-full inline-block" />
              9. Policy Updates
            </h2>
            <p>CTRIN INTERIOR PVT LTD reserves the right to update this Privacy Policy at any time. The latest version will always be available on our website.</p>
          </section>

          {/* Contact Core Support Unit */}
          <section className="bg-amber-50/50 p-6 sm:p-8 rounded-2xl border border-amber-100/70">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-3 mb-4">
              <span className="w-1.5 h-5 bg-amber-500 rounded-full inline-block" />
              10. Contact Us
            </h2>
            <p className="mb-6 text-slate-600">If you have any questions or concerns regarding this Privacy Policy, please contact us at:</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-medium">
              <div className="bg-white p-4 rounded-xl border border-slate-200/60 flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                <a href="mailto:hello@ctrininterior.com" className="text-slate-800 hover:text-amber-600 break-all">hello@ctrininterior.com</a>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/60 flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="text-slate-800 text-xs sm:text-sm">+91 8970375011</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/60 flex items-center gap-3">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="text-slate-800">CTRIN INTERIOR</span>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}