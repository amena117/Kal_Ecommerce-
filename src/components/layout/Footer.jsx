import { T } from "../../constants/tokens";

/**
 * Footer — site-wide bottom bar.
 *
 * Layout fixes:
 * - mt-auto pushes footer to the bottom when page content is short.
 * - py-12 for generous, equal vertical padding (96px total).
 * - Flex wraps gracefully on mobile.
 */
export default function Footer() {
  return (
    <footer
      className="mt-auto border-t w-full"
      style={{ background: T.pine, borderColor: T.pine }}
    >
      <div
        className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row
                   items-center justify-between gap-4 text-sm w-full"
        style={{ color: "#D9CFA9" }}
      >
        <span
          className="ug-display text-lg"
          style={{ color: T.white, fontWeight: 500 }}
        >
         Kal Store
        </span>
        <span className="text-center md:text-right">
          © 2026 Kal Store™ LLC — 140 58th Street, Brooklyn, NY
        </span>
      </div>
    </footer>
  );
}
