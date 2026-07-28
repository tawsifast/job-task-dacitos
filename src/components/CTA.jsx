"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

const contacts = [
  {
    icon: MapPin,
    title: "Head Office",
    content: "4th floor, High Mark Chambers,\nKhajaguda X road, Cyberabad,\nHyderabad-500008",
  },
  {
    icon: Phone,
    title: "Phone",
    content: (
      <>
        <a href="tel:9100694137" className="block hover:text-blue-600 transition">9100694137</a>
        <a href="tel:9908538137" className="block hover:text-blue-600 transition">9908538137</a>
      </>
    ),
  },
  {
    icon: Mail,
    title: "Email",
    content: <a href="mailto:Info@amazepms.com" className="hover:text-blue-600 transition">Info@amazepms.com</a>,
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Monday - Saturday\n9:00 AM - 6:00 PM",
  },
];

export default function CTA() {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-slate-50/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-50 border border-blue-200 text-blue-700 mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading">
            Get in{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="mt-4 text-slate-500 text-base sm:text-lg">
            Have a question or ready to get started? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {contacts.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-200/80 transition-all"
                >
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 border border-blue-100/50 inline-flex mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 mb-1">{item.title}</h3>
                  <div className="text-sm text-slate-500 whitespace-pre-line leading-relaxed">
                    {item.content}
                  </div>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden p-8 sm:p-10"
          >
            <div className="absolute top-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-400/20 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                Ready to Transform Your Property Management?
              </h3>
              <p className="mt-3 text-blue-100/80 text-sm sm:text-base leading-relaxed">
                Get in touch with our team for a customized facility management
                solution tailored to your needs. We respond within 24 hours.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:9908538137"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 font-semibold text-sm bg-white text-blue-700 hover:bg-blue-50 rounded-xl transition-all shadow-lg shadow-black/10 active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 9908538137</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 font-semibold text-sm bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl transition-all active:scale-95"
                >
                  <span>Contact Form</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
