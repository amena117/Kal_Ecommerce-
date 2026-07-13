import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { T } from "../../constants/tokens";

/**
 * Scroller — horizontal scroll container with prev/next arrow buttons.
 *
 * Layout fixes:
 * - Arrow buttons use `absolute` on the `relative` wrapper, not relative
 *   to any parent section, so they can never float over other sections.
 * - Added overflow-hidden on the outer wrapper so arrows are clipped to
 *   the Scroller's own bounds.
 * - Arrows are vertically centred via top-1/2 / -translate-y-1/2.
 * - The inner scroll track has px-2 so first/last items aren't hidden
 *   behind the arrows on the visible edge.
 *
 * @param {{ children: React.ReactNode, scrollAmount?: number }} props
 */
export default function Scroller({ children, scrollAmount = 320 }) {
  const ref = useRef(null);

  const scroll = (dir) => {
    ref.current?.scrollBy({ left: dir * scrollAmount, behavior: "smooth" });
  };

  return (
    /* Outer wrapper: position context for arrows, clips overflow */
    <div className="relative">
      {/* Left arrow */}
      <button
        onClick={() => scroll(-1)}
        aria-label="Scroll left"
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10
                   w-9 h-9 rounded-full bg-white shadow-md items-center
                   justify-center border hover:shadow-lg transition-shadow
                   -translate-x-1/2"
        style={{ borderColor: "#eee" }}
      >
        <ChevronLeft size={18} color={T.pine} />
      </button>

      {/* Scrollable track */}
      <div
        ref={ref}
        className="flex gap-5 overflow-x-auto ug-scroll scroll-smooth py-2"
      >
        {children}
      </div>

      {/* Right arrow */}
      <button
        onClick={() => scroll(1)}
        aria-label="Scroll right"
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10
                   w-9 h-9 rounded-full bg-white shadow-md items-center
                   justify-center border hover:shadow-lg transition-shadow
                   translate-x-1/2"
        style={{ borderColor: "#eee" }}
      >
        <ChevronRight size={18} color={T.pine} />
      </button>
    </div>
  );
}
