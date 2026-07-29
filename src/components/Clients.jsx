"use client";
import React from "react";

const logos = [
  {
    name: "Tech Mahindra",
    icon: "https://companieslogo.com/img/orig/TECHM.NS_BIG-0b6d62d5.png",
  },
  {
    name: "Infosys",
    icon: "https://cdn.simpleicons.org/infosys",
  },
  {
    name: "Wipro",
    icon: "https://cdn.simpleicons.org/wipro",
  },
  {
    name: "HCL Technologies",
    icon: "https://companieslogo.com/img/orig/HCLTECH.NS_BIG-4e0e55d4.png",
  },
  {
    name: "Larsen & Toubro",
    icon: "https://companieslogo.com/img/orig/LT.NS_BIG-9d55f82b.png",
  },
  {
    name: "Amazon",
    icon: "https://cdn.simpleicons.org/amazon",
  },
  {
    name: "Google",
    icon: "https://cdn.simpleicons.org/google",
  },
  {
    name: "Microsoft",
    icon: "https://cdn.simpleicons.org/microsoft",
  },
  {
    name: "Dell",
    icon: "https://cdn.simpleicons.org/dell",
  },
  {
    name: "IBM",
    icon: "https://cdn.simpleicons.org/ibm",
  },
  {
    name: "Cognizant",
    icon: "https://companieslogo.com/img/orig/CTSH_BIG-1a7d0a6f.png",
  },
  {
    name: "Accenture",
    icon: "https://cdn.simpleicons.org/accenture",
  },
];

export default function Clients() {
  return (
    <section className="py-10 sm:py-14 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-50 border border-blue-200 text-blue-700">
            Trusted by 200+ Valued Partners Around India
          </span>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <div className="flex gap-12 sm:gap-16 items-center animate-marquee-right py-2">
            {logos.map((item, i) => (
              <div
                key={i}
                className="shrink-0 flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md hover:border-blue-200/60 transition-all"
              >
                <div className="p-1.5 rounded-lg bg-slate-50 flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <span className="text-sm font-bold text-slate-700 whitespace-nowrap tracking-tight">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}