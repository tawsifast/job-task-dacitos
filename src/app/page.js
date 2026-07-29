import SocialFloatingBar from "@/components/SocialFloatingBar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <SocialFloatingBar />
      <Hero />
      <Clients />
      <About />
      <WhyChooseUs />
      <CTA />
    </>
  );
}
