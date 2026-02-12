import FadeIn from "./FadeIn";

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
      </svg>
    ),
    title: "100% Vanntett",
    desc: "Tåler vann i alle rom – perfekt for bad, kjøkken og entre. Ingen fuktskader.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Ekstremt Slitesterkt",
    desc: "Høy sliteklasse som tåler daglig bruk, kjæledyr og møbler uten riper.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Enkel DIY-installasjon",
    desc: "Patentert klikkesystem – legg gulvet selv uten lim eller spesialverktøy.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
    title: "Passer Gulvvarme",
    desc: "Kompatibelt med vannbåren og elektrisk gulvvarme. Effektiv varmeoverføring.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Vedlikeholdsfritt",
    desc: "Krever minimalt vedlikehold – tørk av med en fuktig klut, ferdig.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Allergivennlig",
    desc: "Glatt overflate samler ikke støv, midd eller allergener. Bedre innemiljø.",
  },
];

export default function Benefits() {
  return (
    <section id="fordeler" className="py-24 md:py-32 bg-nordic-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <p className="text-warm-400 font-semibold tracking-widest uppercase text-sm mb-3 text-center">
            Fordeler
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Hvorfor velge klikk-vinyl?
          </h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-16 text-lg">
            Klikk-vinyl kombinerer det beste fra moderne teknologi og tidløs design.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <FadeIn key={b.title} delay={i * 80}>
              <div className="p-8 rounded-xl border border-white/10 hover:border-warm-500/30 bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                <div className="text-warm-400 mb-4 group-hover:scale-110 transition-transform">
                  {b.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{b.title}</h3>
                <p className="text-white/60 leading-relaxed">{b.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
