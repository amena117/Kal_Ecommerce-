import { Coffee, Heart, Moon, Sun, Trees, Smile } from "lucide-react";
import { T } from "../../constants/tokens";

export default function MugShowcaseSection() {
  const mugs = [
    { icon: Coffee, image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80" },
    { icon: Heart, image: "https://images.unsplash.com/photo-1517256064527-09c53b2d0bc6?auto=format&fit=crop&w=400&q=80" },
    { icon: Moon, image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&q=80" },
    { icon: Sun, image: "https://images.unsplash.com/photo-1520606206791-47ea7dfdacf6?auto=format&fit=crop&w=400&q=80" },
    { icon: Trees, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80" },
    { icon: Smile, image: "https://images.unsplash.com/photo-1534531173927-aeb928d54385?auto=format&fit=crop&w=400&q=80" },
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
                className="relative aspect-square rounded-2xl overflow-hidden shadow-sm hover:scale-105 transition-transform group bg-neutral-100"
              >
                <img
                  src={mug.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors duration-300" />
                <div className="absolute top-2.5 right-2.5 bg-white/80 p-1.5 rounded-full z-10 shadow-sm">
                  <Icon size={16} color={T.pine} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
