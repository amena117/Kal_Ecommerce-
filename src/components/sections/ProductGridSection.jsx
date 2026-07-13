import { T } from "../../constants/tokens";
import { MORE_PRODUCTS } from "../../constants/products";
import ProductArt from "../ui/ProductArt";
import Stars from "../ui/Stars";

/**
 * GridProductCard — product card used in grid layouts (not carousels).
 * Fills the grid cell width instead of being a fixed shrink-0 size.
 */
function GridProductCard({ name, price, was, icon, from, to, rating, count, tag }) {
  return (
    <div className="ug-card cursor-pointer group">
      <div className="relative w-full">
        <ProductArt icon={icon} from={from} to={to} />
        {tag && (
          <span
            className="absolute top-2.5 left-2.5 text-[11px] px-2.5 py-1
                       rounded-full font-semibold leading-none"
            style={{
              background: tag.bg,
              color: tag.dark ? T.white : T.pine,
            }}
          >
            {tag.label}
          </span>
        )}
      </div>
      <p
        className="ug-card-name ug-body text-sm mt-3 leading-snug"
        style={{ color: T.ink, fontWeight: 500 }}
      >
        {name}
      </p>
      <div className="flex items-baseline gap-2 mt-2">
        <span className="text-sm" style={{ color: T.persimmon, fontWeight: 700 }}>
          {price}
        </span>
        {was && (
          <span
            className="text-xs line-through"
            style={{ color: T.inkSoft, opacity: 0.6 }}
          >
            {was}
          </span>
        )}
      </div>
      <Stars rating={rating} count={count} />
    </div>
  );
}

/**
 * ProductGridSection — multi-row product grid, showing 4 columns on desktop.
 * Used for "More Bestsellers" and similar sections visible in the reference.
 */
export default function ProductGridSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 pt-8 pb-14">
      <h2
        className="ug-display text-3xl text-center mb-10"
        style={{ color: T.pine, fontWeight: 500 }}
      >
        More to explore
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {MORE_PRODUCTS.map((product) => (
          <GridProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
}
