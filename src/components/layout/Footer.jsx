import { T } from "../../constants/tokens";

/**
 * Footer — site-wide bottom bar.
 */
export default function Footer() {
  return (
    <footer
      className="mt-8 border-t"
      style={{ background: T.pine, borderColor: T.pine }}
    >
      <div
        className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row
                   items-center justify-between gap-4 text-sm"
        style={{ color: "#D9CFA9" }}
      >
        <span
          className="ug-display text-lg"
          style={{ color: T.white, fontWeight: 500 }}
        >
          kal gift shop
        </span>
        <span>© 2026 Kal Gift Shop — All rights reserved.</span>
      </div>
    </footer>
  );
}
