import FadeIn from "./FadeIn";

const articles = [
  {
    title: "Slik legger du klikk-vinyl selv",
    desc: "Steg-for-steg guide til enkel DIY-installasjon av klikk-vinyl gulv.",
    icon: "📐",
  },
  {
    title: "Klikk-vinyl vs. laminat – hva er forskjellen?",
    desc: "Vi sammenligner de to mest populære gulvtypene så du kan ta riktig valg.",
    icon: "⚖️",
  },
  {
    title: "Vedlikehold av vinyl gulv",
    desc: "Alt du trenger å vite om rengjøring og vedlikehold av klikk-vinyl.",
    icon: "✨",
  },
];

export default function FloorExpert() {
  return (
    <section className="py-24 md:py-32 bg-nordic-100">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <p className="text-warm-500 font-semibold tracking-widest uppercase text-sm mb-3 text-center">
            Floor Expert
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Veiledning & tips
          </h2>
          <p className="text-nordic-400 text-center max-w-2xl mx-auto mb-16 text-lg">
            Lær mer om klikk-vinyl gulv med våre ekspertartikler.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <FadeIn key={a.title} delay={i * 100}>
              <div className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                <div className="text-4xl mb-4">{a.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-warm-600 transition-colors">
                  {a.title}
                </h3>
                <p className="text-nordic-400 leading-relaxed mb-4">{a.desc}</p>
                <span className="text-warm-500 font-semibold text-sm flex items-center">
                  Les mer
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
