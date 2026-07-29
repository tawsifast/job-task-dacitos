import Link from "next/link";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <About />
      <WhyChooseUs />
      {/* <Stats /> */}
      <section className="relative">
        {/* <Services /> */}
        <div className="text-center pb-12 sm:pb-16 -mt-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors group"
          >
            <span>View All Services</span>
            <span className="group-hover:translate-x-0.5 transition">→</span>
          </Link>
        </div>
      </section>
      <CTA />
    </>
  );
}
