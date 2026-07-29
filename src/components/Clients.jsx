"use client";
import Image from "next/image";
import React from "react";

const logos = [
  {
    name: "Tech Mahindra",
    icon: "https://companieslogo.com/img/orig/TECHM.NS_BIG-0b6d62d5.png",
  },
  {
    name: "Infosys",
    icon: "https://cdn.simpleicons.org/infosys",
  },
  {
    name: "Wipro",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvl347dJXziQgOWmjAcoXNXDQIYtXU8BlJO1agURcw8g&s",
  },
  {
    name: "HCL Technologies",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcfQ7oe3OU__MIvchthiRoxBsEZla_ZqizZ7lkmNaOv4PlfItEmfbWrcyk&s=10",
  },
  {
    name: "Larsen & Toubro",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5jG9CyET7MbtTcug3n4FUvc-GCwfcMavJvcst4Y-Kv0_zIzNUGCmcy97A&s=10",
  },
  {
    name: "Amazon",
    icon: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
  },
  {
    name: "Google",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_vI-lOAFz1snJPyzNdjWeK5x4dyCZCfUvSGmyD7E9gOJikd6-88c9GxY&s=10",
  },
  {
    name: "Microsoft",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/3840px-Microsoft_logo.svg.png",
  },
  {
    name: "Dell",
    icon: "https://cdn.vectorstock.com/i/1000v/22/43/dell-brand-logo-computer-symbol-white-design-vector-46352243.jpg",
  },
  {
    name: "IBM",
    icon: "https://substackcdn.com/image/fetch/$s_!1XDp!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb162f2d8-7878-4f8c-9b3f-6184293024dc_1000x1000.jpeg",
  },
  {
    name: "Cognizant",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVig8E_QEgxJ4hiV6hxE0wAYbckTBvwGl1tz6mvwQhM8OAw6LLSEQz0g4r&s=10",
  },
  {
    name: "Accenture",
    icon: "https://cdn.simpleicons.org/accenture",
  },
];

export default function Clients() {
  return (
    <section className="py-10 sm:py-14 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-50 border border-blue-200 text-blue-700">
            Trusted by 200+ Valued Partners Around India
          </span>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <div className="flex gap-12 sm:gap-16 items-center animate-marquee-right py-2">
            {logos.map((item, i) => (
              <div
                key={i}
                className="shrink-0 flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md hover:border-blue-200/60 transition-all"
              >
                <div className="p-1.5 rounded-lg bg-slate-50 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <span className="text-sm font-bold text-slate-700 whitespace-nowrap tracking-tight">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}