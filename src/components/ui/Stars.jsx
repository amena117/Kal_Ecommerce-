import { T } from "../../constants/tokens";

/**
 * Stars — star rating display with filled/unfilled segments.
 *
 * @param {{ rating: number, count: number }} props
 */
export default function Stars({ rating, count }) {
  const filled = Math.round(rating);
  return (
    <div className="flex items-center gap-1 mt-1.5">
      <span className="ug-body text-[13px]" style={{ color: T.pineMid }}>
        {"★★★★★".slice(0, filled)}
        <span style={{ opacity: 0.25 }}>{"★★★★★".slice(filled)}</span>
      </span>
      <span className="ug-body text-xs" style={{ color: T.inkSoft }}>
        {count}
      </span>
    </div>
  );
}
