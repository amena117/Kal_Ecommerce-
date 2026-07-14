import { T } from "../../constants/tokens";
import { CATEGORIES } from "../../constants/products";

/**
 * CategoriesSection — "Pretty much everything" grid of category tiles.
 * Matches the reference layout: a heading + 2×4 (desktop) / 2×2 (mobile) grid
 * of clickable category cards with gradient backgrounds and icons.
 */
export default function CategoriesSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 pt-8 pb-14">
      <h2
        className="ug-display text-3xl text-center mb-10"
        style={{ color: T.pine, fontWeight: 500 }}
      >
        Pretty much everything
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {CATEGORIES.map(({ label, icon: Icon, from, to, image }) => (
          <button
            key={label}
            className="group relative rounded-2xl overflow-hidden aspect-[4/3]
                       flex flex-col items-center justify-center gap-2
                       cursor-pointer transition-transform hover:scale-[1.02] bg-neutral-100"
          >
            {/* Background Image */}
            {image && (
              <img
                src={image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
            {/* Dark overlay */}
            <div
              className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"
            />

            {/* Relative content on top of image & overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center p-3">
              <Icon
                size={32}
                strokeWidth={1.5}
                color={T.cream}
                className="opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <span
                className="ug-body text-sm tracking-wide font-semibold uppercase"
                style={{ color: T.white }}
              >
                {label}
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
