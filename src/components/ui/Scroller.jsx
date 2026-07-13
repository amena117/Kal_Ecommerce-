import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { T } from "../../constants/tokens";

/**
 * Scroller — horizontal scroll container with prev/next arrow buttons.
 * Arrows are hidden on mobile (scroll by touch/drag).
 *
 * @param {{ children: React.ReactNode, scrollAmount?: number }} props
 */
export default function Scroller({ children, scrollAmount = 320 }) {
  const ref = useRef(null);

  const scroll = (dir) => {
    ref.current?.scrollBy({ left: dir * scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Left arrow */}
      <button
        onClick={() => scroll(-1)}
        aria-label="Scroll left"
        className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10
                   w-10 h-10 rounded-full bg-white shadow-md items-center
                   justify-center border hover:shadow-lg transition-shadow"
        style={{ borderColor: "#eee" }}
      >
        <ChevronLeft size={18} color={T.pine} />
      </button>

      {/* Scrollable track */}
      <div
        ref={ref}
        className="flex gap-5 overflow-x-auto ug-scroll scroll-smooth px-1 py-1"
      >
        {children}
      </div>

      {/* Right arrow */}
      <button
        onClick={() => scroll(1)}
        aria-label="Scroll right"
        className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10
                   w-10 h-10 rounded-full bg-white shadow-md items-center
                   justify-center border hover:shadow-lg transition-shadow"
        style={{ borderColor: "#eee" }}
      >
        <ChevronRight size={18} color={T.pine} />
      </button>
    </div>
  );
}
