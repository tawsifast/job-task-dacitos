"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import DotGrid from "@/components/DotGrid";

const points = [
  "All services are In-house — no third-party subcontracting",
  "Availability of back up staff to take care of emergencies",
  "Yearly training calendar by dedicated Training Officer",
  "Risk Assessment of Equipment and its Operations",
  "Site specific SOPs / Checklists for all services",
  "Internal team audits on EHS, Security, Technical, Fire & Safety",
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-100/50 to-indigo-100/50 rounded-3xl blur-2xl" />
            <DotGrid
              className="absolute bottom-0 right-0 lg:-right-10 z-0 pointer-events-none opacity-30"
              rows={6}
              cols={8}
              dotSize="md"
              color="slate-300"
            />
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80"
                alt="Our team at work"
                width={700}
                height={500}
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-50 border border-blue-200 text-blue-700 mb-4">
              Our Service Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading leading-tight">
              Why{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                Choose Us
              </span>
            </h2>
            <p className="mt-4 text-slate-500 text-base leading-relaxed">
              Managing an area of more than 20 million Sq.ft across different
              portfolios, our strength lies in our comprehensive approach to
              facility management.
            </p>

            <ul className="mt-8 space-y-4">
              {points.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 shrink-0 w-4 h-4 rounded-sm bg-gradient-to-br from-blue-500 to-indigo-600 shadow-sm" />
                  <span className="text-sm sm:text-base text-slate-600">{item}</span>
                </motion.li>
              ))}
            </ul>

            <Link
              href="/our-strength"
              className="group mt-8 inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:shadow-xl active:scale-95"
            >
              <span>Discover Our Full Strength</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
