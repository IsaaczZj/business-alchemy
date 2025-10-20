import FeatureSection from "@/components/landing-page/feature-section";
import HeroSection from "@/components/landing-page/hero-section";

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <HeroSection />
        <FeatureSection/>
      </article>
    </>
  );
}
