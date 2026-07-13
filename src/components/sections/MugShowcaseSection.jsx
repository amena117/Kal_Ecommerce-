import { Coffee, Heart, Moon, Sun, Trees, Smile } from "lucide-react";
import { T } from "../../constants/tokens";

export default function MugShowcaseSection() {
  const mugs = [
    { icon: Coffee, bg: "#F7D9C4" },
    { icon: Heart, bg: "#F6D8D2" },
    { icon: Moon, bg: "#DDE9F2" },
    { icon: Sun, bg: "#F3E2B8" },
    { icon: Trees, bg: "#DCEFE3" },
    { icon: Smile, bg: "#EFD9E8" },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Left Column - Copy */}
        <div className="flex flex-col items-start">
          <p
            className="ug-body text-xs tracking-[0.18em] uppercase mb-4"
            style={{ color: T.persimmon, fontWeight: 700 }}
          >
            family favorites
          </p>
          <h2
            className="ug-display text-4xl md:text-5xl leading-tight mb-4"
            style={{ color: T.pine, fontWeight: 500 }}
          >
            And what they mean
          </h2>
          <p
            className="ug-body text-base leading-relaxed mb-8"
            style={{ color: T.inkSoft }}
          >
            Mugs that celebrate family, friendships, and the places you call home. Every design holds a special meaning, handcrafted for long morning chats and cozy evenings.
          </p>
          <button
            className="px-7 py-3.5 rounded-full text-sm tracking-wide hover:opacity-90 transition-opacity"
            style={{ background: T.pine, color: T.white, fontWeight: 600 }}
          >
            shop the collection
          </button>
        </div>

        {/* Right Column - Grid of Mugs */}
        <div className="grid grid-cols-3 gap-4">
          {mugs.map((mug, index) => {
            const Icon = mug.icon;
            return (
              <div
                key={index}
                className="aspect-square rounded-2xl flex items-center justify-center p-4 shadow-sm hover:scale-105 transition-transform"
                style={{ background: mug.bg }}
              >
                <Icon size={32} color={T.pine} opacity={0.7} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
