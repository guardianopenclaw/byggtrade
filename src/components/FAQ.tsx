"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    question: "Kan jeg legge over eksisterende gulv?",
    answer: "Ja, klikk-vinyl kan legges direkte over fliser, betong, gammelt vinyl og de fleste andre gulvtyper, så lenge underlaget er plant, rent og tørt. Du sparer både tid og penger ved å slippe å rive opp det gamle gulvet.",
  },
  {
    question: "Hvor lenge varer installasjonen?",
    answer: "For en person tar det ca 20-30 kvm per dag, avhengig av rommet og erfaring. Et gjennomsnittlig rom på 15-20 kvm kan derfor ferdigstilles på én dag. Klikkesystemet gjør at du kan jobbe i ditt eget tempo uten stress.",
  },
  {
    question: "Trenger jeg underlag?",
    answer: "Underlag er sterkt anbefalt for å gi støydemping, økt komfort og en jevnere overflate. Det beskytter også gulvet mot ujevnheter i undergulvet. Noen av våre kolleksjoner har integrert underlag, men et separat lydunderlag gir best resultat.",
  },
  {
    question: "Hva koster installasjon?",
    answer: "Gulvet er designet for DIY og krever ingen spesialverktøy — bare en sag, målebånd og kniv. Om du ønsker profesjonell hjelp, koster installasjon vanligvis fra 150 kr/kvm avhengig av gulvets kompleksitet og geografisk beliggenhet.",
  },
  {
    question: "Hvor lang leveringstid?",
    answer: "Vi har rask levering over hele Norge. Normal leveringstid er 2-5 virkedager fra bestilling til døren din. For større prosjekter eller spesialbehov kan vi også tilby ekspresstjenester.",
  },
  {
    question: "Returrett?",
    answer: "Vi tilbyr 14 dagers åpent kjøp på alle uåpnede pakker i henhold til norsk forbrukerlovgivning. Åpnede pakker kan ikke returneres av hygieniske årsaker, med mindre det foreligger produksjonsfeil eller feil levering.",
  },
  {
    question: "Tåler det gulvvarme?",
    answer: "Ja, alle våre klikk-vinyl gulv er 100% kompatible med både vannbåren og elektrisk gulvvarme. HD Mineral Core har lav termisk motstand, noe som gir effektiv varmeoverføring og behagelig varme. Maksimal overflatetemperatur bør ikke overstige 27°C.",
  },
  {
    question: "Hvordan rengjøres gulvet?",
    answer: "Vedlikehold er enkelt: feie eller støvsuge jevnlig, og tørk opp søl umiddelbart. Bruk fuktig mopp med mildt gulvrengjøringsmiddel. Unngå voks, slipmidler og dampmopp. Den slitesterke overflaten holder seg pen i mange år uten ekstra behandling.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-[#c8a87c] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Ofte stilte spørsmål
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a]">
              Alt du trenger å <span className="font-semibold">vite</span>
            </h2>
            <p className="mt-4 text-[#1a1a1a]/50 max-w-2xl mx-auto text-lg font-light">
              Vi har samlet de vanligste spørsmålene om våre klikk-vinyl gulv
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 50}>
              <div className="border border-[#1a1a1a]/10">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 md:px-8 py-6 flex items-center justify-between 
                           text-left hover:bg-[#c8a87c]/5 transition-colors duration-200"
                >
                  <span className="text-lg md:text-xl font-medium text-[#1a1a1a] pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-6 h-6 text-[#c8a87c] transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 md:px-8 pb-6 text-[#1a1a1a]/70 leading-relaxed font-light">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Contact CTA */}
        <FadeIn delay={400}>
          <div className="mt-16 text-center">
            <p className="text-[#1a1a1a]/60 mb-6 font-light text-lg">
              Fant du ikke svar på ditt spørsmål?
            </p>
            <a
              href="#kontakt"
              className="inline-block px-10 py-4 border-2 border-[#1a1a1a] text-[#1a1a1a] 
                       font-semibold tracking-[0.12em] uppercase text-sm 
                       hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
            >
              Kontakt oss
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
