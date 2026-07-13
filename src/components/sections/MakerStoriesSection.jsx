import { Smile, Users, Heart } from "lucide-react";
import { T } from "../../constants/tokens";

export default function MakerStoriesSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Left Column - Copy */}
        <div className="flex flex-col items-start order-2 md:order-1">
          <p
            className="ug-body text-xs tracking-[0.18em] uppercase mb-4"
            style={{ color: T.persimmon, fontWeight: 700 }}
          >
            uncommon stories
          </p>
          <h2
            className="ug-display text-4xl md:text-5xl leading-tight mb-4"
            style={{ color: T.pine, fontWeight: 500 }}
          >
            Meet the makers behind the gifts
          </h2>
          <p
            className="ug-body text-base leading-relaxed mb-8"
            style={{ color: T.inkSoft }}
          >
            Behind every uncommon find is an extraordinary story. We support independent creators, artists, and small-batch makers around the globe, helping them bring their unique visions directly to you.
          </p>
          <button
            className="px-7 py-3.5 rounded-full text-sm tracking-wide hover:opacity-90 transition-opacity"
            style={{ background: T.pine, color: T.white, fontWeight: 600 }}
          >
            read their stories
          </button>
        </div>

        {/* Right Column - Maker Portraits illustration layout */}
        <div className="grid grid-cols-2 gap-4 order-1 md:order-2">
          <div
            className="rounded-[2rem] aspect-[3/4] flex flex-col items-center justify-center p-6 text-center shadow-sm"
            style={{ background: "#DCEFE3" }}
          >
            <Users size={48} color={T.pine} opacity={0.6} className="mb-4" />
            <span className="ug-display text-base font-semibold block" style={{ color: T.pine }}>
              Dave & Sarah
            </span>
            <span className="ug-body text-xs mt-1" style={{ color: T.pineMid }}>
              Mug Artisans
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <div
              className="rounded-2xl flex-1 flex items-center justify-center p-4 shadow-sm"
              style={{ background: "#F6D8D2" }}
            >
              <Smile size={36} color={T.pine} opacity={0.6} />
            </div>
            <div
              className="rounded-2xl flex-1 flex items-center justify-center p-4 shadow-sm"
              style={{ background: "#DDE9F2" }}
            >
              <Heart size={36} color={T.pine} opacity={0.6} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
