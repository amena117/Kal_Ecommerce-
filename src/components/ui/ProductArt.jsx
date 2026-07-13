import { T } from "../../constants/tokens";

/**
 * ProductArt — gradient placeholder thumbnail with a centred lucide icon.
 *
 * Fixes:
 * - overflow-hidden so icon never bleeds past the rounded corners.
 * - Explicit aspect-square so height always matches width.
 * - w-full so the art fills the card column exactly.
 *
 * @param {{ icon: React.ElementType, from: string, to: string }} props
 */
export default function ProductArt({ icon: Icon, from, to }) {
  return (
    <div
      className="w-full aspect-square rounded-2xl overflow-hidden
                 flex items-center justify-center
                 ug-card-img transition-transform duration-300"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <Icon size={44} strokeWidth={1.4} color={T.pine} opacity={0.75} />
    </div>
  );
}
