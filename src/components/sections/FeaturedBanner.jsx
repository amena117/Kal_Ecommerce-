import { Coffee, Gift, Heart } from "lucide-react";
import { T } from "../../constants/tokens";

/**
 * FeaturedBanner — full-width promotional showcase matching the large
 * mug/product banner visible in the reference screenshot.
 * Uses a gradient background with floating product icons.
 */
export default function FeaturedBanner() {
  return (
    <section
      className="w-full overflow-hidden"
      style={{ background: `linear-gradient(135deg, #F3E7CE, ${T.goldenrodDeep})` }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Product showcase */}
          <div className="flex items-center justify-center gap-4 md:gap-6">
            {[
              { Icon: Coffee, bg: "#F7D9C4", size: "w-32 h-44 md:w-40 md:h-56" },
              { Icon: Gift, bg: "#DCEFE3", size: "w-36 h-48 md:w-44 md:h-60" },
              { Icon: Heart, bg: "#F6D8D2", size: "w-32 h-44 md:w-40 md:h-56" },
            ].map(({ Icon, bg, size }, i) => (
              <div
                key={i}
                className={`${size} rounded-2xl flex items-center justify-center shadow-md
                            transition-transform hover:scale-105`}
                style={{ background: bg }}
              >
                <Icon
                  size={40}
                  strokeWidth={1.4}
                  color={T.pine}
                  className="opacity-70"
                />
              </div>
            ))}
          </div>

          {/* Right: Copy */}
          <div className="text-center md:text-left">
            <p
              className="ug-body text-xs tracking-[0.18em] uppercase mb-3"
              style={{ color: T.persimmon, fontWeight: 700 }}
            >
              staff picks
            </p>
            <h2
              className="ug-display text-4xl md:text-5xl leading-tight"
              style={{ color: T.pine, fontWeight: 500 }}
            >
              the gift that
              <br />
              keeps on giving
            </h2>
            <p
              className="mt-4 text-base md:text-lg"
              style={{ color: T.ink, fontWeight: 400 }}
            >
              Our team's favorite mugs, home goods, and personalized keepsakes — all in one place.
            </p>
            <button
              className="mt-8 px-7 py-3.5 rounded-full text-sm tracking-wide
                         hover:opacity-90 transition-opacity"
              style={{ background: T.pine, color: T.white, fontWeight: 600 }}
            >
              shop the edit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
