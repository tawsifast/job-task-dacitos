"use client";
import React, { useState } from "react";
import {
  Users,
  Award,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  FileText,
  GraduationCap,
  Sparkles,
  Search,
  Wrench,
  Sparkle,
  ArrowRight,
  ClipboardCheck,
  Building2,
  PhoneCall,
  UserCheck,
  Zap,
} from "lucide-react";

// 1. MANPOWER SOURCING DATA
const sourcingRegions = [
  { region: "Telangana & Andhra Pradesh", hub: "Primary Regional Hubs", detail: "Core sourcing channels for corporate & residential facilities." },
  { region: "Karnataka & Tamil Nadu", hub: "South Zone Operations", detail: "Focused technical and MEP manpower sourcing." },
  { region: "UP, Bihar & Jharkhand", hub: "North Zone Workforce", detail: "High-volume skilled & semi-skilled manpower recruitment." },
  { region: "North East & Odisha", hub: "East Zone Operations", detail: "Specialized hospitality and soft services workforce." },
  { region: "District Employment Exchanges", hub: "Government Job Melas", detail: "Direct recruitment in collaboration with state employment boards." },
  { region: "Internal Employee Referrals", hub: "Verified Referral System", detail: "Peer-vetted workforce with proven background checks." },
];

// 2. TRAINING MODULES (SECURITY, MEP, SOFT SERVICES)
const trainingModules = [
  {
    category: "Security Operations",
    icon: ShieldCheck,
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    iconBg: "bg-blue-100 text-blue-600",
    items: [
      "Post & Site Instructions (Know Your Property)",
      "Gate House & Access Control Operations",
      "Perimeter Patrolling & Peripheral Protection",
      "Incident Management & Quick Response Protocols",
      "Visitors, Vendors & Material Movement Control",
      "Command Control Centre & CCTV Monitoring",
      "Fire & Safety, Emergency Evacuation Drills",
      "Traffic, Parking & Key Management Systems",
      "Workplace Safety & Hazard Identification",
    ],
  },
  {
    category: "MEP & Engineering",
    icon: Wrench,
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    iconBg: "bg-emerald-100 text-emerald-600",
    items: [
      "HT/LT Electrical Panel & Transformer Operation",
      "HVAC, Chiller Plant & AHU Maintenance SOPs",
      "DG Set, UPS & Power Backup System Management",
      "STP, WTP & Water Treatment Plant Operations",
      "Preventive & Corrective Maintenance Workflows",
      "Risk Assessment of Equipment & Safety Compliance",
      "Energy & Power Saving Method Implementation",
      "AMC Tracking, Vendor Management & Negotiations",
      "EHS (Environment, Health & Safety) Protocols",
    ],
  },
  {
    category: "Soft Services & Grooming",
    icon: Sparkle,
    badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
    iconBg: "bg-purple-100 text-purple-600",
    items: [
      "Professional Grooming & Personal Hygiene Standards",
      "Workplace Etiquette, Communication & Discipline",
      "Site-Specific Do's & Don'ts for Soft Services",
      "Deep Cleaning Equipment Operation & Chemical Handling",
      "Waste Management & Eco-Friendly Disposal SOPs",
      "Pest Control & Sanitization Safety Standards",
      "Helpdesk Operations & Customer Care Handling",
      "Workplace Safety & Ergonomics Awareness",
      "Daily Checklists & SLA Compliance Tracking",
    ],
  },
];

// 3. AUDIT CAPABILITIES
const auditList = [
  { title: "Security Audit", desc: "Perimeter, access control & guard force vigilance." },
  { title: "Engineering Audit", desc: "MEP equipment health & preventive maintenance check." },
  { title: "Soft Services Audit", desc: "Hygiene standards, SLA compliance & material usage." },
  { title: "EHS Audit", desc: "Environmental, health & occupational safety compliance." },
  { title: "Safety Audit", desc: "Fire safety equipment, emergency exits & hazard checks." },
  { title: "Risk Audit", desc: "Infrastructure risk identification & mitigation strategies." },
  { title: "Inventory Audit", desc: "Consumables, machinery & spare parts stock tracking." },
  { title: "Process Audit", desc: "Standard Operating Procedure (SOP) adherence check." },
  { title: "AMC Tracking & Negotiations", desc: "Vendor SLA audit & contract cost optimization." },
  { title: "Energy & Sustainability Audit", desc: "Power consumption analysis & savings plan." },
  { title: "Statutory Compliance Audit", desc: "Labor law, EPF, ESI & statutory requirement check." },
  { title: "Revenue Generation Audit", desc: "Space utilization & facility monetization strategies." },
];

