import FadeIn from "./FadeIn";

const values = [
  { icon: "🌿", title: "Bærekraft", desc: "Vi velger leverandører som deler vårt engasjement for miljøvennlige materialer og ansvarlig produksjon." },
  { icon: "🏆", title: "Kvalitet", desc: "Kun utvalgte produkter som møter våre strenge krav til holdbarhet, design og finish." },
  { icon: "🤝", title: "Fagkunnskap", desc: "Over 20 års erfaring i gulvbransjen sikrer at du alltid får riktig rådgivning og resultat." },
];

export default function About() {
  return (
    <section id="om-oss" className="py-24 md:py-32 bg-warm-100/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-warm-500 mb-3">
              Om Byggtrade
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Gulveksperter siden 2003
            </h2>
            <p className="text-warm-600 leading-relaxed mb-4">
              Byggtrade er en norskeid bedrift med hovedkontor i Oslo. Siden oppstarten har vi levert
              tusenvis av kvadratmeter med kvalitetsgulv til private hjem, kontorer og
              næringsbygg over hele landet.
            </p>
            <p className="text-warm-600 leading-relaxed">
              Vi tror på at et godt gulv er fundamentet for ethvert rom. Derfor jobber vi tett med
              ledende europeiske produsenter for å tilby et nøye kuratert utvalg som kombinerer
              estetikk, holdbarhet og god pris.
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="grid grid-cols-1 gap-8">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <span className="text-3xl">{v.icon}</span>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{v.title}</h3>
                    <p className="text-warm-600 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
