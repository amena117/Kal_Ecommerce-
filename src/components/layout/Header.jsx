import { Search, Heart, UserRound, ShoppingCart, Sparkles } from "lucide-react";
import { T } from "../../constants/tokens";
import { NAV_LINKS, QUICK_NAV } from "../../constants/navigation";
import Scroller from "../ui/Scroller";

/**
 * Header — sticky top bar with logo, search, action icons, main nav,
 * and the dark quick-category strip below.
 *
 * Layout fixes applied:
 * - Added explicit z-50 so it always sits above page content
 * - Nav links have whitespace-nowrap to prevent wrapping
 * - Quick-nav strip has consistent py-2 padding (16px total vertical)
 * - Search input placeholder truncates gracefully with min-w-0
 */
export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b w-full"
      style={{ background: T.cream, borderColor: "#EDE6D3" }}
    >
      {/* ── Top bar ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-6 md:gap-8 w-full justify-between">
        {/* Logo */}
        <span
          className="ug-display text-xl md:text-2xl tracking-tight shrink-0"
          style={{ color: T.pine, fontWeight: 600 }}
        >
          KAl Store
        </span>

        {/* Search — min-w-0 prevents it from blowing out the flex row */}
        <div
          className="flex-1 min-w-0 max-w-xl hidden sm:flex items-center gap-2 rounded-full px-4 py-2.5 border mx-4"
          style={{ borderColor: "#DED4B4", background: T.white }}
        >
          <Search size={17} color={T.pineMid} className="shrink-0" />
          <input
            placeholder="search | personalized wedding gifts for my best friend"
            className="flex-1 min-w-0 bg-transparent outline-none text-sm truncate"
            style={{ color: T.inkSoft }}
          />
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-4 md:gap-5 shrink-0 text-sm">
          <button
            className="hidden md:flex items-center gap-1.5 hover:opacity-70 transition-opacity whitespace-nowrap"
            style={{ color: T.pineMid }}
          >
            <UserRound size={19} /> sign in
          </button>
          <button
            className="hidden md:flex items-center gap-1.5 hover:opacity-70 transition-opacity whitespace-nowrap"
            style={{ color: T.pineMid }}
          >
            <Heart size={19} /> wish list
          </button>
          <button
            className="hidden lg:flex items-center gap-1.5 hover:opacity-70 transition-opacity whitespace-nowrap"
            style={{ color: T.pineMid }}
          >
            <Sparkles size={19} /> gift finder
          </button>
          <button
            className="flex items-center gap-1.5 hover:opacity-70 transition-opacity"
            style={{ color: T.pineMid }}
          >
            <ShoppingCart size={19} />
            <span className="hidden sm:inline">cart</span>
          </button>
        </div>
      </div>

      {/* ── Main nav ────────────────────────────────────────────── */}
      <nav className="max-w-7xl mx-auto px-6 pb-3 hidden md:flex items-center gap-6 text-sm overflow-x-auto ug-scroll w-full justify-center">
        {NAV_LINKS.map((item) => (
          <a
            key={item}
            href="#"
            className="ug-nav-link shrink-0"
            style={{ color: T.pine, fontWeight: 500 }}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* ── Quick-category icon strip ────────────────────────────── */}
      <div
        className="border-b w-full"
        style={{ background: T.pine, borderColor: T.pine }}
      >
        <div className="max-w-7xl mx-auto px-6 py-2 w-full">
          <Scroller scrollAmount={200}>
            {QUICK_NAV.map(({ label, icon: Icon }) => (
              <button
                key={label}
                className="flex items-center gap-2 rounded-xl px-4 py-2.5 shrink-0
                           cursor-pointer hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <Icon size={16} color={T.goldenrod} />
                <span
                  className="text-[13px] whitespace-nowrap"
                  style={{ color: T.white }}
                >
                  {label}
                </span>
              </button>
            ))}
          </Scroller>
        </div>
      </div>
    </header>
  );
}
