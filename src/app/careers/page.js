"use client";
import { motion } from "framer-motion";
import { MapPin, Clock, Briefcase, ArrowRight, Heart, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import { careers } from "@/data/siteData";
import PageBanner from "@/components/PageBanner";

const perks = [
  {
    icon: Heart,
    title: "Employee Welfare",
    desc: "Insurance, rewards, festival gifts, and family support programs.",
  },
  {
    icon: Users,
    title: "Training & Development",
    desc: "Yearly training calendar by dedicated Training Officers.",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    desc: "Clear career progression paths across 15,000+ strong organization.",
  },
];

export default function CareersPage() {
  return (
    <div>
      <PageBanner
        label="Careers"
        title="Join the"
        highlight="AmazePMS Team"
        subtitle="Be part of a 15,000+ strong family dedicated to excellence in property management across India."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=85"
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading">
              Why Join Us?
            </h2>
            <p className="mt-3 text-slate-500">
              We invest in our people as much as we invest in our services
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {perks.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 border border-blue-100/50 inline-flex mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 font-heading mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-500">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading mb-10">
              Open Positions
            </h2>

            <div className="space-y-4">
              {careers.map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors font-heading">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 mt-2 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-3.5 h-3.5" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {job.type}
                        </span>
                      </div>
                      <p className="mt-3 text-sm text-slate-500">{job.description}</p>
                    </div>
                    <button className="shrink-0 px-5 py-2.5 text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl transition-all active:scale-95 whitespace-nowrap">
                      Apply Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              Don&apos;t See the Right Role?
            </h2>
            <p className="mt-4 text-blue-100/80 text-lg max-w-2xl mx-auto">
              We are always looking for talented individuals. Send us your resume
              and we&apos;ll keep you in mind.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 mt-8 px-6 py-3.5 font-semibold text-sm bg-white text-blue-700 hover:bg-blue-50 rounded-xl transition-all shadow-lg active:scale-95"
            >
              <span>Send Your Resume</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
