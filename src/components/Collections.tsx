import FadeIn from "./FadeIn";

const products = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
];

export default function Collections() {
  return (
    <section id="kolleksjoner" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-[#c8a87c] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Arbiton kolleksjoner
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a]">
              Klikk-vinyl med{" "}
              <span className="font-semibold">HD Mineral Core</span>
            </h2>
            <p className="mt-4 text-nordic-500 max-w-2xl mx-auto text-lg font-light">
              Fem unike kolleksjoner for ethvert prosjekt — fra premium fiskebensmønster
              til budsjettvennlige alternativer. Alle med vanntett kjerne og enkel installasjon.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <FadeIn key={p.name} delay={i * 120}>
              <div className="group relative flex flex-col overflow-hidden bg-nordic-50 h-full">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {p.badge && (
                    <span className="absolute top-4 left-4 bg-[#c8a87c] text-white text-xs font-semibold tracking-wider uppercase px-3 py-1.5">
                      {p.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">
                    {p.name}
                  </h3>
                  <p className="text-nordic-500 font-light leading-relaxed text-sm mb-4">
                    {p.desc}
                  </p>

                  {/* Specs grid */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 text-sm">
                    {p.specs.map((s) => (
                      <div key={s.label}>
                        <span className="text-nordic-400 text-xs uppercase tracking-wider">
                          {s.label}
                        </span>
                        <p className="text-[#1a1a1a] font-medium">{s.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.features.map((f) => (
                      <span
                        key={f}
                        className="text-xs bg-nordic-100 text-nordic-600 px-2 py-1 rounded"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* CTA buttons */}
                  <div className="mt-auto flex gap-3">
                    <a
                      href="#kontakt"
                      className="flex-1 text-center text-sm font-medium tracking-wider uppercase bg-[#c8a87c] text-white py-3 px-4 hover:bg-[#b89868] transition-colors"
                    >
                      Be om tilbud
                    </a>
                    <a
                      href="#kontakt"
                      className="flex-1 text-center text-sm font-medium tracking-wider uppercase border border-[#c8a87c] text-[#c8a87c] py-3 px-4 hover:bg-[#c8a87c] hover:text-white transition-colors"
                    >
                      Vareprøve
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
