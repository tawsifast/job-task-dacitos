"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Data matching the pie chart in the screenshot
const distributionData = [
  { name: "Residential Communities", value: 33, color: "#2563EB" }, // Blue
  { name: "Commercial & IT Parks", value: 25, color: "#EA580C" }, // Orange
  { name: "Corporate Office", value: 12, color: "#EAB308" }, // Yellow
  { name: "Educational Institutions", value: 8, color: "#16A34A" }, // Green
  { name: "Malls, Multiplex & Retail", value: 8, color: "#9333EA" }, // Purple
  { name: "Manufacturing Units", value: 9, color: "#06B6D4" }, // Cyan
  { name: "Others", value: 5, color: "#EC4899" }, // Pink
];

// Top Featured Client Logos
const featuredLogos = [
  { name: "JLL", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/JLL_logo.svg/512px-JLL_logo.svg.png" },
  { name: "Mahindra Lifespaces", url: "https://cdn-icons-png.flaticon.com/512/2422/2422601.png" },
  { name: "CBRE", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/CBRE_Group_logo.svg/512px-CBRE_Group_logo.svg.png" },
  { name: "Kalpataru", url: "https://cdn-icons-png.flaticon.com/512/619/619032.png" },
  { name: "Tech Mahindra", url: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png" },
];

export default function ClientDistribution() {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Info Breakdown + Pie Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context / Breakdown details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-blue-600 text-xs font-extrabold uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                Market Presence
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mt-3">
                Portfolio Distribution
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2">
                Our operations span across multiple high-impact real estate sectors, with strong dominance in prime residential communities and corporate IT ecosystems.
              </p>
            </div>

            {/* Quick Breakdown Legend Cards */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {distributionData.map((item) => (
                <div
                  key={item.name}
                  className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 flex items-center gap-3"
                >
                  <span
                    className="w-3.5 h-3.5 rounded-full shrink-0 shadow-sm"
                    style={{ backgroundColor: item.color }}
                  />
                  <div>
                    <span className="block text-xs font-bold text-slate-800 line-clamp-1">
                      {item.name}
                    </span>
                    <span className="text-xs font-extrabold text-blue-600">
                      {item.value}% Share
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Recharts Pie Chart */}
          <div className="lg:col-span-7 bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col items-center justify-center">
            <h3 className="text-center text-sm font-bold text-slate-700 tracking-wide uppercase mb-4">
              Sector Share Breakdown
            </h3>
            
            <div className="w-full h-[320px] sm:h-[380px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={distributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={120}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {distributionData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        className="hover:opacity-80 transition-opacity cursor-pointer outline-none"
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => [`${value}%`, "Market Share"]}
                    contentStyle={{
                      backgroundColor: "#0F172A",
                      borderRadius: "12px",
                      color: "#FFFFFF",
                      border: "none",
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                      fontSize: "12px",
                    }}
                  />
                  <Legend
                    layout="horizontal"
                    verticalAlign="bottom"
                    align="center"
                    wrapperStyle={{ paddingTop: "20px", fontSize: "12px" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Trusted Partners Marquee / Logo Strip */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-200/80 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
            Trusted by 100+ valued partners across India
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 hover:opacity-100 transition-opacity">
            {featuredLogos.map((logo, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="h-10 sm:h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="max-h-full max-w-[120px] object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}