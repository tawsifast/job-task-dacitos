import SocialFloatingBar from "@/components/SocialFloatingBar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Stats from "@/components/Stats";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <SocialFloatingBar />
      <Hero />
      <Clients />
      <Stats />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  );
}
