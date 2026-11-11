import { DELIVERY_PHOTOS } from "./deliveries";

export interface Project {
  id: string;
  title: string;
  location: string;
  category: "Residential" | "Commercial" | "Apartment" | "Farmhouse";
  /** Omitted when the built-up area isn't confirmed; the UI hides it. */
  area?: string;
  year: string;
  brief: string;
  outcome: string;
  cover: string;
  images: string[];
}

export const PROJECTS: Project[] = [
  /* ── Residential ─────────────────────────────────────────────── */
  {
    // On-site delivery photos: public/assets/deliveries/contemporary-duplex-villa
    id: "contemporary-duplex-villa",
    title: "Contemporary Duplex Villa",
    location: "Karnataka",
    category: "Residential",
    year: "2026",
    brief:
      "A two-storey family villa built around a double-height stone-clad atrium with a water feature, finished in walnut, white lacquer and soft cove lighting.",
    outcome:
      "A handleless walnut-and-white kitchen, a mural-wall family lounge, study joinery with lit shelving, a timber staircase with glass balustrade, and bedrooms with wallpaper feature walls and full-height wardrobes.",
    cover: "/assets/deliveries/contemporary-duplex-villa/11-living.webp",
    images: DELIVERY_PHOTOS["contemporary-duplex-villa"],
  },

  /* ── Farmhouse ────────────────────────────────────────────────── */
  {
    // On-site delivery photos: public/assets/deliveries/pavilion-farm-cottage
    id: "pavilion-farm-cottage",
    title: "Pavilion Farm Cottage",
    location: "Karnataka",
    category: "Farmhouse",
    year: "2026",
    brief:
      "A compact two-storey cottage in red brick, crowned with an open-sided pavilion terrace under a tiled hip roof.",
    outcome:
      "A lawn-front verandah with granite pillars and a patterned-tile ceiling, and a string-lit rooftop pavilion for evenings outdoors.",
    cover: "/assets/deliveries/pavilion-farm-cottage/01-exterior.webp",
    images: DELIVERY_PHOTOS["pavilion-farm-cottage"],
  },
  {
    // On-site delivery photos: public/assets/deliveries/mango-orchard-farmhouse
    id: "mango-orchard-farmhouse",
    title: "Mango Orchard Farmhouse",
    location: "Karnataka",
    category: "Farmhouse",
    year: "2026",
    brief:
      "A single-storey farmhouse set among mature mango trees, with exposed-brick walls, a shaded verandah and a steel-framed rooftop deck.",
    outcome:
      "Stone pathways, a fire-pit courtyard and garden benches outside; inside, exposed brick, teak-toned furniture and an open living and dining hall.",
    cover: "/assets/deliveries/mango-orchard-farmhouse/01-exterior.webp",
    images: DELIVERY_PHOTOS["mango-orchard-farmhouse"],
  },
  {
    // On-site delivery photos: public/assets/deliveries/exposed-brick-farmhouse
    id: "exposed-brick-farmhouse",
    title: "Exposed-Brick Farmhouse",
    location: "Karnataka",
    category: "Farmhouse",
    year: "2026",
    brief:
      "A farmhouse with a hip-roofed rooftop pavilion, brick-clad walls and stepping-stone landscaping laid into fresh lawns.",
    outcome:
      "Brick-walled bedrooms with warm wall lights, an open living and dining hall, and a black-steel staircase up to a covered terrace with a patterned ceiling.",
    cover: "/assets/deliveries/exposed-brick-farmhouse/01-exterior.webp",
    images: DELIVERY_PHOTOS["exposed-brick-farmhouse"],
  },
];