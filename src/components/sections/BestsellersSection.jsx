import { T } from "../../constants/tokens";
import { PRODUCTS } from "../../constants/products";
import Scroller from "../ui/Scroller";
import ProductArt from "../ui/ProductArt";
import Stars from "../ui/Stars";

/**
 * ProductCard — individual product tile used inside the bestsellers carousel.
 *
 * Layout fixes:
 * - ug-card (flex flex-col) so every card stretches to the tallest sibling.
 * - Fixed w-52 (208px) so all cards are identical width.
 * - Name uses ug-card-name (flex-1) to push price/stars to the bottom.
 * - Removed magic mt/mb; uses a gap-y system instead.
 *
 * @param {import("../../constants/products").Product} props
 */
function ProductCard({ name, price, was, icon, from, to, rating, count, tag, image }) {
  return (
    /* ug-card = flex flex-col (from index.css) */
    <div className="ug-card shrink-0 w-52 cursor-pointer group">
      {/* Image */}
      <div className="relative w-full">
        <ProductArt icon={icon} from={from} to={to} image={image} />
        {tag && (
          <span
            className="absolute top-2.5 left-2.5 text-[11px] px-2.5 py-1 rounded-full font-semibold leading-none"
            style={{
              background: tag.bg,
              color: tag.dark ? T.white : T.pine,
            }}
          >
            {tag.label}
          </span>
        )}
      </div>

      {/* Name — flex-1 pushes price+stars to bottom */}
      <p
        className="ug-card-name ug-body text-sm mt-3 leading-snug"
        style={{ color: T.ink, fontWeight: 500 }}
      >
        {name}
      </p>

      {/* Price row */}
      <div className="flex items-baseline gap-2 mt-2">
        <span className="text-sm" style={{ color: T.persimmon, fontWeight: 700 }}>
          {price}
        </span>
        <span
          className="text-xs line-through"
          style={{ color: T.inkSoft, opacity: 0.6 }}
        >
          {was}
        </span>
      </div>

      {/* Stars */}
      <Stars rating={rating} count={count} />
    </div>
  );
}

/**
 * BestsellersSection — horizontally scrollable product carousel.
 *
 * Spacing fixes:
 * - pt-16 so there's clean separation from the hero's badge overflow.
 * - pb-12 before the next section.
 * - Scroller is wrapped in ug-scroller-wrap to give arrows breathing room.
 */
export default function BestsellersSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 pt-16 pb-12">
      <h2
        className="ug-display text-3xl w-full text-center mb-10"
        style={{ color: T.pine, fontWeight: 500 }}
      >
        Bestsellers for your celebrations
      </h2>

      {/* ug-scroller-wrap adds mx-8 on desktop so arrows fit inside view */}
      <div className="ug-scroller-wrap">
        <Scroller>
          {PRODUCTS.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </Scroller>
      </div>
    </section>
  );
}
