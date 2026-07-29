"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PageBanner({ label, title, subtitle, image, highlight, fullHeight }) {
  return (
    <section className={`relative flex items-center justify-center overflow-hidden pt-16 sm:pt-20 ${
      fullHeight ? "min-h-screen" : "min-h-[60vh] sm:min-h-[70vh]"
    }`}>
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/60 to-slate-900/40" />
      <div className="relative z-10 text-center px-4 max-w-3xl">
        {label && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-white/10 border border-white/20 text-blue-200 backdrop-blur-sm mb-5"
          >
            {label}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-heading text-white"
        >
          {title}{highlight && <span className="text-blue-300"> {highlight}</span>}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-slate-300 text-base sm:text-lg max-w-xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
