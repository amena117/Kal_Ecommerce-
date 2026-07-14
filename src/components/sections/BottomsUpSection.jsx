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
              className="relative rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center shadow-sm group bg-neutral-100"
            >
              <img
                src="https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?auto=format&fit=crop&w=400&q=80"
                alt="Woodcraft Workshop"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-300" />
              <div className="absolute top-3 right-3 bg-white/80 p-1.5 rounded-full z-10 shadow-sm">
                <Award size={18} color={T.pine} />
              </div>
            </div>
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center shadow-sm group bg-neutral-100"
            >
              <img
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=400&q=80"
                alt="Finishing Wood"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-300" />
              <div className="absolute top-3 right-3 bg-white/80 p-1.5 rounded-full z-10 shadow-sm">
                <ShieldAlert size={18} color={T.pine} />
              </div>
            </div>
          </div>
          <div
            className="relative rounded-2xl overflow-hidden flex items-center justify-center p-8 shadow-sm group bg-neutral-100"
          >
            <img
              src="https://images.unsplash.com/photo-1544045020-8a8f65882f24?auto=format&fit=crop&w=600&q=80"
              alt="Baseball Bat Mug Crafting"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/45 group-hover:bg-black/55 transition-colors duration-300" />
            <div className="relative z-10 text-center">
              <Sparkles size={48} color={T.cream} opacity={0.9} className="mx-auto mb-4" />
              <span className="ug-display text-xl block font-semibold" style={{ color: T.white }}>
                Baseball Bat Mug
              </span>
              <span className="ug-body text-xs block mt-1 tracking-wider" style={{ color: T.cream, opacity: 0.8 }}>
                Handcrafted from Solid Wood
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
