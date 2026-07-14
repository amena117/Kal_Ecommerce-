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
            className="relative rounded-[2rem] overflow-hidden aspect-[3/4] flex flex-col items-center justify-center p-6 text-center shadow-sm group bg-neutral-100"
          >
            <img
              src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&w=400&q=80"
              alt="Dave & Sarah"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/45 group-hover:bg-black/55 transition-colors duration-300" />
            <div className="relative z-10">
              <Users size={32} color={T.cream} opacity={0.9} className="mx-auto mb-3" />
              <span className="ug-display text-lg font-semibold block" style={{ color: T.white }}>
                Dave & Sarah
              </span>
              <span className="ug-body text-xs mt-1 block tracking-wider uppercase font-medium" style={{ color: T.cream, opacity: 0.9 }}>
                Mug Artisans
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div
              className="relative rounded-2xl overflow-hidden flex-1 flex items-center justify-center shadow-sm group bg-neutral-100"
            >
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
                alt="Maker Smile"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute top-2.5 right-2.5 bg-white/80 p-1.5 rounded-full z-10 shadow-sm">
                <Smile size={16} color={T.pine} />
              </div>
            </div>
            <div
              className="relative rounded-2xl overflow-hidden flex-1 flex items-center justify-center shadow-sm group bg-neutral-100"
            >
              <img
                src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=400&q=80"
                alt="Maker Detail Work"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute top-2.5 right-2.5 bg-white/80 p-1.5 rounded-full z-10 shadow-sm">
                <Heart size={16} color={T.pine} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
