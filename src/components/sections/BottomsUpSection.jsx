import { Award, ShieldAlert, Sparkles } from "lucide-react";
import { T } from "../../constants/tokens";

export default function BottomsUpSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Left Column - Copy */}
        <div className="flex flex-col items-start order-2 md:order-1">
          <p
            className="ug-body text-xs tracking-[0.18em] uppercase mb-4"
            style={{ color: T.persimmon, fontWeight: 700 }}
          >
            staff picks
          </p>
          <h2
            className="ug-display text-4xl md:text-5xl leading-tight mb-4"
            style={{ color: T.pine, fontWeight: 500 }}
          >
            Bottoms and bottoms-up
          </h2>
          <p
            className="ug-body text-base leading-relaxed mb-8"
            style={{ color: T.inkSoft }}
          >
            The baseball bat mug. Hand-made from solid wood, customizable with their favorite team, and ready for a cold one. Meet the maker of these game-day favorites.
          </p>
          <button
            className="px-7 py-3.5 rounded-full text-sm tracking-wide hover:opacity-90 transition-opacity"
            style={{ background: T.pine, color: T.white, fontWeight: 600 }}
          >
            meet the makers
          </button>
        </div>

        {/* Right Column - Beautiful Illustration Layout */}
        <div className="grid grid-cols-2 gap-4 order-1 md:order-2">
          <div className="flex flex-col gap-4">
            <div
              className="rounded-2xl aspect-[4/3] flex items-center justify-center p-6 shadow-sm"
              style={{ background: "#F5E6D0" }}
            >
              <Award size={48} color={T.pine} opacity={0.6} />
            </div>
            <div
              className="rounded-2xl aspect-[4/3] flex items-center justify-center p-6 shadow-sm"
              style={{ background: "#E0E8F2" }}
            >
              <ShieldAlert size={48} color={T.pine} opacity={0.6} />
            </div>
          </div>
          <div
            className="rounded-2xl flex items-center justify-center p-8 shadow-sm"
            style={{
              background: `linear-gradient(135deg, #F3E2B8, ${T.goldenrodDeep})`,
            }}
          >
            <div className="text-center">
              <Sparkles size={64} color={T.pine} opacity={0.7} className="mx-auto mb-4" />
              <span className="ug-display text-lg block font-semibold" style={{ color: T.pine }}>
                Baseball Bat Mug
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
