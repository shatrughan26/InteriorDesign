import React from "react";
import {
  FileText,
  Gavel,
  DollarSign,
  PenTool,
  Calendar,
  ShieldCheck,
  Camera,
  HelpCircle,
  Mail,
  Phone,
} from "lucide-react";

export default function TandC() {
  return (
    <div className=" text-slate-800 font-sans antialiased py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Document Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 sm:p-10 mb-8">
          <div className="text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 mb-4">
              <FileText className="w-6 h-6" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Terms &amp; Conditions
            </h1>

            <p className="mt-2 text-sm text-slate-500 font-medium">
              CTRIN INTERIOR PVT. LTD. &bull; Effective Year: 2026
            </p>

            <p className="mt-6 text-slate-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
              Welcome to CTRIN INTERIOR PVT. LTD. By choosing to navigate this
              website or formally engaging our physical interior design, turnkey
              engineering, and architectural renovation frameworks, you are
              establishing a binding agreement to comply with and be bound by
              the following comprehensive operational rules.
            </p>
          </div>
        </div>

        {/* Primary Terms Accordion/List Layout */}
        <div className="space-y-6">
          {/* 1. Services */}
          <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-3 mb-3">
              <span className="w-1.5 h-5 bg-amber-500 rounded-full inline-block" />
              1. Scope of Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              CTRIN INTERIOR PVT. LTD. provides comprehensive end-to-end
              interior design layouting, space visualization, structural
              renovation, and custom millwork procurement frameworks as formally
              mapped out within our commercial project proposals. No physical
              mobilization, procurement, or structural modifications will begin
              without signed document approvals and the clearing of initial
              contract mobilization advances.
            </p>
          </section>

          {/* 2. Payments */}
          <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-3 mb-3">
              <DollarSign className="w-5 h-5 text-amber-600 shrink-0" />
              2. Commercial Milestone Payments
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
              All financial transactions must be systematically executed
              according to the custom project milestone ledger detailed in your
              primary service contract.
            </p>
            <div className="p-4 bg-amber-50/40 border border-amber-100 rounded-xl text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong className="text-amber-900 font-semibold">
                Important Notice:
              </strong>{" "}
              Unresolved balance delays or milestone deferrals automatically
              pause operational and processing schedules. All baseline creative
              consultation and technical site layout setup fees instantly switch
              to non-refundable statuses the moment layouting cycles launch.
            </div>
          </section>

          {/* 3. Design Ownership */}
          <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-3 mb-3">
              <PenTool className="w-5 h-5 text-amber-600 shrink-0" />
              3. Intellectual Property &amp; Design Ownership
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              All technical blue-line drafts, CAD floorplans, structural
              engineering schematics, custom 3D spatial renders, and creative
              styling boards produced remain the exclusive asset and
              intellectual property of CTRIN INTERIOR PVT. LTD. Title and rights
              pass onto the client only upon receipt of full final contract
              clearing. Unauthorized sharing, public digital exhibition, or
              reproduction of these blueprints without express written consent
              is strictly prohibited.
            </p>
          </section>

          {/* 4. Timelines & Delays */}
          <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-3 mb-3">
              <Calendar className="w-5 h-5 text-amber-600 shrink-0" />
              4. Estimated Project Timelines &amp; Dependencies
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Project initialization and wrap target windows represent carefully
              structured milestones but remain flexible estimates. CTRIN
              INTERIOR PVT. LTD. bears no financial liability for pipeline
              timeline drift triggered by raw material supply chain backlogs,
              manufacturer hardware disruptions, client design revisions,
              structural site access limits, or unpredictable force majeure
              environmental conditions.
            </p>
          </section>

          {/* 5. Materials & Warranty */}
          <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-3 mb-3">
              <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" />
              5. Raw Material Profiles &amp; Warranties
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              All bespoke structural elements and functional materials installed
              feature warranties passing through directly from primary hardware,
              laminate, or appliance manufacturers. Incidental or structural
              degradation resulting from localized site misuse, lack of
              maintenance, structural water seepage, or unapproved third-party
              site handling post-handover stands completely excluded from our
              coverage framework.
            </p>
          </section>

          {/* 6 & 7 Split Informational Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-amber-500 rounded-full inline-block" />
                6. Cancellations &amp; Refunds
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Project terminations follow the company’s dedicated Refund &amp;
                Cancellation Policy. Any potential account credits or
                out-of-pocket settlements will be processed exclusively after
                accounting for custom material millwork production runs and
                corporate administrative costs.
              </p>
            </section>

            <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Camera className="w-4 h-4 text-amber-600" />
                7. Media &amp; Project Photography
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                CTRIN INTERIOR PVT. LTD. reserves the right to capture
                high-definition photographs and video walk-throughs of
                transformed sites to deploy across professional portfolios,
                social platforms, and media campaigns. Clients can withdraw this
                media privilege at anytime by issuing an official request in
                writing.
              </p>
            </section>
          </div>

          {/* 8. Governing Law - Bold Corporate Alert */}
          <section className="bg-slate-900 text-slate-300 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl flex gap-4 items-start">
            <Gavel className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h2 className="text-base font-bold text-amber-400 mb-2">
                8. Governing Law &amp; Jurisdiction
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                These transactional guidelines, corporate operations, and active
                delivery pipelines are executed and governed strictly under the
                legal frameworks of the Republic of India. Any unresolved
                contractual disagreements or legal mediation tracks fall
                explicitly under the exclusive jurisdiction of the regional
                courts of India.
              </p>
            </div>
          </section>

          {/* Core Support Frame */}
          <section className="bg-amber-50/50 p-6 sm:p-8 rounded-2xl border border-amber-100/70">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-2">
              <HelpCircle className="w-4 h-4 text-amber-600" />
              Need Clarification on Our Terms?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-4">
              If you have any questions or require an addendum regarding
              specific milestones, design protections, or installation clauses,
              please sync up with our compliance office team:
            </p>
            <div className="flex flex-wrap gap-4 text-xs sm:text-sm font-medium">
              <a
                href="mailto:hello@ctrininterior.com"
                className="bg-white px-4 py-2.5 rounded-xl border border-slate-200/60 flex items-center gap-2 text-slate-800 hover:text-amber-600"
              >
                <Mail className="w-4 h-4 text-amber-600" />
                <span>hello@ctrininterior.com</span>
              </a>
              <div className="bg-white px-4 py-2.5 rounded-xl border border-slate-200/60 flex items-center gap-2 text-slate-800">
                <Phone className="w-4 h-4 text-amber-600" />
                <span>+91-8970375011</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
