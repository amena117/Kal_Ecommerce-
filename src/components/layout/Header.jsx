import { Search, Heart, UserRound, ShoppingCart, Sparkles } from "lucide-react";
import { T } from "../../constants/tokens";
import { NAV_LINKS, QUICK_NAV } from "../../constants/navigation";
import Scroller from "../ui/Scroller";

/**
 * Header — sticky top bar with logo, search, action icons, main nav, and
 * the dark quick-category strip.
 */
export default function Header() {
  return (
    <header
      className="sticky top-0 z-30 border-b"
      style={{ background: T.cream, borderColor: "#EDE6D3" }}
    >
      {/* ── Top bar ─────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-8">
        {/* Logo */}
        <span
          className="ug-display text-2xl tracking-tight shrink-0"
          style={{ color: T.pine, fontWeight: 600 }}
        >
          kal gift shop
        </span>

        {/* Search */}
        <div
          className="flex-1 hidden sm:flex items-center gap-2 rounded-full px-4 py-2.5 border"
          style={{ borderColor: "#DED4B4", background: T.white }}
        >
          <Search size={17} color={T.pineMid} />
          <input
            placeholder="search | personalized wedding gifts for my best friend"
            className="flex-1 bg-transparent outline-none text-sm"
            style={{ color: T.inkSoft }}
          />
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-5 shrink-0 text-sm">
          <button
            className="hidden md:flex items-center gap-1.5 hover:opacity-70 transition-opacity"
            style={{ color: T.pineMid }}
          >
            <UserRound size={19} /> sign in
          </button>
          <button
            className="hidden md:flex items-center gap-1.5 hover:opacity-70 transition-opacity"
            style={{ color: T.pineMid }}
          >
            <Heart size={19} /> wish list
          </button>
          <button
            className="hidden lg:flex items-center gap-1.5 hover:opacity-70 transition-opacity"
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

      {/* ── Main nav ────────────────────────────────── */}
      <nav className="max-w-7xl mx-auto px-6 pb-3 hidden md:flex gap-7 text-sm">
        {NAV_LINKS.map((item) => (
          <a
            key={item}
            href="#"
            className="ug-nav-link"
            style={{ color: T.pine, fontWeight: 500 }}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* ── Quick-category icon strip ────────────────── */}
      <div
        className="border-b"
        style={{ background: T.pine, borderColor: T.pine }}
      >
        <div className="max-w-7xl mx-auto px-6 py-1">
          <Scroller scrollAmount={200}>
            {QUICK_NAV.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-xl px-4 py-3 shrink-0
                           cursor-pointer hover:bg-white/10 transition-colors"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <Icon size={16} color={T.goldenrod} />
                <span
                  className="text-[13px] whitespace-nowrap"
                  style={{ color: T.white }}
                >
                  {label}
                </span>
              </div>
            ))}
          </Scroller>
        </div>
      </div>
    </header>
  );
}
