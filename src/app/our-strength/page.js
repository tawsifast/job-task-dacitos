"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { extendedBenefits } from "@/data/siteData";
import PageBanner from "@/components/PageBanner";

const certifications = [
  "ISO 9001:2015 Certified",
  "ISO 14001:2015 Certified",
  "OHSAS 18001 Certified",
  "NSR Certified Security Services",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function OurStrengthPage() {
  return (
    <div>
      <PageBanner
        label="Our Strength"
        title="What Sets Us Apart"
        subtitle="Decades of experience, thousands of trained professionals, and unwavering service excellence — trusted by 200+ enterprises."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=85"
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading">
                Service Benefits
              </h2>
              <p className="mt-4 text-slate-500 leading-relaxed">
                Managing an area of more than 20 million Sq.ft across different
                portfolios, our strength lies in our comprehensive approach to
                facility management.
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "All services are In-house — no third-party subcontracting",
                  "Availability of back up staff to take care of emergencies",
                  "Yearly training calendar by dedicated Training Officer",
                  "Risk Assessment of Equipment and its Operations",
                  "Site specific SOPs / Checklists for all services",
                  "Internal team audits on a regular basis",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80"
                  alt="Team meeting"
                  width={700}
                  height={500}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {extendedBenefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 15 } }}
                  className="group p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-blue-200/80 transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 border border-blue-100/50 inline-flex group-hover:scale-110 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300 mb-5">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors mb-2 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
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
              Certifications & Compliance
            </h2>
            <p className="mt-3 text-slate-500">
              Internationally recognized standards we adhere to
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center"
              >
                <div className="text-sm font-bold text-slate-800">{cert}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading">
              Staff Welfare Programs
            </h2>
            <p className="mt-3 text-slate-500">
              We believe in taking care of our team — the backbone of our
              service excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              { label: "Diwali Sweets", emoji: "🎉" },
              { label: "Gifts on RD/ID", emoji: "🎁" },
              { label: "Rewards & Recognition", emoji: "🏆" },
              { label: "₹2 Lakhs Insurance", emoji: "🛡️" },
              { label: "₹10k Funeral Expenses", emoji: "🤝" },
              { label: "₹1 Lakh Compensation", emoji: "💼" },
              { label: "Ranker Student Awards", emoji: "📚" },
              { label: "₹1L/50k/25k Scholar Gifts", emoji: "🎓" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-center"
              >
                <div className="text-2xl mb-2">{item.emoji}</div>
                <div className="text-sm font-semibold text-slate-700">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
