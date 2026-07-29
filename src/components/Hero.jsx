"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle, Shield, Sparkles, Wrench, Leaf, Bug, Headphones, Car, Building2 } from "lucide-react";
import Link from "next/link";

const banners = [
  {
    icon: Building2,
    badge: "20M+ Sq. Ft. Managed",
    title: "Amaze Property Management",
    highlight: "One Stop for All Property Needs",
    desc: "Hard services, housekeeping, security & property ops — all in-house.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85",
  },
  {
    icon: Shield,
    badge: "24/7 Security",
    title: "Security Solutions",
    highlight: "Trained Professionals. Round-the-Clock.",
    desc: "Armed guarding, CCTV, access control & fire safety.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1600&q=85",
  },
  {
    icon: Sparkles,
    badge: "Housekeeping",
    title: "Smart Housekeeping",
    highlight: "Eco-Friendly. Mechanized.",
    desc: "Deep cleaning, floor care, waste management & sanitization.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=85",
  },
  {
    icon: Wrench,
    badge: "Technical Engineering",
    title: "MEP Engineering",
    highlight: "Mechanical. Electrical. HVAC.",
    desc: "HVAC, plumbing, STP/WTP & energy audits.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&q=85",
  },
  {
    icon: Leaf,
    badge: "Landscaping",
    title: "Gardening & Landscape",
    highlight: "Green Spaces. Sustainable.",
    desc: "Horticulture, lawn care, garden design & irrigation.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1600&q=85",
  },
  {
    icon: Bug,
    badge: "Pest Control",
    title: "Pest Management",
    highlight: "Safe. Eco-Friendly.",
    desc: "Termite treatment, fumigation & mosquito control.",
    image: "https://images.unsplash.com/photo-1632935318671-9cb8c88f50a0?w=1600&q=85",
  },
  {
    icon: Headphones,
    badge: "Tenant Support",
    title: "Corporate & Tenant Support",
    highlight: "Seamless Operations.",
    desc: "Help desk, tenant relations, event & clubhouse management.",
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1600&q=85",
  },
  {
    icon: Car,
    badge: "Parking Management",
    title: "Smart Parking",
    highlight: "Efficient Traffic Flow.",
    desc: "Traffic control, valet & automated entry/exit systems.",
    image: "https://images.unsplash.com/photo-1478860409698-8707f313ee8b?w=1600&q=85",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef(null);

  const goTo = useCallback((index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
    resetInterval();
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % banners.length);
    resetInterval();
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + banners.length) % banners.length);
    resetInterval();
  }, []);

  function resetInterval() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % banners.length);
    }, 6000);
  }

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  const banner = banners[current];

  const slideVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
  };

  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden bg-slate-900 pt-16 sm:pt-20">
      <AnimatePresence custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={banner.image}
            alt={banner.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/60 to-slate-900/40 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/30 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-20 w-full">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`content-${current}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/10 border border-white/20 text-blue-200 backdrop-blur-sm mb-6">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>{banner.badge}</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-white/10 border border-white/20 text-blue-300 backdrop-blur-sm">
                  <banner.icon className="w-6 h-6" />
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] font-heading text-white">
                {banner.title}.{" "}
                <span className="text-blue-300">
                  {banner.highlight}
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                {banner.desc}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="group px-6 py-3.5 font-semibold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 active:scale-95"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3.5 font-semibold text-sm bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white transition-all active:scale-95 backdrop-blur-sm"
                >
                  Request a Quote
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <button
        onClick={prev}
        aria-label="Previous banner"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-white/90 hover:bg-white border border-slate-200 shadow-lg hover:shadow-xl text-slate-700 hover:text-blue-600 transition-all active:scale-90"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={next}
        aria-label="Next banner"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-white/90 hover:bg-white border border-slate-200 shadow-lg hover:shadow-xl text-slate-700 hover:text-blue-600 transition-all active:scale-90"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <div className="absolute bottom-6 sm:bottom-8 inset-x-0 flex items-center justify-center gap-2 z-20">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to banner ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 bg-white"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
