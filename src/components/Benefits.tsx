import FadeIn from "./FadeIn";

const benefits = [
  {
    title: "100% vanntett",
    desc: "HD Mineral Core gjør gulvet helt vanntett. Perfekt for bad, kjøkken og entre.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0L12 2.69z" />
      </svg>
    ),
  },
  {
    title: "Gulvvarme-kompatibel",
    desc: "Lav termisk motstand gir effektiv varmeoverføring. Ideelt for vannbåren og elektrisk gulvvarme.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    ),
  },
  {
    title: "Enkel installasjon",
    desc: "Patentert klikkesystem (5G-lås) gjør legging til en enkel DIY-jobb. Ingen lim nødvendig.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Lydabsorberende",
    desc: "Integrert lyddemping reduserer trinnlyd og romklang. Stille og behagelig underlag.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14" />
      </svg>
    ),
  },
  {
    title: "Ekstremt slitesterkt",
    desc: "Bruksklasse 33 — tåler intensiv kommersiell bruk. 25 års garanti for privatboliger.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Allergivennlig",
    desc: "Glatt overflate samler ikke støv og allergener. Enkel rengjøring med fuktig mopp.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

export default function Benefits() {
  return (
    <section id="fordeler" className="py-24 md:py-32 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-[#c8a87c] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Fordeler
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-white">
              Hvorfor <span className="font-semibold">klikk-vinyl?</span>
            </h2>
            <p className="mt-4 text-white/50 max-w-2xl mx-auto text-lg font-light">
              HD Mineral Core teknologi gir deg det beste fra alle verdener — 
              skjønnheten til tre, holdbarheten til stein, og enkelheten til vinyl.
            </p>
          </div>
        </FadeIn>

        {/* Warranty Badge */}
        <FadeIn delay={100}>
          <div className="mb-16 max-w-2xl mx-auto">
            <div className="border-2 border-[#c8a87c] bg-[#c8a87c]/5 p-8 md:p-10 text-center">
              <div className="flex justify-center mb-4">
                <svg
                  width="48"
                  height="48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="text-[#c8a87c]"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                25 års garanti for privatboliger
              </h3>
              <p className="text-white/70 font-light leading-relaxed max-w-xl mx-auto">
                Full garanti mot produksjonsfeil. Dekker slitasje ved normal bruk. 
                Vi står bak kvaliteten på våre produkter med en av bransjens lengste garantier.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <FadeIn key={b.title} delay={i * 100} className="h-full">
              <div className="h-full p-8 border border-white/10 hover:border-[#c8a87c]/30 transition-colors duration-300 flex flex-col">
                <div className="text-[#c8a87c] mb-5">{b.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{b.title}</h3>
                <p className="text-white/50 font-light leading-relaxed">{b.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
