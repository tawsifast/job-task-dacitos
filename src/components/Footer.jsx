"use client";
import Link from "next/link";
import { Building2, MapPin, Phone, Mail } from "lucide-react";
import { footerLinks } from "@/data/siteData";

const presence = [
  "Telangana", "Andhra Pradesh", "Karnataka", "Tamilnadu", "Odisha",
];

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent font-heading">
                AmazePMS
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed">
              Amaze Property Management Solutions Pvt Ltd — a one stop
              solutions for all your property management needs.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-800 mb-4 font-heading">
              Menu
            </h3>
            <ul className="space-y-3">
              {footerLinks.menu.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-800 mb-4 font-heading">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.quick.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-800 mb-4 font-heading">
              Our Presence
            </h3>
            <ul className="space-y-2">
              {presence.map((state) => (
                <li key={state} className="flex items-center gap-2 text-sm text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span>{state}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="space-y-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-4 text-sm text-slate-500">
              <a
                href="tel:9100694137"
                className="flex items-center gap-1.5 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>9100694137</span>
              </a>
              <a
                href="mailto:Info@amazepms.com"
                className="flex items-center gap-1.5 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Info@amazepms.com</span>
              </a>
            </div>
            <p className="text-xs text-slate-400">
              4th floor, High Mark Chambers, Khajaguda X road, Cyberabad,
              Hyderabad-500008
            </p>
          </div>
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Amaze Property Management | All
            Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
