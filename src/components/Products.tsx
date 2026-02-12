import Image from "next/image";
import FadeIn from "./FadeIn";

const products = [
  {
    title: "Parkett",
    desc: "Ekte tregulv med naturlig varme og karakter. Vår parkett er laget av utvalgte tresorter og gir rommet en tidløs eleganse som varer i generasjoner.",
    img: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80",
  },
  {
    title: "Laminat",
    desc: "Slitesterkt og stilfullt — perfekt for aktive hjem. Moderne laminat kombinerer vakre tre-dekorer med enestående holdbarhet og enkel vedlikehold.",
    img: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80",
  },
  {
    title: "Vinyl",
    desc: "Vanntett, behagelig og allsidig for alle rom. Vinyl er det smarte valget for bad, kjøkken og entre — med utseende som naturlig tre eller stein.",
    img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
  },
];

export default function Products() {
  return (
    <section id="produkter" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-warm-500 mb-3">
            Våre produkter
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Gulv for enhver smak
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <FadeIn key={p.title} delay={i * 150}>
              <div className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden mb-6">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-warm-600 leading-relaxed text-sm">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
