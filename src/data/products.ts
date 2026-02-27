export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  desc: string;
  img: string;
  specs: ProductSpec[];
  badge?: string;
  features: string[];
  // Pricing and packaging
  pricePerSqm: number; // kr/kvm
  sqmPerPackage: number; // kvm per pakke
  piecesPerPackage: number; // antall planker per pakke
}

export const products: Product[] = [
  {
    id: "amaron-superiore",
    name: "Amaron Superiore",
    desc: "Ekstra store vinylplanker på over 183 cm med synkronisert naturstruktur og dyp matt finish. Premium klikk-vinyl med hypernaturlig effekt.",
    img: "https://photos.arbiton.com/media/cache/list/photos/5905167856512_I_02.png",
    specs: [
      { label: "Dimensjoner", value: "1836 × 229 mm" },
      { label: "Lås", value: "5G i-Click" },
      { label: "Garanti", value: "25 år" },
      { label: "Bruksklasse", value: "23/33" },
    ],
    badge: "Premium",
    features: ["Titan Nano Layer — 30% økt ripemotstand", "EIR-pregling", "HD Mineral Core"],
    pricePerSqm: 499,
    sqmPerPackage: 2.1,
    piecesPerPackage: 5,
  },
  {
    id: "amaron-herringbone",
    name: "Amaron Herringbone",
    desc: "Klassisk fiskebensmønster som er populært blant arkitekter og interiørdesignere. Vakre, naturlige dekorer med tidløs eleganse.",
    img: "https://photos.arbiton.com/media/cache/list/photos/5905167826683_I_05.png",
    specs: [
      { label: "Dimensjoner", value: "615 × 123 mm" },
      { label: "Lås", value: "5G i-Click" },
      { label: "Garanti", value: "20 år" },
      { label: "Bruksklasse", value: "23/33" },
    ],
    badge: "Fiskebensmønster",
    features: ["Synkronisert struktur", "Tidløs design", "HD Mineral Core"],
    pricePerSqm: 449,
    sqmPerPackage: 1.89,
    piecesPerPackage: 25,
  },
  {
    id: "amaron-wood",
    name: "Amaron Wood",
    desc: "Sterke, uttrykksfulle farger i store format. Perfekt for store, åpne flater med høyeste bruksklasse og 20 års garanti.",
    img: "https://photos.arbiton.com/media/cache/list/photos/5905167856420_I_01.png",
    specs: [
      { label: "Dimensjoner", value: "1511 × 229 mm" },
      { label: "Lås", value: "5G i-Click" },
      { label: "Garanti", value: "20 år" },
      { label: "Bruksklasse", value: "23/33" },
    ],
    badge: "Bestselger",
    features: ["Uttrykksfulle dekorer", "Store planker", "HD Mineral Core"],
    pricePerSqm: 399,
    sqmPerPackage: 2.08,
    piecesPerPackage: 6,
  },
  {
    id: "amaron-stone-xxl",
    name: "Amaron Stone XXL",
    desc: "Industriell loft-karakter med betong- og steindekorer. Store fliser for moderne interiører med høyeste bruksklasse.",
    img: "https://photos.arbiton.com/media/cache/list/photos/webp/5905167876800_D_02.webp",
    specs: [
      { label: "Dimensjoner", value: "914 × 457 mm" },
      { label: "Lås", value: "5G i-Click" },
      { label: "Garanti", value: "20 år" },
      { label: "Bruksklasse", value: "23/33" },
    ],
    badge: "XXL Format",
    features: ["Betong/stein-look", "Industriell karakter", "HD Mineral Core"],
    pricePerSqm: 429,
    sqmPerPackage: 2.09,
    piecesPerPackage: 5,
  },
  {
    id: "liberal",
    name: "Liberal",
    desc: "Skandinavisk design med varme, naturlige farger. Brede paneler og budsjettvennlig inngang til klikk-vinyl av høy kvalitet.",
    img: "https://photos.arbiton.com/media/cache/list/photos/5905167856475_I_03.jpg",
    specs: [
      { label: "Dimensjoner", value: "1220 × 229 mm" },
      { label: "Lås", value: "2G" },
      { label: "Garanti", value: "15 år" },
      { label: "Bruksklasse", value: "23/32" },
    ],
    badge: "Bestselger",
    features: ["Skandinavisk look", "Brede paneler", "HD Mineral Core"],
    pricePerSqm: 299,
    sqmPerPackage: 2.23,
    piecesPerPackage: 8,
  },
];
