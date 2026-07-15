import React from "react";

const OfficeBlock = ({ title, lines, phone, email }) => (
  <div>
    <h4 className="flex items-center gap-2 font-semibold text-white mb-3 text-sm uppercase tracking-wider">
      <span className="h-1.5 w-1.5 rounded-full bg-[#C9A227]" />
      {title}
    </h4>

    <p className="text-[#A9B2C3] leading-6">
      {lines.map((line, i) => (
        <React.Fragment key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </p>

    <a href={`tel:${phone.replace(/[^+\d]/g, "")}`} className="mt-3 flex items-center gap-2 text-[#A9B2C3] hover:text-[#C9A227] transition-colors w-fit">
      <svg className="h-3.5 w-3.5 text-[#C9A227]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      {phone}
    </a>

    <a href={`mailto:${email}`} className="mt-1.5 flex items-center gap-2 text-[#A9B2C3] hover:text-[#C9A227] transition-colors w-fit">
      <svg className="h-3.5 w-3.5 text-[#C9A227]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      {email}
    </a>
  </div>
);

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A227]/60 to-transparent" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #C9A227 0px, #C9A227 1px, transparent 1px, transparent 40px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3 text-sm">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="uppercase tracking-[0.25em] text-xs text-[#C9A227] font-semibold">
                Ctrin Interior
              </span>
            </div>

            <h2 className="font-serif text-2xl font-semibold mb-4 text-white">
              Ctrin Interior Pvt. Ltd.
            </h2>

            <p className="text-[#A9B2C3] leading-7">
              At <span className="font-semibold text-white">Ctrin Interior Private Limited</span>,
              we believe that great design is more than just visual appeal —
              it's about creating functional, meaningful, and inspiring
              environments. Our company brings together artistic imagination
              and technical expertise to deliver comprehensive interior
              design solutions for both residential and commercial projects.
            </p>

            <p className="mt-6 text-[#7C879C] text-xs">
              Website operated by{" "}
              <span className="text-[#C9A227] font-medium">
                Sonu Kumar Sharma
              </span>
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-white">
              Contact us
            </h3>

            <div className="space-y-8">
              <OfficeBlock
                title="Bengaluru office"
                lines={[
                  "211/3, 7th C Cross Road,",
                  "Basavanagar, Kalappa Layout,",
                  "Bengaluru, Karnataka - 560037",
                ]}
                phone="+91-8970375011"
                email="hello@ctrininterior.com"
              />

              <OfficeBlock
                title="Delhi office"
                lines={[
                  "K-5/32, Mohan Garden,",
                  "Uttam Nagar,",
                  "New Delhi - 110059",
                ]}
                phone="+91-8970375011"
                email="hello@ctrininterior.com"
              />
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-white">
              Regional office
            </h3>

            <OfficeBlock
              title="Bihar office"
              lines={["Begusarai,", "Bihar - 848202,", "India"]}
              phone="+91-8970375011"
              email="hello@ctrininterior.com"
            />
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-[#7C879C]">
          <p>
            © {new Date().getFullYear()} Ctrin Interior Private Limited. All
            rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[#C9A227]" />
            <span>Crafted with elegance, built to last.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;