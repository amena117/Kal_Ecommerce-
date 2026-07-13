import {
  Coffee,
  Cookie,
  Sparkles,
  Flower2,
  Compass,
  FlameKindling,
} from "lucide-react";
import { T } from "./tokens";

/** @typedef {{ name: string, price: string, was: string, icon: React.ElementType, from: string, to: string, rating: number, count: number, tag?: { label: string, bg: string, dark?: boolean } }} Product */

/** @type {Product[]} */
export const PRODUCTS = [
  {
    name: "Wish You Lived Next Door Mug",
    price: "$48.00",
    was: "$75.00",
    icon: Coffee,
    from: "#F7D9C4",
    to: "#F0B99A",
    rating: 4.9,
    count: 97,
  },
  {
    name: "Custom Message Shortbread Cookies",
    price: "$42.00",
    was: "$65.00",
    icon: Cookie,
    from: "#F3E2B8",
    to: "#E7C77D",
    rating: 4.9,
    count: 312,
    tag: { label: "Customizable", bg: T.sky },
  },
  {
    name: "Stained Glass Butterflies with a Message",
    price: "$74.00",
    was: "$115.00",
    icon: Sparkles,
    from: "#D6E9E6",
    to: "#A9CFC9",
    rating: 4.4,
    count: 10,
    tag: { label: "Low Stock", bg: T.poppy, dark: true },
  },
  {
    name: "Glass Flowers with a Message",
    price: "$45.00",
    was: "$70.00",
    icon: Flower2,
    from: "#EFD9E8",
    to: "#DCB4D0",
    rating: 4.6,
    count: 38,
  },
  {
    name: "Personalized Engraved Compass",
    price: "$50.00",
    was: "$78.00",
    icon: Compass,
    from: "#E4D9C8",
    to: "#C7B18F",
    rating: 4.8,
    count: 49,
    tag: { label: "Customizable", bg: T.sky },
  },
  {
    name: "The Perfect Match Wood Matchbox",
    price: "$38.00",
    was: "$59.00",
    icon: FlameKindling,
    from: "#F0E0D2",
    to: "#DCB791",
    rating: 4.9,
    count: 14,
    tag: { label: "Customizable", bg: T.sky },
  },
];
