import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { PricingSection } from "@/components/pricing-section"
import { AboutSection } from "@/components/about-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PricingSection />
    </div>
  )
}
