import { T } from "../../constants/tokens";
import { PRODUCTS } from "../../constants/products";
import Scroller from "../ui/Scroller";
import ProductArt from "../ui/ProductArt";
import Stars from "../ui/Stars";

/**
 * ProductCard — individual product tile used inside the bestsellers carousel.
 *
 * @param {import("../../constants/products").Product} props
 */
function ProductCard({ name, price, was, icon, from, to, rating, count, tag }) {
  return (
    <div className="ug-card shrink-0 w-56 cursor-pointer group">
      <div className="relative">
        <ProductArt icon={icon} from={from} to={to} />
        {tag && (
          <span
            className="absolute top-2.5 left-2.5 text-[11px] px-2.5 py-1 rounded-full"
            style={{
              background: tag.bg,
              color: tag.dark ? T.white : T.pine,
              fontWeight: 600,
            }}
          >
            {tag.label}
          </span>
        )}
      </div>

      <p
        className="ug-body text-sm mt-3"
        style={{ color: T.ink, fontWeight: 500 }}
      >
        {name}
      </p>

      <div className="flex items-baseline gap-2 mt-1">
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

      <Stars rating={rating} count={count} />
    </div>
  );
}

/**
 * BestsellersSection — horizontally scrollable product carousel.
 */
export default function BestsellersSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h2
        className="ug-display text-3xl text-center mb-8"
        style={{ color: T.pine, fontWeight: 500 }}
      >
        Bestsellers for your celebrations
      </h2>

      <Scroller>
        {PRODUCTS.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </Scroller>
    </section>
  );
}
