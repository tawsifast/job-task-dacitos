"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { services } from "@/data/siteData";
import PageBanner from "@/components/PageBanner";

export default function ServicesPage() {
  return (
    <div>
      <PageBanner
        label="Our Services"
        title="Comprehensive Property Management"
        subtitle="From technical engineering to soft services — every solution delivered in-house by 15,000+ trained professionals across India."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85"
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-80px" }}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  i % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 border border-blue-200 text-blue-700 mb-4">
                    <span>{service.badge}</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 border border-blue-100/50">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-800">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-slate-500 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <ul className="space-y-3">
                    {service.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                  <div className="relative">
                    <div className="absolute -inset-3 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-3xl blur-2xl" />
                    <div className="relative rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="w-full h-[300px] sm:h-[380px] object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
