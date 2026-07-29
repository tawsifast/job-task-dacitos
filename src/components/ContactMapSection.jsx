"use client";
import { MapPin, Phone, Mail } from "lucide-react";

const services = [
  "PMS Services",
  "MEP Services",
  "House Keeping Services",
  "Security Services",
  "Gardening Services",
  "Deep Cleaning Services",
  "Maid Cleaning Services",
  "Facade Services",
  "Project Cleaning Services",
  "Pest Control Services",
  "Office Support Services",
];

export default function ContactMapSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 mb-8">
              Contact For Our Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((service) => (
                <div key={service} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                  <span className="text-sm text-slate-600">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 mb-2">
              Our Office Address
            </h2>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-6">
              Stay Connected
            </p>

            <div className="space-y-5">
              <div className="flex gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 border border-blue-100/50 shrink-0 h-fit">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800 mb-1">Address</h3>
                  <p className="text-sm text-slate-500">
                    4th Floor, High Mark Chambers, Khajaguda X road, Cyberabad, Hyderabad-500008
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 border border-blue-100/50 shrink-0 h-fit">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800 mb-1">Phone</h3>
                  <a href="tel:9100694137" className="text-sm text-blue-600 hover:underline block">
                    9100694137
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 border border-blue-100/50 shrink-0 h-fit">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800 mb-1">Email</h3>
                  <a href="mailto:info@amazepms.com" className="text-sm text-blue-600 hover:underline block">
                    info@amazepms.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
          <iframe
            src="https://maps.google.com/maps?q=AMAZE+Property+Management+Solutions+Pvt+Ltd,+Hyderabad&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            className="w-full h-[400px] md:h-[500px]"
          />
        </div>

      </div>
    </section>
  );
}
