"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Building2, Users, Shield, Wrench, Leaf, Bug, Sparkles, Headphones, Car } from "lucide-react";
import AboutSection from "@/components/About";
import PageBanner from "@/components/PageBanner";

const missionVisionValues = [
  {
    icon: Target,
    title: "Our Mission",
    content: "To deliver world-class integrated property management solutions that exceed client expectations through innovation, professionalism, and a commitment to excellence. We strive to create safe, clean, and efficient environments that enable our clients to focus on their core business.",
    gradient: "from-blue-600 to-indigo-700",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80",
    imageRight: true,
  },
  {
    icon: Eye,
    title: "Our Vision",
    content: "To be India's most trusted and preferred property management partner, setting industry benchmarks for service quality, sustainability, and customer satisfaction. We envision a future where every facility we manage reflects the highest standards of operational excellence.",
    gradient: "from-indigo-600 to-purple-700",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&q=80",
    imageRight: false,
  },
  {
    icon: Heart,
    title: "Our Values",
    content: "Integrity, excellence, teamwork, and innovation form the foundation of everything we do. We believe in transparent business practices, continuous improvement, employee welfare, and building long-term relationships with our clients based on trust and mutual respect.",
    gradient: "from-purple-600 to-pink-700",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80",
    imageRight: true,
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageBanner
        label="About Us"
        title="A Heritage of"
        highlight="Excellence"
        subtitle="From a vision to India's trusted property management partner — two decades of commitment and service excellence."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85"
      />

      <AboutSection />

      <section className="py-20 sm:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-50 border border-blue-200 text-blue-700 mb-4">
              Our Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading">
              Mission{" "}
              <span className="text-slate-300 mx-2">|</span> Vision{" "}
              <span className="text-slate-300 mx-2">|</span> Values
            </h2>
            <p className="mt-4 text-slate-500 text-base sm:text-lg">
              The principles that drive everything we do at AmazePMS
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
            {missionVisionValues.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <div className="flex-1 p-6 sm:p-8">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-md mb-4`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                    {item.content}
                  </p>
                </div>
              );
              const image = (
                <div className="relative shrink-0 w-full sm:w-[280px] lg:w-[320px] h-[220px] sm:h-[260px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              );
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200/80 transition-all duration-300 overflow-hidden flex flex-col sm:flex-row"
                >
                  {item.imageRight ? (
                    <>
                      {content}
                      {image}
                    </>
                  ) : (
                    <>
                      {image}
                      {content}
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-slate-50/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-50 border border-blue-200 text-blue-700 mb-4">
              Our Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading">
              Segments{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                We Care For
              </span>
            </h2>
            <p className="mt-4 text-slate-500 text-base sm:text-lg">
              Comprehensive property management solutions across diverse sectors
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {[
              { icon: Building2, title: "IT Parks & Corporates", desc: "End-to-end facility management for technology parks and corporate offices" },
              { icon: Users, title: "Commercial Complexes", desc: "Integrated services for shopping malls, retail spaces, and business centers" },
              { icon: Shield, title: "Residential Societies", desc: "Security, housekeeping, and maintenance for gated communities and apartments" },
              { icon: Wrench, title: "Industrial Facilities", desc: "Technical maintenance and safety services for manufacturing plants and warehouses" },
              { icon: Leaf, title: "Healthcare Institutions", desc: "Specialized cleaning, sanitization, and facility support for hospitals and clinics" },
              { icon: Bug, title: "Educational Campuses", desc: "Campus-wide property management for schools, colleges, and universities" },
              { icon: Sparkles, title: "Hospitality Sector", desc: "Housekeeping, landscaping, and technical services for hotels and resorts" },
              { icon: Car, title: "Government Infrastructure", desc: "Property management solutions for government buildings and public facilities" },
            ].map((seg, i) => {
              const Icon = seg.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="group p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-blue-200/80 transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 border border-blue-100/50 inline-flex group-hover:scale-110 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300 mb-4">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors font-heading mb-2">
                    {seg.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {seg.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
