import { T } from "../../constants/tokens";

const DIRECTORY_DATA = [
  {
    title: "for the host",
    links: [
      "coasters",
      "serveware",
      "barware",
      "wine accessories",
      "party games",
      "candles",
      "kitchenware",
      "gourmet treats",
    ],
  },
  {
    title: "for the couple",
    links: [
      "wedding gifts",
      "anniversary art",
      "personalized plaques",
      "custom illustration",
      "wine boxes",
      "decor & lights",
      "cozy blankets",
      "glassware sets",
    ],
  },
  {
    title: "for the baby",
    links: [
      "newborn essentials",
      "milestone journals",
      "organic swaddles",
      "wooden blocks",
      "keepsake boxes",
      "plush blankets",
      "nursery prints",
      "parenting guides",
    ],
  },
  {
    title: "for the pet lover",
    links: [
      "custom pet portraits",
      "gourmet treats",
      "personalized bowls",
      "stylish bandanas",
      "catnip toys",
      "dog walking gear",
      "memory keepsakes",
      "cozy pet beds",
    ],
  },
];

export default function GiftDirectorySection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {DIRECTORY_DATA.map((col) => (
          <div
            key={col.title}
            className="rounded-2xl p-6 border flex flex-col items-center text-center"
            style={{
              background: "#FBF7ED",
              borderColor: "#EDE6D3",
            }}
          >
            {/* Column Header */}
            <h3
              className="ug-display text-lg mb-6 pb-2 border-b w-full"
              style={{
                color: T.persimmon,
                borderColor: "#EDE6D3",
                fontWeight: 600,
              }}
            >
              {col.title}
            </h3>

            {/* Links List */}
            <ul className="flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="ug-body text-sm hover:underline block capitalize"
                    style={{ color: T.pineMid, fontWeight: 500 }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
