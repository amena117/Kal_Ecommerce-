import { T } from "../../constants/tokens";
import { OCCASIONS } from "../../constants/navigation";
import Pill from "../ui/Pill";

/**
 * OccasionsSection — grid of occasion filter pills.
 */
export default function OccasionsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
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
