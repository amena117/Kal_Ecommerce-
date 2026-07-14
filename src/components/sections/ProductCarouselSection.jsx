import { T } from "../../constants/tokens";
import Scroller from "../ui/Scroller";
import ProductArt from "../ui/ProductArt";
import Stars from "../ui/Stars";

function ProductCard({ name, price, was, icon, from, to, rating, count, tag, image }) {
  return (
    <div className="ug-card shrink-0 w-52 cursor-pointer group">
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

export default function ProductCarouselSection({ title, products }) {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12">
      <h2
        className="ug-display text-3xl w-full text-center mb-10"
        style={{ color: T.pine, fontWeight: 500 }}
      >
        {title}
      </h2>

      <div className="ug-scroller-wrap">
        <Scroller>
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </Scroller>
      </div>
    </section>
  );
}
