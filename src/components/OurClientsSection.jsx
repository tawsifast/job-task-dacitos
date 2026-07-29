"use client";
import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Categories derived from Amaze PMS portfolio
const categories = [
  { id: "all", label: "All Clients" },
  { id: "commercial", label: "Commercial & IT Parks" },
  { id: "residential", label: "Residential Communities" },
  { id: "malls", label: "Malls & Retail" },
  { id: "education", label: "Educational Institutions" },
  { id: "pharma", label: "Manufacturing & Pharma" },
  { id: "warehousing", label: "Logistics & Warehouses" },
  { id: "healthcare", label: "Hospitals & Healthcare" },
];

// Complete client portfolio data
const clientData = [
  // Commercial & IT Parks
  { id: 1, name: "Sattva Knowledge Park", category: "commercial", location: "Hyderabad" },
  { id: 2, name: "Tech Mahindra", category: "commercial", location: "Pan India" },
  { id: 3, name: "T-Hub Phase 2", category: "commercial", location: "Hyderabad" },
  { id: 4, name: "L&T Metro Stations", category: "commercial", location: "Hyderabad" },
  { id: 5, name: "Sohini Tech Park", category: "commercial", location: "Hyderabad" },
  { id: 6, name: "BSR Tech Park", category: "commercial", location: "Hyderabad" },
  { id: 7, name: "Divyasree NSL Orion", category: "commercial", location: "Hyderabad" },
  { id: 8, name: "Kapil Towers & Business Park", category: "commercial", location: "Hyderabad" },
  { id: 9, name: "Rajapushpa Summit", category: "commercial", location: "Hyderabad" },
  { id: 10, name: "Purva Summit", category: "commercial", location: "Hyderabad" },
  { id: 11, name: "Aurobindo Galaxy", category: "commercial", location: "Hyderabad" },
  
  // Residential Communities
  { id: 12, name: "Rajapushpa Provincia", category: "residential", location: "Financial District" },
  { id: 13, name: "My Home Avatar", category: "residential", location: "Hyderabad" },
  { id: 14, name: "The Botanika", category: "residential", location: "Gachibowli" },
  { id: 15, name: "Lanco Hills", category: "residential", location: "Manikonda" },
  { id: 16, name: "Aparna Silver Oak", category: "residential", location: "Hyderabad" },
  { id: 17, name: "Golf Edge Residences", category: "residential", location: "Hyderabad" },
  { id: 18, name: "My Home Mangla", category: "residential", location: "Hyderabad" },
  { id: 19, name: "Rajapushpa Imperia", category: "residential", location: "Hyderabad" },
  { id: 20, name: "Prajay Megapolis", category: "residential", location: "Hyderabad" },

  // Malls & Retail
  { id: 21, name: "Lulu Mall", category: "malls", location: "Hyderabad" },
  { id: 22, name: "Nexus Mall", category: "malls", location: "Hyderabad" },
  { id: 23, name: "Phoenix Market City", category: "malls", location: "Hyderabad" },
  { id: 24, name: "L&T Next Galleria Malls", category: "malls", location: "Pan City" },
  { id: 25, name: "Lifestyle Stores", category: "malls", location: "Pan India" },
  { id: 26, name: "Max Retail Outlets", category: "malls", location: "Pan India" },

  // Educational Institutions
  { id: 27, name: "NALSAR University of Law", category: "education", location: "Hyderabad" },
  { id: 28, name: "Mahindra University", category: "education", location: "Hyderabad" },
  { id: 29, name: "Delhi Public School (DPS)", category: "education", location: "Regional" },
  { id: 30, name: "NICMAR University", category: "education", location: "Hyderabad" },
  { id: 31, name: "Aga Khan Academy", category: "education", location: "Hyderabad" },

  // Manufacturing & Pharma
  { id: 32, name: "MSN Laboratories", category: "pharma", location: "Pan India" },
  { id: 33, name: "UB Group Brewery", category: "pharma", location: "Regional" },
  { id: 34, name: "Astra Microwave Products", category: "pharma", location: "Hyderabad" },
  { id: 35, name: "ReNew Power Projects", category: "pharma", location: "Pan India" },

  // Warehouses & Logistics
  { id: 36, name: "Reliance Industries (RIL)", category: "warehousing", location: "Logistics Hub" },
  { id: 37, name: "ITC Logistics", category: "warehousing", location: "Regional" },
  { id: 38, name: "Emirates Logistics", category: "warehousing", location: "Pan India" },

  // Hospitals & Healthcare
  { id: 39, name: "Rainbow Children's Hospitals", category: "healthcare", location: "Regional" },
  { id: 40, name: "Star Health", category: "healthcare", location: "Regional" },
  { id: 41, name: "Oliva Clinics", category: "healthcare", location: "Pan India" },
];

