import { T } from "../../constants/tokens";

export default function CauseCommitmentSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12">
      <div
        className="rounded-3xl p-8 md:p-12 text-center flex flex-col items-center justify-center shadow-sm"
        style={{
          background: `linear-gradient(135deg, #FDF7E7, ${T.goldenrod})`,
        }}
      >
        <p
          className="ug-body text-xs tracking-[0.2em] uppercase mb-4 font-bold"
          style={{ color: T.persimmon }}
        >
          our commitment
        </p>
        <h2
          className="ug-display text-3xl md:text-4xl mb-4 font-medium"
          style={{ color: T.pine }}
        >
          Emergency earthquake response
        </h2>
        <p
          className="ug-body text-sm md:text-base max-w-2xl leading-relaxed mb-8"
          style={{ color: T.ink }}
        >
          In response to recent devastating earthquakes, we are partnering with global relief organizations to provide shelter, clean water, and emergency medical aid to affected communities. Select a donation partner at checkout and we'll match it.
        </p>
        <button
          className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
          style={{ background: T.pine, color: T.white }}
        >
          how we donate
        </button>
      </div>
    </section>
  );
}
