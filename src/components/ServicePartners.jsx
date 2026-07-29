"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  {
    id: "amaze-pms",
    badge: "MEP Services",
    title: "Amaze Property Management Solutions Pvt Ltd",
    description:
      "PMS Services, Housekeeping, MEP, Gardening, Pest Control Services",
    logo: "https://cdn-icons-png.flaticon.com/512/1960/1960020.png",
  },
  {
    id: "action-force",
    badge: "Security Services",
    title: "Action & Protection Security Force",
    description:
      "Security Services, Fire Training, Escort Services, Event Security, Help Desk Services",
    logo: "https://cdn-icons-png.flaticon.com/512/1067/1067555.png",
  },
  {
    id: "action-facility",
    badge: "Support Staff",
    title: "Action Facility Services Pvt Ltd",
    description:
      "Home Services, Deep Cleaning Services, Support Staff, Project Cleaning, Sofa, Carpet Cleaning Services",
    logo: "https://cdn-icons-png.flaticon.com/512/995/995053.png",
  },
];

export default function ServicePartners() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Our Service Partners
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mt-3" />
        </div>

        {/* 3 Partner Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Logo Area with Top Badge */}
              <div className="relative h-56 sm:h-64 w-full p-8 flex items-center justify-center bg-gradient-to-b from-slate-100/70 to-slate-50">
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                  {partner.badge}
                </span>

                {/* Partner Logo */}
                <div className="relative w-36 h-36 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                  />
                </div>
              </div>

              {/* Partner Details Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-white border-t border-slate-100">
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {partner.title}
                  </h3>
                  
                  <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}