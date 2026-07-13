import { T } from "../constants/tokens";
import PromoBanner from "../components/layout/PromoBanner";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import BestsellersSection from "../components/sections/BestsellersSection";
import OccasionsSection from "../components/sections/OccasionsSection";

/**
 * HomePage — root page that assembles all layout and section components.
 */
export default function HomePage() {
  return (
    <div
      className="ug-body min-h-screen"
      style={{ background: T.cream, color: T.ink }}
    >
      <PromoBanner />
      <Header />

      <main>
        <HeroSection />
        <BestsellersSection />
        <OccasionsSection />
      </main>

      <Footer />
    </div>
  );
}
