import { T } from "../../constants/tokens";

/**
 * Pill — occasion/filter button chip.
 *
 * @param {{ children: React.ReactNode, active?: boolean }} props
 */
export default function Pill({ children, active = false }) {
  return (
    <button
      className="ug-body text-sm px-5 py-3 rounded-2xl whitespace-nowrap transition-colors hover:brightness-95 focus-visible:outline-none focus-visible:ring-2"
      style={{
        background: active ? T.pine : T.goldenrod,
        color: active ? T.white : T.pine,
        fontWeight: 600,
      }}
    >
      {children}
    </button>
  );
}
