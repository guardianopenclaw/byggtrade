"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import { products } from "@/data/products";

export default function RoomCalculator() {
  const [length, setLength] = useState<string>("");
  const [width, setWidth] = useState<string>("");
  const [selectedProductId, setSelectedProductId] = useState<string>("");
  const [showResult, setShowResult] = useState(false);

  const calculateArea = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    if (isNaN(l) || isNaN(w) || l <= 0 || w <= 0) return null;
    return l * w;
  };

  const area = calculateArea();
  const selectedProduct = products.find((p) => p.id === selectedProductId);

  // Beregn med 10% svinn (anbefalt minimum)
  const areaWithWaste = area ? area * 1.1 : null;

  // Pris basert på valgt produkt
  const price = selectedProduct && areaWithWaste 
    ? Math.round(areaWithWaste * selectedProduct.pricePerSqm) 
    : null;

  // Antall pakker basert på valgt produkt
  const packages = selectedProduct && areaWithWaste
    ? Math.ceil(areaWithWaste / selectedProduct.sqmPerPackage)
    : null;

  const handleCalculate = () => {
    if (area && selectedProduct) {
      setShowResult(true);
    }
  };

  const canCalculate = area && selectedProduct;

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-[#c8a87c] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Kalkulator
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              Beregn <span className="font-semibold">ditt behov</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-lg font-light">
              Velg produkt og oppgi mål for å få eksakt pris og antall pakker
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          {/* Pricing callout */}
          <div className="flex justify-center mb-8">
            <div className="inline-block px-8 py-4 border-2 border-[#c8a87c]/40 bg-[#1a1a1a]/60 backdrop-blur-md">
              <div className="flex items-baseline gap-3 flex-wrap justify-center">
                <span className="text-[#c8a87c] text-3xl md:text-4xl font-semibold">Fra 299 kr/kvm</span>
                <span className="text-white/60 text-sm md:text-base font-light">
                  Rimeligere enn heltre, mer holdbart enn laminat
                </span>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="border border-[#c8a87c]/20 bg-[#1a1a1a] p-8 md:p-12">
            {/* Product selector */}
            <div className="mb-6">
              <label className="block text-white/70 text-sm tracking-wider uppercase mb-3">
                Velg produkt
              </label>
              <select
                value={selectedProductId}
                onChange={(e) => {
                  setSelectedProductId(e.target.value);
                  setShowResult(false);
                }}
                className="w-full px-4 py-4 bg-white/5 border border-white/20 text-white text-lg 
                         focus:border-[#c8a87c] focus:outline-none transition-colors
                         appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23c8a87c' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                  backgroundPosition: "right 1rem center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "1.5em 1.5em",
                  paddingRight: "3rem",
                }}
              >
                <option value="" disabled>
                  Velg en kolleksjon
                </option>
                {products.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name} — {product.pricePerSqm} kr/kvm
                  </option>
                ))}
              </select>
              {selectedProduct && (
                <p className="text-white/50 text-sm mt-2 font-light">
                  {selectedProduct.sqmPerPackage.toFixed(2)} kvm per pakke · {selectedProduct.piecesPerPackage} stk per pakke
                </p>
              )}
            </div>

            {/* Input fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-white/70 text-sm tracking-wider uppercase mb-3">
                  Lengde (meter)
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={length}
                  onChange={(e) => {
                    setLength(e.target.value);
                    setShowResult(false);
                  }}
                  placeholder="f.eks. 5.5"
                  className="w-full px-4 py-4 bg-white/5 border border-white/20 text-white text-lg 
                           focus:border-[#c8a87c] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm tracking-wider uppercase mb-3">
                  Bredde (meter)
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={width}
                  onChange={(e) => {
                    setWidth(e.target.value);
                    setShowResult(false);
                  }}
                  placeholder="f.eks. 4.2"
                  className="w-full px-4 py-4 bg-white/5 border border-white/20 text-white text-lg 
                           focus:border-[#c8a87c] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Calculate button */}
            <button
              onClick={handleCalculate}
              disabled={!canCalculate}
              className="w-full px-8 py-4 bg-[#c8a87c] text-[#1a1a1a] font-semibold 
                       tracking-[0.12em] uppercase text-sm hover:bg-[#b8956a] 
                       transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed
                       hover:shadow-lg hover:scale-[1.01] disabled:hover:scale-100"
            >
              Beregn areal og pris
            </button>

            {/* Results */}
            {showResult && area && selectedProduct && areaWithWaste && (
              <div className="mt-10 pt-10 border-t border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {/* Area */}
                  <div className="text-center p-6 border border-[#c8a87c]/20 bg-white/5">
                    <div className="text-[#c8a87c] text-4xl font-semibold mb-2">
                      {area.toFixed(1)}
                    </div>
                    <div className="text-white/60 text-sm tracking-wider uppercase">
                      kvadratmeter
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-center p-6 border border-[#c8a87c]/20 bg-white/5">
                    <div className="text-[#c8a87c] text-2xl md:text-3xl font-semibold mb-2">
                      {price?.toLocaleString('nb-NO')} kr
                    </div>
                    <div className="text-white/60 text-sm tracking-wider uppercase">
                      estimert pris (inkl. 10% svinn)
                    </div>
                  </div>

                  {/* Packages */}
                  <div className="text-center p-6 border border-[#c8a87c]/20 bg-white/5">
                    <div className="text-[#c8a87c] text-4xl font-semibold mb-2">
                      {packages}
                    </div>
                    <div className="text-white/60 text-sm tracking-wider uppercase">
                      pakker ({selectedProduct.sqmPerPackage.toFixed(2)} kvm/pakke)
                    </div>
                  </div>
                </div>

                {/* Waste disclaimer */}
                <div className="mb-8 p-4 bg-white/5 border border-white/10">
                  <p className="text-white/70 text-sm font-light leading-relaxed">
                    <span className="text-[#c8a87c] font-medium">Viktig:</span> Prisberegningen inkluderer 10% svinn, 
                    som er vanlig for de fleste prosjekter. Ved komplekse rom med mange vinkler, 
                    hjørner eller uregelmessige former anbefaler vi 15% tillegg. 
                    Estimatet er basert på erfaring og typiske installasjonsforhold.
                  </p>
                </div>

                {/* Product details */}
                <div className="mb-8 p-6 bg-white/5 border border-[#c8a87c]/20">
                  <h4 className="text-white text-lg font-semibold mb-3">{selectedProduct.name}</h4>
                  <p className="text-white/70 text-sm mb-4 font-light">{selectedProduct.desc}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {selectedProduct.specs.map((spec) => (
                      <div key={spec.label}>
                        <span className="text-white/50 text-xs uppercase tracking-wider">
                          {spec.label}
                        </span>
                        <p className="text-white font-medium">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <p className="text-white/70 mb-4 font-light">
                    Ønsker du å se og føle kvaliteten før du kjøper?
                  </p>
                  <a
                    href="#kontakt"
                    className="inline-block px-10 py-4 border-2 border-[#c8a87c] text-[#c8a87c] 
                             font-semibold tracking-[0.12em] uppercase text-sm 
                             hover:bg-[#c8a87c] hover:text-[#1a1a1a] transition-all duration-300"
                  >
                    Bestill gratis vareprøve
                  </a>
                </div>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
