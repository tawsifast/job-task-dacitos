"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    id: "security",
    title: "Security Services",
    image: "https://cdn-icons-png.flaticon.com/512/1067/1067555.png",
  },
  {
    id: "housekeeping",
    title: "House Keeping Services",
    image: "https://cdn-icons-png.flaticon.com/512/995/995053.png",
  },
  {
    id: "technical",
    title: "Technical Services",
    image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
  },
  {
    id: "pest-control",
    title: "Pest Control",
    image: "https://cdn-icons-png.flaticon.com/512/2823/2823616.png",
  },
  {
    id: "help-desk",
    title: "Help Desk Management",
    image: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png",
  },
  {
    id: "gardening",
    title: "Gardening",
    image: "https://cdn-icons-png.flaticon.com/512/1518/1518861.png",
  },
  {
    id: "clean-pool",
    title: "Clean Pool Management",
    image: "https://cdn-icons-png.flaticon.com/512/3132/3132735.png",
  },
  {
    id: "club-house",
    title: "Club House Management",
    image: "https://cdn-icons-png.flaticon.com/512/4300/4300058.png",
  },
  {
    id: "facade",
    title: "Façade Cleaning",
    image: "https://cdn-icons-png.flaticon.com/512/2954/2954888.png",
  },
  {
    id: "property-caretaker",
    title: "Property Caretaker",
    image: "https://cdn-icons-png.flaticon.com/512/619/619032.png",
  },
  {
    id: "civil-renovation",
    title: "Civil & Renovation",
    image: "https://cdn-icons-png.flaticon.com/512/2422/2422601.png",
  },
  {
    id: "integrated",
    title: "Integrated Solutions",
    image: "https://cdn-icons-png.flaticon.com/512/1960/1960020.png",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Property and Asset Management
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mt-3" />
        </div>

        {/* 12 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20, delay: index * 0.03 } }}
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 15 } }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Service Image Container (Fixed with Padding & Object-Contain) */}
              <div className="relative h-48 sm:h-52 w-full p-8 flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-contain p-8 group-hover:scale-110 transition-transform duration-300 ease-out drop-shadow-sm"
                />
              </div>

              {/* Bottom Navy Banner Title */}
              <div className="bg-slate-900/80 backdrop-blur-sm px-5 py-4 text-center">
                <h3 className="text-sm font-bold text-white tracking-wide group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}