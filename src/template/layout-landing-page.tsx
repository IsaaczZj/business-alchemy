import CallToActionSection from "@/components/landing-page/call-to-action-section";
import CustomerStorySection from "@/components/landing-page/customer-story-section";
import FeatureSection from "@/components/landing-page/feature-section";
import HeroSection from "@/components/landing-page/hero-section";
import SupportSection from "@/components/landing-page/support-section";

export default function LayoutLandingPage() {
  return (
    <article className="flex flex-col gap-10 md:gap-15">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
      <CallToActionSection />
    </article>
  );
}
