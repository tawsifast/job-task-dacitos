"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import ServicesGrid from "@/components/ServicesGrid";
import ServicePartners from "@/components/ServicePartners";

export default function ServicesPage() {
  return (
    <div>
      <PageBanner
        label="Our Services"
        title="Comprehensive Property Management"
        subtitle="From technical engineering to soft services — all delivered in-house by 15,000+ trained professionals."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85"
        smallTitle
      />

      <ServicesGrid />
      <ServicePartners/>
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              Need a Custom Solution?
            </h2>
            <p className="mt-4 text-blue-100/80 text-lg max-w-2xl mx-auto">
              We tailor our services to meet your specific facility management requirements.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 mt-8 px-6 py-3.5 font-semibold text-sm bg-white text-blue-700 hover:bg-blue-50 rounded-xl transition-all shadow-lg active:scale-95"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
