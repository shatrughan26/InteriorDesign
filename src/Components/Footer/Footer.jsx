import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid gap-10 md:grid-cols-3">

          {/* About */}
          <div>
            <h2 className="text-2xl font-bold mb-5">
              Ctrin Interior Pvt. Ltd.
            </h2>

            <p className="text-gray-400 leading-7 text-sm">
              At <span className="font-semibold text-white">Ctrin Interior Private Limited</span>,
              we believe that great design is more than just visual appeal—
              it's about creating functional, meaningful, and inspiring
              environments. Our company brings together artistic imagination
              and technical expertise to deliver comprehensive interior design
              solutions for both residential and commercial projects.
            </p>

            <p className="mt-6 text-sm text-gray-500">
              Website operated by{" "}
              <span className="text-white font-medium">
                SONU KUMAR SHARMA
              </span>
            </p>
          </div>

          {/* Bengaluru Office */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact Us
            </h3>

            <div className="space-y-6 text-sm text-gray-400">

              <div>
                <h4 className="font-semibold text-white mb-2">
                  Bengaluru Office
                </h4>

                <p>
                  211/3, 7th C Cross Road,<br />
                  Basavanagar, Kalappa Layout,<br />
                  Bengaluru, Karnataka - 560037
                </p>

                <p className="mt-2">+91-8970375011</p>
                <p>hello@ctrininterior.com</p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">
                  Delhi Office
                </h4>

                <p>
                  K-5/32, Mohan Garden,<br />
                  Uttam Nagar,<br />
                  New Delhi - 110059
                </p>

                <p className="mt-2">+91-8970375011</p>
                <p>hello@ctrininterior.com</p>
              </div>

            </div>
          </div>

          {/* Bihar Office */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Regional Office
            </h3>

            <div className="text-sm text-gray-400">

              <h4 className="font-semibold text-white mb-2">
                Bihar Office
              </h4>

              <p>
                Begusarai,<br />
                Bihar - 848202,<br />
                India
              </p>

              <p className="mt-2">+91-8970375011</p>
              <p>hello@ctrininterior.com</p>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} Ctrin Interior Private Limited. All
            Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;