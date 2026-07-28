"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Building2, MapPin, ArrowRight, Shield, Target } from "lucide-react";
import { stats } from "@/data/siteData";

const timeline = [
  { year: "2001", event: "Founded by Mr. Subhani Abdul (Indian Navy Veteran)" },
  { year: "2005", event: "Expanded into integrated facility management" },
  { year: "2010", event: "Reached 5,000+ workforce milestone" },
  { year: "2015", event: "PAN India operations established" },
  { year: "2020", event: "15,000+ professionals, 200+ clients" },
  { year: "2024", event: "Managing 20M+ Sq. Ft. across India" },
];

const values = [
  {
    icon: Shield,
    title: "Integrity",
    desc: "We uphold the highest standards of honesty and transparency in all our operations.",
  },
  {
    icon: Target,
    title: "Excellence",
    desc: "Continuous improvement and pursuit of the best service quality across all domains.",
  },
  {
    icon: Users,
    title: "Teamwork",
    desc: "15,000+ professionals working in unison to deliver seamless facility management.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 sm:pt-28">
      <section className="py-16 sm:py-20 bg-slate-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-50 border border-blue-200 text-blue-700 mb-4">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-tight">
              A Heritage of{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-2xl">
              From a vision to India&apos;s trusted property management partner —
              our journey of two decades defined by commitment, innovation, and
              service excellence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading">
                Our Story
              </h2>
              <p className="mt-4 text-slate-500 leading-relaxed">
                Amaze PMS Pvt Ltd (AMAZE) is a Property Management division of
                ACTION GROUP of Companies founded in the year 2001 by Mr. Subhani
                Abdul — a veteran from the Indian Navy, a Certified Security
                Practitioner, and a renowned name in the Service Industry.
              </p>
              <p className="mt-4 text-slate-500 leading-relaxed">
                Amaze has its Head Quarters in Cyberabad, Telangana — INDIA,
                providing Property Management Solutions PAN INDIA, partnering
                with leading clientele with 15,000+ strong strength of
                professionals. We specialize in offering comprehensive integrated
                Property Management Services — all delivered in-house.
              </p>
              <p className="mt-4 text-slate-500 leading-relaxed">
                Our integrated service model ensures consistency, quality
                control, and accountability across every facility we manage.
              </p>

              <Link
                href="/services"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-100/50 to-indigo-100/50 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80"
                  alt="Office building"
                  width={700}
                  height={500}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading">
              Our Journey
            </h2>
            <p className="mt-3 text-slate-500">Key milestones in our growth story</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-blue-200 hidden sm:block" />
            <div className="space-y-8 sm:space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center gap-6 sm:gap-8 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  <div className="hidden sm:flex flex-1 justify-end">
                    {i % 2 === 0 && (
                      <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 max-w-md">
                        <span className="text-sm font-bold text-blue-600">{item.year}</span>
                        <p className="mt-1 text-slate-600 text-sm">{item.event}</p>
                      </div>
                    )}
                  </div>

                  <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-xs font-bold shadow-lg z-10">
                    {i + 1}
                  </div>

                  <div className="flex-1 sm:hidden">
                    <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                      <span className="text-sm font-bold text-blue-600">{item.year}</span>
                      <p className="mt-1 text-slate-600 text-sm">{item.event}</p>
                    </div>
                  </div>

                  <div className="hidden sm:flex flex-1">
                    {i % 2 !== 0 && (
                      <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 max-w-md">
                        <span className="text-sm font-bold text-blue-600">{item.year}</span>
                        <p className="mt-1 text-slate-600 text-sm">{item.event}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading">
              By the Numbers
            </h2>
            <p className="mt-3 text-slate-500">Our impact across India</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center"
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

      <section className="py-16 sm:py-20 bg-slate-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading">
              Our Values
            </h2>
            <p className="mt-3 text-slate-500">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm text-center"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 border border-blue-100/50 inline-flex mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 font-heading mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-500">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
