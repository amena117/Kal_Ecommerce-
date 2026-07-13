import { T } from "../constants/tokens";
import { MORE_PRODUCTS, CURATED_PRODUCTS } from "../constants/products";

// Layout components
import PromoBanner from "../components/layout/PromoBanner";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

// Section components
import HeroSection from "../components/sections/HeroSection";
import BestsellersSection from "../components/sections/BestsellersSection";
import OccasionsSection from "../components/sections/OccasionsSection";
import BottomsUpSection from "../components/sections/BottomsUpSection";
import GiftDirectorySection from "../components/sections/GiftDirectorySection";
import ProductCarouselSection from "../components/sections/ProductCarouselSection";
import MugShowcaseSection from "../components/sections/MugShowcaseSection";
import CauseCommitmentSection from "../components/sections/CauseCommitmentSection";
import TrendingSearchesSection from "../components/sections/TrendingSearchesSection";
import MakerStoriesSection from "../components/sections/MakerStoriesSection";
import WhatMakesUsUncommonSection from "../components/sections/WhatMakesUsUncommonSection";

/**
 * HomePage — root page that assembles all layout and section components.
 * Matches the reference layout flow from top to bottom.
 */
export default function HomePage() {
  return (
    <div
      className="ug-body flex flex-col min-h-screen w-full overflow-x-hidden"
      style={{ background: T.cream, color: T.ink }}
    >
      <PromoBanner />
      <Header />

      {/* Main page body - centered flex container */}
      <main className="flex-1 flex flex-col items-center w-full gap-6">
        {/* 1. Hero banner */}
        <HeroSection />

        {/* 2. Primary carousel */}
        <BestsellersSection />

        {/* 3. Celebration categories */}
        <OccasionsSection />

        {/* 4. Bottoms Up feature showcase */}
        <BottomsUpSection />

        {/* 5. Gifting Directory lists */}
        <GiftDirectorySection />

        {/* 6. Gifts under $50 carousel */}
        <ProductCarouselSection
          title="Gifts under $50"
          products={MORE_PRODUCTS.slice(0, 6)}
        />

        {/* 7. Meaningful Mug Showcase */}
        <MugShowcaseSection />

        {/* 8. Emergency cause banner */}
        <CauseCommitmentSection />

        {/* 9. Trending searches & carousel */}
        <TrendingSearchesSection />

        {/* 10. Maker stories feature showcase */}
        <MakerStoriesSection />

        {/* 11. Core brand USPs */}
        <WhatMakesUsUncommonSection />

        {/* 12. More to love final carousel */}
        <ProductCarouselSection
          title="More to love"
          products={CURATED_PRODUCTS}
        />
      </main>

      <Footer />
    </div>
  );
}
