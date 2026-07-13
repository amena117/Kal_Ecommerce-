import { T } from "../../constants/tokens";
import { PROMO } from "../../constants/navigation";

/**
 * PromoBanner — full-width announcement strip above the header.
 * Kept at 100% width, no max-width constraint so it bleeds edge-to-edge.
 */
export default function PromoBanner() {
  return (
    <div
      className="w-full text-center text-[13px] px-4 py-2.5 leading-snug"
      style={{ background: T.goldenrod, color: T.ink }}
    >
      {PROMO.body}{" "}
      <span style={{ fontWeight: 700 }}>{PROMO.bold}</span>{" "}
      <a
        href="#"
        className="underline underline-offset-2 hover:opacity-75 transition-opacity"
      >
        {PROMO.cta}
      </a>
    </div>
  );
}
