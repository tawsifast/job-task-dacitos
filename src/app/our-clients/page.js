"use client";
import PageBanner from "@/components/PageBanner";
import OurClientsSection from "@/components/OurClientsSection";
import ClientDistribution from "@/components/ClientDistribution";

export default function OurClientsPage() {
  return (
    <div>
      <PageBanner
        label="Our Clients"
        title="Trusted by"
        highlight="200+ Enterprises"
        subtitle="We are proud to partner with leading organizations across India, delivering world-class property management solutions."
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=85"
      />
      <OurClientsSection />
      <ClientDistribution />
    </div>
  );
}
