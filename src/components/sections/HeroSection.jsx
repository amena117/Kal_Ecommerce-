import { Flower2, Gift, Sparkles } from "lucide-react";
import { T } from "../../constants/tokens";

/**
 * HeroSection — two-column marketing hero with headline, CTA, and
 * decorative product-card grid + circular badge.
 */
export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* ── Copy ─────────────────────────────────── */}
        <div>
          <p
            className="ug-body text-xs tracking-[0.18em] uppercase mb-4"
            style={{ color: T.persimmon, fontWeight: 700 }}
          >
            kal gifts for every occasion
          </p>
          <h1
            className="ug-display leading-[0.95]"
            style={{ color: T.pine }}
          >
            <span
              className="block text-6xl md:text-7xl"
              style={{ fontWeight: 500 }}
            >
              unforgettable
            </span>
            <span
              className="block text-6xl md:text-7xl"
              style={{ fontWeight: 500 }}
            >
              gifts
            </span>
          </h1>
          <p className="mt-4 text-xl" style={{ color: T.ink, fontWeight: 500 }}>
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

        {/* ── Visual ───────────────────────────────── */}
        <div className="relative">
          <div
            className="rounded-[2rem] aspect-[4/3] flex items-center justify-center gap-4 p-8"
            style={{
              background: `linear-gradient(135deg, #F3E7CE, ${T.goldenrodDeep})`,
            }}
          >
            {[
              { Icon: Flower2, bg: "#DCEFE3" },
              { Icon: Gift, bg: "#F6D8D2" },
              { Icon: Sparkles, bg: "#DDE9F2" },
            ].map(({ Icon, bg }, i) => (
              <div
                key={i}
                className="w-28 h-40 md:w-32 md:h-44 rounded-xl flex items-center
                           justify-center shadow-sm"
                style={{ background: bg }}
              >
                <Icon size={34} color={T.pine} opacity={0.7} />
              </div>
            ))}
          </div>

          {/* Circular badge overlay */}
          <div
            className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full flex flex-col
                       items-center justify-center text-center px-3 shadow-lg"
            style={{ background: T.sky, color: T.pine }}
          >
            <span
              className="text-[11px] uppercase tracking-wide"
              style={{ fontWeight: 600 }}
            >
              special delivery
            </span>
            <span
              className="ug-display text-lg leading-tight mt-0.5"
              style={{ fontWeight: 600 }}
            >
              kal
              <br />
              surprises
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
