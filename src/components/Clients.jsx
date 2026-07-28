"use client";
import { Building2, Code, Cloud, Database, Shield, Cpu } from "lucide-react";

const logos = [
  { name: "Tech Mahindra", Icon: Cpu },
  { name: "Infosys", Icon: Code },
  { name: "Wipro", Icon: Cloud },
  { name: "HCL", Icon: Database },
  { name: "L&T", Icon: Building2 },
  { name: "Amazon", Icon: Cloud },
  { name: "Google", Icon: Database },
  { name: "Microsoft", Icon: Code },
  { name: "Dell", Icon: Cpu },
  { name: "IBM", Icon: Shield },
  { name: "Cognizant", Icon: Code },
  { name: "Accenture", Icon: Building2 },
  { name: "Tech Mahindra", Icon: Cpu },
  { name: "Infosys", Icon: Code },
  { name: "Wipro", Icon: Cloud },
  { name: "HCL", Icon: Database },
  { name: "L&T", Icon: Building2 },
  { name: "Amazon", Icon: Cloud },
  { name: "Google", Icon: Database },
  { name: "Microsoft", Icon: Code },
  { name: "Dell", Icon: Cpu },
  { name: "IBM", Icon: Shield },
  { name: "Cognizant", Icon: Code },
  { name: "Accenture", Icon: Building2 },
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
            {logos.map((item, i) => {
              const Icon = item.Icon;
              return (
                <div
                  key={i}
                  className="shrink-0 flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md hover:border-blue-200/60 transition-all"
                >
                  <div className="p-1.5 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-500">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold text-slate-400 whitespace-nowrap tracking-tight">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
