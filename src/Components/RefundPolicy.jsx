import React from "react";
import {
  ShieldCheck,
  Receipt,
  Truck,
  AlertCircle,
  Mail,
  Phone,
  Building,
} from "lucide-react";

export default function RefundPolicy() {
  const customFabricationItems = [
    {
      title: "Tailored Production Run",
      desc: "Furniture systems, bespoke modular kitchens, accent wardrobes, or tailored decor components cannot be refunded once factory production cycles run.",
    },
    {
      title: "Defect Restorations",
      desc: "In the rare event a product arrives with verifiable damage, immediate replacement, structural restoration, or repair will be covered under warranty parameters.",
    },
  ];

  return (
    <div className=" text-slate-800 font-sans antialiased py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Document Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 sm:p-10 mb-8">
          <div className="text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 mb-4">
              <Receipt className="w-6 h-6" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Refund &amp; Cancellation Policy
            </h1>

            <p className="mt-2 text-sm text-slate-500 font-medium">
              CTRIN INTERIOR PVT. LTD. &bull; Effective Year: 2026
            </p>

            <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              At CTRIN INTERIOR PVT. LTD., we value our clients and strive to
              deliver high-quality design and execution services that meet your
              precise expectations. This Refund Policy outlines the clear
              parameters under which refunds may be evaluated for our interior
              design framework.
            </p>
          </div>
        </div>

        {/* Policy Detail Sections */}
        <div className="space-y-6">
          {/* 1. Consultation and Design Fees */}
          <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-3 mb-4">
              <span className="w-1.5 h-5 bg-amber-500 rounded-full inline-block" />
              1. Consultation and Design Fees
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-3">
              All consultation, space design blueprinting, and initial concept
              development fees are **non-refundable** once the execution cycle
              has been initiated or visual design concepts have been formally
              shared.
            </p>
            <div className="p-4 bg-amber-50/50 border border-amber-100 rounded-xl text-xs sm:text-sm text-amber-900">
              <strong>Pre-commencement Cancelation:</strong> If a project
              agreement is canceled before the custom layout rendering process
              begins, a partial refund of **up to 50%** may be considered,
              following the deduction of essential administrative processing and
              project booking fees.
            </div>
          </section>

          {/* 2. Project Advance and Execution Payments */}
          <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-3 mb-4">
              <span className="w-1.5 h-5 bg-amber-500 rounded-full inline-block" />
              2. Project Advance and Execution Payments
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-3">
              Any downstream advance capital payments processed toward active
              execution schedules (raw materials sourcing, custom craftsmanship
              labor allocations, or on-site layout works) become strictly
              **non-refundable** the moment material procurement or physical
              site activities begin.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              If an ongoing contract is terminated prior to the actual
              mobilization of on-site structural teams, CTRIN INTERIOR PVT. LTD.
              will withhold basic planning and structural administrative costs
              **(10% to 20%)** and release the remaining unallocated cash
              balance, where applicable.
            </p>
          </section>

          {/* 3. Product Orders and Custom Fabrication */}
          <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-3 mb-4">
              <span className="w-1.5 h-5 bg-amber-500 rounded-full inline-block" />
              3. Product Orders and Custom Fabrication
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
              Because modular assets are engineered to order, individual
              custom-fabricated components are completely excluded from general
              standard refunds or returns tracking:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {customFabricationItems.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-slate-100 bg-slate-50 p-4 rounded-xl"
                >
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 4 & 5. Delays & Disputes Split Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-600" />
                4. Delay or Non-Delivery
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                If CTRIN INTERIOR PVT. LTD. fails to initialize foundational
                site works or deliver major milestones outlined in timelines
                without a contractually valid external cause, a full refund
                representing all unutilized project funds will be systematically
                released to the user.
              </p>
            </section>

            <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                5. Payment Disputes
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Any payment discrepancies or specific project cancellation
                requests must be logged through formal communication channels
                within **7 working days**. Once officially cleared and approved,
                credits arrive via the original transaction channel within **15
                to 30 business days**.
              </p>
            </section>
          </div>

          {/* 6. Strict Change of Mind Warning Banner */}
          <section className="bg-slate-900 text-slate-300 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-md flex gap-4 items-start">
            <AlertCircle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h2 className="text-base font-bold text-amber-400 mb-2">
                6. No Refunds For Change of Mind
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                Refund considerations are not applicable for generic shifts in
                personal preference, standard design style modifications
                requested after initial 3D approval stages, or timelines
                stretched by client-controlled raw decision delays, structural
                approvals, or fundamental site unreadiness.
              </p>
            </div>
          </section>

          {/* 7. Footer Contact Unit */}
          <section className="bg-amber-50/40 p-6 sm:p-8 rounded-2xl border border-amber-100/60">
            <h2 className="text-base font-bold text-slate-900 mb-2">
              7. Refund Request Registration
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              For financial clearings, ongoing ledger balance reviews, or custom
              project cancellation audits, please contact our support center
              desk directly:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm font-medium">
              <div className="bg-white p-4 rounded-xl border border-slate-200/60 flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                <a
                  href="mailto:hello@ctrininterior.com"
                  className="text-slate-800 hover:text-amber-600 break-all text-xs sm:text-sm"
                >
                  hello@ctrininterior.com
                </a>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/60 flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="text-slate-800 tracking-tight text-xs sm:text-sm whitespace-nowrap">
                  +91-8970375011
                </span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/60 flex items-center gap-3">
                <Building className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="text-slate-800 uppercase font-bold tracking-tight text-xs sm:text-sm">
                  CTRIN INTERIOR
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