// 4. 3-STAGE DEPLOYMENT PROCESS
const deploymentStages = [
  {
    stage: "STAGE 01",
    title: "Discovery & Proposal",
    desc: "Understanding requirements, surveying property, and defining operational blueprints.",
    steps: [
      "Getting connected with the client leadership",
      "Deep understanding of client requirements & SLAs",
      "Detailed site survey & studying existing processes",
      "Submission of service proposal & commercial offer",
    ],
    icon: Search,
  },
  {
    stage: "STAGE 02",
    title: "Mobilization & SOP Setup",
    desc: "Resource allocation, site-specific SOP preparation, and legal onboarding.",
    steps: [
      "Contract confirmation & service agreement sign-off",
      "Targeted resource planning, recruitment & screening",
      "Preparation of site-specific SOPs & checklists",
      "NSDC-aligned module training for selected staff",
    ],
    icon: FileText,
  },
  {
    stage: "STAGE 03",
    title: "Transition & Operations",
    desc: "Seamless takeover from previous vendor and active operations management.",
    steps: [
      "Deployment of specialized Transition Startup Team",
      "Parallel deployment, induction & smooth takeover",
      "Supervision & coordination by Field Operations staff",
      "Continuous process reviews, audits & client feedback",
    ],
    icon: UserCheck,
  },
];

export default function RecruitmentSection() {
  const [activeTab, setActiveTab] = useState("sourcing");

  return (
    <section className="py-16 sm:py-24 bg-slate-50 text-slate-800 relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-50/80 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 mb-4 border border-blue-200 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Amaze Property Management Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Recruitment, Training & Operational Framework
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Backing 15,000+ professionals across India through multi-state sourcing networks, NSDC-affiliated training programs, and rigorous 12-point facility audits.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/80 border border-slate-300/60 shadow-inner flex-wrap justify-center gap-1">
            <button
              onClick={() => setActiveTab("sourcing")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "sourcing"
                  ? "bg-white text-blue-700 shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Users className="w-4 h-4" />
              Pan-India Sourcing
            </button>
            <button
              onClick={() => setActiveTab("training")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "training"
                  ? "bg-white text-blue-700 shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              NSDC Modules
            </button>
            <button
              onClick={() => setActiveTab("audits")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "audits"
                  ? "bg-white text-blue-700 shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <ClipboardCheck className="w-4 h-4" />
              Quality Audits
            </button>
            <button
              onClick={() => setActiveTab("process")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "process"
                  ? "bg-white text-blue-700 shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Zap className="w-4 h-4" />
              3-Stage Deployment
            </button>
          </div>
        </div>

        {/* TAB 1: MANPOWER SOURCING */}
        {activeTab === "sourcing" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Regional Recruitment & Talent Sourcing
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Structured manpower pipeline across primary hubs in India.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {sourcingRegions.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-slate-50/80 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all flex items-start gap-3.5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">
                        {item.region}
                      </h4>
                      <span className="inline-block px-2 py-0.5 text-[11px] font-semibold bg-blue-100 text-blue-700 rounded-md my-1">
                        {item.hub}
                      </span>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: NSDC TRAINING & DOMAIN MODULES */}
        {activeTab === "training" && (
          <div className="space-y-8 animate-fadeIn">
            {/* NSDC Recognition Banner */}
            <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold">
                  <Award className="w-4 h-4 text-amber-400" />
                  Govt. Accredited Training Infrastructure
                </div>
                <h3 className="text-2xl font-bold">
                  Affiliated with National Skill Development Corporation (NSDC)
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                  Equipped with corporate headquarter and branch training facilities managed by certified master trainers. 100% of manpower is deployed strictly after screening and module certification.
                </p>
              </div>
              <div className="shrink-0 bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/15 text-center min-w-[200px]">
                <span className="text-3xl font-black text-amber-400">100%</span>
                <p className="text-xs text-slate-200 font-medium mt-1">Screened & Certified Workforce</p>
              </div>
            </div>

            {/* Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {trainingModules.map((module, idx) => {
                const Icon = module.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-3 rounded-xl ${module.iconBg}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-bold text-slate-900">
                          {module.category}
                        </h4>
                      </div>
                      <ul className="space-y-2.5">
                        {module.items.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: 12-POINT AUDIT CAPABILITIES */}
        {activeTab === "audits" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  <ClipboardCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Comprehensive Quality & Performance Audits
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Regular internal audits conducted to maintain operational standards, compliance, and cost savings.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {auditList.map((audit, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/20 transition-all"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                      <h4 className="text-sm font-bold text-slate-900">{audit.title}</h4>
                    </div>
                    <p className="text-xs text-slate-500 leading-normal pl-4">
                      {audit.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: 3-STAGE DEPLOYMENT ROADMAP */}
        {activeTab === "process" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            {deploymentStages.map((stage, idx) => {
              const StageIcon = stage.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                        {stage.stage}
                      </span>
                      <div className="p-2.5 bg-slate-50 text-slate-700 rounded-xl">
                        <StageIcon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                      {stage.desc}
                    </p>
                    <ul className="space-y-3">
                      {stage.steps.map((step, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Contact Footer Banner */}
        <div className="mt-14 bg-blue-600 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h4 className="text-lg font-bold">Looking for tailored facility workforce deployment?</h4>
            <p className="text-blue-100 text-xs sm:text-sm mt-1">Connect with our recruitment operations team today.</p>
          </div>
          <a
            href="mailto:careers@amazepms.com"
            className="shrink-0 bg-white text-blue-700 hover:bg-blue-50 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            Contact Recruitment Team
          </a>
        </div>

      </div>
    </section>
  );
}