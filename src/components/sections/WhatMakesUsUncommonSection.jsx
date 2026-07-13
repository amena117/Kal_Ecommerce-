import { Landmark, Heart, ShieldCheck, Leaf, Truck, Smile } from "lucide-react";
import { T } from "../../constants/tokens";

const USPS = [
  {
    title: "independent makers",
    description: "Every item tells the story of the artisan who made it.",
    icon: Landmark,
  },
  {
    title: "giving back",
    description: "We donate $2 to emergency response with every purchase.",
    icon: Heart,
  },
  {
    title: "b-corp certified",
    description: "We meet the highest standards of social & environmental impact.",
    icon: ShieldCheck,
  },
  {
    title: "sustainable packaging",
    description: "Boxes made from recycled materials, printed with soy inks.",
    icon: Leaf,
  },
  {
    title: "quick & friendly shipping",
    description: "Packaged with care and shipped reliably to your door.",
    icon: Truck,
  },
  {
    title: "satisfaction guarantee",
    description: "Love your gift, or we'll make it right. No hassle returns.",
    icon: Smile,
  },
];

export default function WhatMakesUsUncommonSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12">
      <div
        className="rounded-3xl p-8 md:p-12 shadow-sm"
        style={{
          background: "#E8F0EC", // Light Sage Green
        }}
      >
        <h2
          className="ug-display text-3xl text-center mb-10 font-medium"
          style={{ color: T.pine }}
        >
          what makes us uncommon
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {USPS.map((usp) => {
            const Icon = usp.icon;
            return (
              <div key={usp.title} className="flex flex-col items-center text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "#FFFFFF" }}
                >
                  <Icon size={24} color={T.pine} />
                </div>
                <h3
                  className="ug-display text-base font-semibold mb-2 capitalize"
                  style={{ color: T.pine }}
                >
                  {usp.title}
                </h3>
                <p className="ug-body text-xs leading-relaxed" style={{ color: T.inkSoft }}>
                  {usp.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
