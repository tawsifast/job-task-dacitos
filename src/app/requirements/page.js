"use client";
import PageBanner from "@/components/PageBanner";
import RecruitmentSection from "@/components/RecruitmentSection";

export default function RequirementsPage() {
  return (
    <div>
      <PageBanner
        label="Requirements"
        title="Property"
        highlight="Requirements"
        subtitle="Explore our property requirements and find the perfect space for your needs."
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=85"
      />

      <RecruitmentSection/>
    </div>
  );
}
