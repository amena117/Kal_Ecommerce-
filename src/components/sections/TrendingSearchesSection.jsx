import { T } from "../../constants/tokens";
import { CURATED_PRODUCTS } from "../../constants/products";
import Scroller from "../ui/Scroller";
import ProductArt from "../ui/ProductArt";
import Stars from "../ui/Stars";

const TRENDING_TAGS = [
  "personalized wedding gifts",
  "birthday gifts for her",
  "custom coffee mugs",
  "wooden puzzles",
  "meaningful keepsakes",
  "hostess gifts",
];

function ProductCard({ name, price, was, icon, from, to, rating, count, tag }) {
  return (
    <div className="ug-card shrink-0 w-52 cursor-pointer group">
      <div className="relative w-full">
        <ProductArt icon={icon} from={from} to={to} />
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
      </div>

      <Stars rating={rating} count={count} />
    </div>
  );
}

export default function TrendingSearchesSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12">
      <h2
        className="ug-display text-3xl w-full text-center mb-6"
        style={{ color: T.pine, fontWeight: 500 }}
      >
        Today's Trending Searches
      </h2>

      {/* Tags strip */}
      <div className="flex flex-wrap gap-2 justify-center mb-10 max-w-3xl mx-auto">
        {TRENDING_TAGS.map((tag) => (
          <button
            key={tag}
            className="px-4 py-2 rounded-full border text-xs font-semibold hover:bg-black/5 transition-colors cursor-pointer"
            style={{
              color: T.pineMid,
              borderColor: "#EDE6D3",
              background: T.cream,
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="ug-scroller-wrap">
        <Scroller>
          {CURATED_PRODUCTS.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </Scroller>
      </div>
    </section>
  );
}
