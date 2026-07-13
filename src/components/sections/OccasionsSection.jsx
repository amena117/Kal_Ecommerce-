import { T } from "../../constants/tokens";
import { OCCASIONS } from "../../constants/navigation";
import Pill from "../ui/Pill";

/**
 * OccasionsSection — grid of occasion filter pills.
 *
 * Spacing fixes:
 * - pt-8 pb-16 for consistent 8px-based vertical rhythm.
 * - Divider line above section for visual separation.
 */
export default function OccasionsSection() {
  return (
    <section
      className="w-full max-w-7xl mx-auto px-6 pt-8 pb-16"
    >
      {/* Optional hairline separator */}
      <div
        className="w-full h-px mb-12"
        style={{ background: "#EDE6D3" }}
        aria-hidden="true"
      />

      <h2
        className="ug-display text-3xl text-center mb-8"
        style={{ color: T.pine, fontWeight: 500 }}
      >
        What are you celebrating?
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {OCCASIONS.map((occasion) => (
          <Pill key={occasion}>{occasion}</Pill>
        ))}
      </div>
    </section>
  );
}
