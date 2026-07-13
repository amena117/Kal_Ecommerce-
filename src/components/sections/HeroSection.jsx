import { Flower2, Gift, Sparkles } from "lucide-react";
import { T } from "../../constants/tokens";

/**
 * HeroSection — two-column marketing hero with headline, CTA, and
 * decorative product-card grid + circular badge.
 *
 * Layout fixes:
 * - Section uses pt-10 md:pt-14 + pb-16 md:pb-20.
 *   The extra bottom padding (~64–80px) fully contains the badge
 *   (-bottom-6 = 24px protrusion) so it never overlaps BestsellersSection.
 * - Grid columns are auto-centred with items-center.
 * - Heading uses overflow-visible and no fixed height.
 * - The visual column (relative) gets ug-hero-visual (pb-10) from CSS
 *   so the badge is within its own stacking context.
 * - Circular badge stays absolute but is now visually inside the hero.
 */
export default function HeroSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 pt-10 md:pt-14 pb-16 md:pb-20">
      <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* ── Copy ──────────────────────────────────────────────── */}
        <div className="flex flex-col items-start">
          <p
            className="ug-body text-xs tracking-[0.18em] uppercase mb-4"
            style={{ color: T.persimmon, fontWeight: 700 }}
          >
            Kal for every occasion
          </p>

          {/* Heading: overflow-visible, no fixed height, line height tight */}
          <h1
            className="ug-display leading-none"
            style={{ color: T.pine }}
          >
            <span
              className="block text-5xl sm:text-6xl md:text-7xl"
              style={{ fontWeight: 500 }}
            >
              unforgettable
            </span>
            <span
              className="block text-5xl sm:text-6xl md:text-7xl"
              style={{ fontWeight: 500 }}
            >
              gifts
            </span>
          </h1>

          <p
            className="mt-4 text-lg md:text-xl"
            style={{ color: T.ink, fontWeight: 500 }}
          >
            for big moments or just because
          </p>

          <button
            className="mt-8 px-7 py-3.5 rounded-full text-sm tracking-wide
                       hover:opacity-90 transition-opacity"
            style={{ background: T.pine, color: T.white, fontWeight: 600 }}
          >
            shop gifts
          </button>
        </div>

        {/* ── Visual ────────────────────────────────────────────── */}
        {/*
          ug-hero-visual adds pb-10 (40px) via CSS so the badge never
          protrudes below this column and into the next section.
        */}
        <div className="relative ug-hero-visual">
          {/* Gradient illustration panel */}
          <div
            className="rounded-[2rem] aspect-[4/3] flex items-center
                       justify-center gap-3 md:gap-4 p-6 md:p-8"
            style={{
              background: `linear-gradient(135deg, #F3E7CE, ${T.goldenrodDeep})`,
            }}
          >
            {[
              { Icon: Flower2, bg: "#DCEFE3" },
              { Icon: Gift,    bg: "#F6D8D2" },
              { Icon: Sparkles, bg: "#DDE9F2" },
            ].map(({ Icon, bg }, i) => (
              <div
                key={i}
                className="w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-44
                           rounded-xl flex items-center justify-center shadow-sm"
                style={{ background: bg }}
              >
                <Icon size={32} color={T.pine} opacity={0.7} />
              </div>
            ))}
          </div>

          {/* Circular badge — absolute within the visual column.
              bottom-0 + pb-10 on parent → appears just inside the bottom
              of the illustration area, not below BestsellersSection. */}
          <div
            className="absolute -bottom-4 -left-4 w-28 h-28 md:w-32 md:h-32
                       rounded-full flex flex-col items-center justify-center
                       text-center px-3 shadow-lg z-10"
            style={{ background: T.sky, color: T.pine }}
          >
            <span
              className="text-[10px] md:text-[11px] uppercase tracking-wide"
              style={{ fontWeight: 600 }}
            >
              special delivery
            </span>
            <span
              className="ug-display text-base md:text-lg leading-tight mt-0.5"
              style={{ fontWeight: 600 }}
            >
              uncommon
              <br />
              surprises
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
