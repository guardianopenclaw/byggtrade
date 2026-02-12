import Image from "next/image";
import FadeIn from "./FadeIn";

const projects = [
  { title: "Villa Holmenkollen", type: "Eikeparkett", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" },
  { title: "Kontorbygg Bjørvika", type: "Vinyl", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" },
  { title: "Leilighet Grünerløkka", type: "Laminat", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80" },
  { title: "Hytte Hemsedal", type: "Eikeparkett", img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80" },
];

export default function Projects() {
  return (
    <section id="prosjekter" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-warm-500 mb-3">
            Referanser
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Prosjekter vi er stolte av
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={i * 100}>
              <div className="group relative aspect-[3/2] overflow-hidden cursor-pointer">
                <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-950/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-warm-300 text-xs uppercase tracking-widest mb-1">{p.type}</p>
                  <h3 className="text-white text-xl font-semibold">{p.title}</h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
