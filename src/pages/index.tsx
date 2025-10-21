import CustomerStorySection from "@/components/landing-page/customer-story-section";
import FeatureSection from "@/components/landing-page/feature-section";
import HeroSection from "@/components/landing-page/hero-section";
import SupportSection from "@/components/landing-page/support-section";

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <HeroSection />
        <FeatureSection/>
        <SupportSection/>
        <CustomerStorySection/>
      </article>
    </>
  );
}
