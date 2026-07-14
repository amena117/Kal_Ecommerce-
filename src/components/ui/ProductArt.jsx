import { T } from "../../constants/tokens";

/**
 * ProductArt — image placeholder or gradient thumbnail with a centred icon.
 *
 * Fixes:
 * - overflow-hidden so icon/image never bleeds past the rounded corners.
 * - Explicit aspect-square so height always matches width.
 * - w-full so the art fills the card column exactly.
 *
 * @param {{ icon?: React.ElementType, from: string, to: string, image?: string }} props
 */
export default function ProductArt({ icon: Icon, from, to, image }) {
  if (image) {
    return (
      <div className="w-full aspect-square rounded-2xl overflow-hidden ug-card-img transition-transform duration-300 relative bg-neutral-100">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div
      className="w-full aspect-square rounded-2xl overflow-hidden
                 flex items-center justify-center
                 ug-card-img transition-transform duration-300"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      {Icon && <Icon size={44} strokeWidth={1.4} color={T.pine} opacity={0.75} />}
    </div>
  );
}