const ITEMS_PER_PAGE = 12;

export default function OurClientsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter clients based on tab selection & search query
  const filteredClients = useMemo(() => {
    return clientData.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const totalPages = useMemo(
    () => Math.ceil(filteredClients.length / ITEMS_PER_PAGE),
    [filteredClients.length]
  );

  const paginatedClients = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredClients.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredClients, currentPage]);

  // Reset to page 1 when category or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  // Build visible page numbers with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      if (currentPage <= 3) {
        for (let i = 2; i <= 4; i++) pages.push(i);
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - 3; i <= totalPages - 1; i++) pages.push(i);
      } else {
        for (let i = start; i <= end; i++) pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header & Stats Strip */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-blue-600 text-xs font-extrabold uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
              Trusted Partnerships
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mt-3">
              Our Valued Clients
            </h2>
            <p className="text-slate-600 max-w-2xl mt-2 text-sm sm:text-base leading-relaxed">
              Managing 20 Million+ sq. ft. across top-tier IT parks, premium residential communities, retail hubs, and industrial projects.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-sm shrink-0">
            <div className="text-center px-3 py-1">
              <span className="block text-xl font-extrabold text-slate-900">200+</span>
              <span className="text-[11px] text-slate-500 font-medium">Clients</span>
            </div>
            <div className="text-center px-3 py-1 border-x border-slate-100">
              <span className="block text-xl font-extrabold text-blue-600">20M+</span>
              <span className="text-[11px] text-slate-500 font-medium">Sq. Ft.</span>
            </div>
            <div className="text-center px-3 py-1">
              <span className="block text-xl font-extrabold text-slate-900">15K+</span>
              <span className="text-[11px] text-slate-500 font-medium">Workforce</span>
            </div>
          </div>
        </div>

        {/* Interactive Filter Bar + Search */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10">
          
          {/* Scrollable Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                    : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Live Search Input */}
          <div className="relative w-full md:w-[260px] shrink-0">
            <input
              type="text"
              placeholder="Search client name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-slate-900 text-sm pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all shadow-sm"
            />
            <svg
              className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Clients Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {paginatedClients.map((client) => (
              <motion.div
                key={client.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                whileHover={{ y: -4 }}
                className="group bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {client.name.charAt(0)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                    {client.location}
                  </span>
                </div>

                <div className="mt-4">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {client.name}
                  </h3>
                  <p className="text-xs text-slate-500 capitalize mt-1">
                    {client.category.replace("-", " ")}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span>Verified Client</span>
                  <span className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-bold">
                    Partner &rarr;
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-semibold bg-white border border-slate-200/80 text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Prev</span>
            </button>

            {getPageNumbers().map((item, i) =>
              item === "..." ? (
                <span key={`ellipsis-${i}`} className="px-2 text-slate-400 text-sm">...</span>
              ) : (
                <button
                  key={item}
                  onClick={() => goToPage(item)}
                  className={`w-10 h-10 rounded-xl text-sm font-bold transition-all ${
                    item === currentPage
                      ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80"
                  }`}
                >
                  {item}
                </button>
              )
            )}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-semibold bg-white border border-slate-200/80 text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Empty Search State */}
        {filteredClients.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300">
            <p className="text-slate-500 font-medium text-base">
              No clients found matching &ldquo;{searchQuery}&rdquo;
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
                setCurrentPage(1);
              }}
              className="mt-3 text-xs font-bold text-blue-600 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}