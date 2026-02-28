"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import { allProducts } from "@/data/products-full";

// Kuratert utvalg per kategori (3-4 populære produkter)
const categories = {
  premium: {
    name: "Premium",
    description: "Eksklusivt design og toppkvalitet",
    products: [
      "cass-205-beatrice-oak", // AMARON SUPERIORE
      "cass-225-segovia-oak",
      "clc-222-johannes-oak", // AMARON CHEVRON
      "clc-227-virgin-oak",
    ],
  },
  herringbone: {
    name: "Fiskebensmønster",
    description: "Tidløs eleganse i klassisk mønster",
    products: [
      "ca-158-harlow-oak", // AMARON HERRINGBONE
      "ca-147-georgetown-oak",
      "cas-223-menor-oak-hb", // AMARON HERRINGBONE EIR
      "cas-226-empire-oak-hb",
    ],
  },
  stone: {
    name: "Stein & Betong",
    description: "Moderne XXL fliser med industrielt uttrykk",
    products: [
      "caf-250-braga-silver", // AMARON FORMA
      "caf-257-amadora-grey",
      "caf-263-ninaventura-graphite",
      "caf-265-lello-bone",
    ],
  },
  wood: {
    name: "Tredesign",
    description: "Autentisk trestruktur med praktiske egenskaper",
    products: [
      "ca-102-alaskan-oak", // AMARON WOOD
      "ca-153-yankee-oak",
      "caa-147-georgetown-oak", // AMARON WOOD ACOUSTIC
      "casa-226-empire-oak",
    ],
  },
  budget: {
    name: "Budsjettvennlig",
    description: "Kvalitet til konkurransedyktig pris",
    products: [
      "clea-41882-freemont-oak", // Legnar 5G ACOUSTIC
      "clea-41022-scandinavian-oak",
      "cwa-175-whitecreek-oak", // WOODRIC ACOUSTIC
      "cwsa-201-dayton-oak", // WOODRIC ACOUSTIC EIR
    ],
  },
};

export default function Collections() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const getCategoryProducts = (categoryKey: string) => {
    const category = categories[categoryKey as keyof typeof categories];
    const featured = allProducts.filter((p) =>
      category.products.includes(p.id)
    );
    const all = allProducts.filter((p) => {
      if (categoryKey === "premium") {
        return p.collection === "AMARON SUPERIORE" || p.collection === "AMARON CHEVRON";
      }
      if (categoryKey === "herringbone") {
        return p.collection === "AMARON HERRINGBONE" || p.collection === "AMARON HERRINGBONE EIR";
      }
      if (categoryKey === "stone") {
        return p.collection === "AMARON FORMA";
      }
      if (categoryKey === "wood") {
        return p.collection === "AMARON WOOD" || p.collection === "AMARON WOOD ACOUSTIC";
      }
      if (categoryKey === "budget") {
        return p.collection === "Legnar 5G ACOUSTIC" || p.collection === "WOODRIC ACOUSTIC" || p.collection === "WOODRIC ACOUSTIC EIR";
      }
      return false;
    });

    return expandedCategory === categoryKey ? all : featured;
  };

  const getCategoryCount = (categoryKey: string) => {
    if (categoryKey === "premium") return 12; // 8 Superiore + 4 Chevron
    if (categoryKey === "herringbone") return 16; // 8 + 8
    if (categoryKey === "stone") return 12; // FORMA
    if (categoryKey === "wood") return 28; // 14 + 14
    if (categoryKey === "budget") return 42; // 18 Legnar + 12 + 12 WOODRIC
    return 0;
  };

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
              110 produkter fordelt på 10 unike kolleksjoner — fra premium fiskebensmønster
              til budsjettvennlige alternativer. Alle med vanntett kjerne og enkel installasjon.
            </p>
          </div>
        </FadeIn>

        {/* Categories */}
        <div className="space-y-16">
          {Object.entries(categories).map(([key, category], catIndex) => {
            const products = getCategoryProducts(key);
            const totalCount = getCategoryCount(key);
            const isExpanded = expandedCategory === key;

            return (
              <div key={key}>
                <FadeIn delay={catIndex * 100}>
                  {/* Category header */}
                  <div className="mb-8 flex items-end justify-between">
                    <div>
                      <h3 className="text-3xl font-light text-[#1a1a1a] mb-2">
                        {category.name}
                      </h3>
                      <p className="text-nordic-500 font-light">
                        {category.description} · {totalCount} produkter
                      </p>
                    </div>
                    {totalCount > 4 && (
                      <button
                        onClick={() =>
                          setExpandedCategory(isExpanded ? null : key)
                        }
                        className="text-sm font-medium tracking-wider uppercase text-[#c8a87c] hover:text-[#b89868] transition-colors"
                      >
                        {isExpanded ? "Vis mindre" : `Se alle ${totalCount}`}
                      </button>
                    )}
                  </div>

                  {/* Products grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((p, i) => (
                      <FadeIn key={p.id} delay={i * 80}>
                        <div className="group relative flex flex-col overflow-hidden bg-nordic-50 h-full border border-nordic-200 hover:border-[#c8a87c] transition-colors">
                          {/* Image */}
                          <div className="aspect-square overflow-hidden relative bg-white">
                            <img
                              src={p.imageUrl}
                              alt={`${p.collection} - ${p.colour}`}
                              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                              onError={(e) => {
                                // Fallback hvis bildet ikke finnes
                                e.currentTarget.src = "/placeholder-floor.png";
                              }}
                            />
                            {p.collection === "AMARON CHEVRON" && (
                              <span className="absolute top-3 left-3 bg-[#c8a87c] text-white text-xs font-semibold tracking-wider uppercase px-2 py-1">
                                Premium
                              </span>
                            )}
                          </div>

                          {/* Content */}
                          <div className="p-4 flex flex-col flex-1">
                            <h4 className="text-base font-semibold text-[#1a1a1a] mb-1">
                              {p.colour}
                            </h4>
                            <p className="text-xs text-nordic-500 font-light mb-3">
                              {p.collection}
                            </p>

                            {/* Key specs */}
                            <div className="space-y-1 mb-3 text-xs">
                              <div className="flex justify-between">
                                <span className="text-nordic-400">Pris</span>
                                <span className="text-[#1a1a1a] font-medium">
                                  {p.priceNOK} kr/m²
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-nordic-400">Dimensjon</span>
                                <span className="text-[#1a1a1a] font-medium">
                                  {p.dimension}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-nordic-400">M²/pakke</span>
                                <span className="text-[#1a1a1a] font-medium">
                                  {p.sqmPerPackage.toFixed(2)} m²
                                </span>
                              </div>
                            </div>

                            {/* CTA */}
                            <div className="mt-auto pt-3 border-t border-nordic-200">
                              <a
                                href="#kontakt"
                                className="block text-center text-xs font-medium tracking-wider uppercase text-[#c8a87c] hover:text-[#b89868] transition-colors"
                              >
                                Be om tilbud
                              </a>
                            </div>
                          </div>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </FadeIn>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
