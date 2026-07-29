"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/data/siteData";

function AnimatedCounter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const num = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const label = value.replace(/[0-9+]/g, "");

  return (
    <span ref={ref}>
      {inView ? (
        <CountUp from={0} to={num} duration={2} />
      ) : (
        <span>0</span>
      )}
      {label}
    </span>
  );
}

function CountUp({ from, to, duration }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <span ref={ref}>
      {to.toLocaleString()}
      {to === 200 ? "+" : to === 15000 ? "+" : "+"}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="impact" className="py-20 sm:py-24 bg-slate-50/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20, delay: i * 0.1 } }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300"
            >
              <div className="text-3xl sm:text-5xl font-extrabold font-heading bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="mt-2 text-sm sm:text-base font-semibold text-slate-800">
                {stat.label}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-slate-400">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
