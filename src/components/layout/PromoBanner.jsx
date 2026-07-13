import { T } from "../../constants/tokens";
import { PROMO } from "../../constants/navigation";

/**
 * PromoBanner — full-width announcement strip above the header.
 */
export default function PromoBanner() {
  return (
    <div
      className="text-center text-[13px] px-4 py-2.5"
      style={{ background: T.goldenrod, color: T.ink }}
    >
      {PROMO.body}{" "}
      <span style={{ fontWeight: 700 }}>{PROMO.bold}</span>{" "}
      <a href="#" className="underline underline-offset-2">
        {PROMO.cta}
      </a>
    </div>
  );
}
