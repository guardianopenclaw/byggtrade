"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

export default function RoomCalculator() {
  const [length, setLength] = useState<string>("");
  const [width, setWidth] = useState<string>("");
  const [showResult, setShowResult] = useState(false);

  const calculateArea = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    if (isNaN(l) || isNaN(w) || l <= 0 || w <= 0) return null;
    return l * w;
  };

  const area = calculateArea();
  const minPrice = area ? Math.round(area * 300) : null;
  const maxPrice = area ? Math.round(area * 500) : null;
  const packages = area ? Math.ceil(area / 2) : null;

  const handleCalculate = () => {
    if (area) {
      setShowResult(true);
    }
  };

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
              Få et prisestimat og antall pakker du trenger til ditt rom
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="border border-[#c8a87c]/20 bg-[#1a1a1a] p-8 md:p-12">
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
              disabled={!area}
              className="w-full px-8 py-4 bg-[#c8a87c] text-[#1a1a1a] font-semibold 
                       tracking-[0.12em] uppercase text-sm hover:bg-[#b8956a] 
                       transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed
                       hover:shadow-lg hover:scale-[1.01] disabled:hover:scale-100"
            >
              Beregn areal og pris
            </button>

            {/* Results */}
            {showResult && area && (
              <div className="mt-10 pt-10 border-t border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* Area */}
                  <div className="text-center p-6 border border-[#c8a87c]/20 bg-white/5">
                    <div className="text-[#c8a87c] text-4xl font-semibold mb-2">
                      {area.toFixed(1)}
                    </div>
                    <div className="text-white/60 text-sm tracking-wider uppercase">
                      kvadratmeter
                    </div>
                  </div>

                  {/* Price range */}
                  <div className="text-center p-6 border border-[#c8a87c]/20 bg-white/5">
                    <div className="text-[#c8a87c] text-2xl md:text-3xl font-semibold mb-2">
                      {minPrice?.toLocaleString('nb-NO')} - {maxPrice?.toLocaleString('nb-NO')} kr
                    </div>
                    <div className="text-white/60 text-sm tracking-wider uppercase">
                      estimert pris
                    </div>
                  </div>

                  {/* Packages */}
                  <div className="text-center p-6 border border-[#c8a87c]/20 bg-white/5">
                    <div className="text-[#c8a87c] text-4xl font-semibold mb-2">
                      {packages}
                    </div>
                    <div className="text-white/60 text-sm tracking-wider uppercase">
                      pakker (ca 2 kvm/pakke)
                    </div>
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
