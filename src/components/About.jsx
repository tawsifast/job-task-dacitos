"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, MapPin, Users } from "lucide-react";

const highlights = [
  { icon: Users, value: "15,000+", label: "Work Force" },
  { icon: Building2, value: "200+", label: "Clients" },
  { icon: MapPin, value: "PAN India", label: "Presence" },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-slate-50/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-50 border border-blue-200 text-blue-700 mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading leading-tight">
              A Heritage of{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                Excellence in Property Management
              </span>
            </h2>
            <p className="mt-6 text-slate-500 text-base leading-relaxed">
              Amaze PMS Pvt Ltd (AMAZE) is a Property Management division of
              ACTION GROUP of Companies, founded in 2001 by Mr. Subhani Abdul —
              a veteran from the Indian Navy, a Certified Security Practitioner,
              and a renowned name in the Service Industry.
            </p>
            <p className="mt-4 text-slate-500 text-base leading-relaxed">
              Headquartered in Cyberabad, Telangana, we provide PAN INDIA
              Property Management Solutions, partnering with leading clientele
              with 15,000+ strong professionals. All our services — Housekeeping,
              MEP, Security, Pest Control, Gardening, STP & WTP, Parking, and
              more — are delivered in-house.
            </p>

            <div className="mt-8 flex flex-wrap gap-8">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 border border-blue-100/50">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-extrabold text-slate-800">
                      {item.value}
                    </div>
                    <div className="text-xs text-slate-400">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:shadow-xl active:scale-95"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-100/50 to-indigo-100/50 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80"
                alt="Modern office building"
                width={700}
                height={500}
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-slate-200/80 max-w-[200px]"
            >
              <div className="text-2xl font-extrabold text-blue-600 font-heading">
                20M+
              </div>
              <div className="text-xs text-slate-500 mt-1">
                Sq. Ft. Managed Across India
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
