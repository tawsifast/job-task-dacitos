"use client";
import Link from "next/link";
import { Building2, MapPin, Phone, Mail, Clock } from "lucide-react";
import { footerLinks } from "@/data/siteData";

const presence = [
  "Telangana", "Andhra Pradesh", "Karnataka", "Tamilnadu", "Odisha",
];

export default function Footer() {
  return (
    <footer className="bg-[#0a192f] border-t border-slate-800/60 relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent font-heading">
                AmazePMS
              </span>
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed">
              Amaze Property Management Solutions Pvt Ltd — a one stop
              solutions for all your property management needs.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-200 mb-4 font-heading">
              Menu
            </h3>
            <ul className="space-y-3">
              {footerLinks.menu.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-200 mb-4 font-heading">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.quick.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-200 mb-4 font-heading">
              Our Presence
            </h3>
            <ul className="space-y-2">
              {presence.map((state) => (
                <li key={state} className="flex items-center gap-2 text-sm text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{state}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-200 mb-4 font-heading">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>4th floor, High Mark Chambers, Khajaguda X road, Cyberabad, Hyderabad-500008</span>
              </li>
              <li>
                <a href="tel:9100694137" className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-blue-400 transition-colors">
                  <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>9100694137</span>
                </a>
              </li>
              <li>
                <a href="mailto:Info@amazepms.com" className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-blue-400 transition-colors">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Info@amazepms.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-300">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700/60 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Amaze Property Management Solutions Pvt Ltd. All Rights Reserved.
          </p>
          <p className="text-xs text-slate-400">
            Built with care for our clients
          </p>
        </div>
      </div>
    </footer>
  );
}
