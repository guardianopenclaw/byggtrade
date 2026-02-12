import FadeIn from "./FadeIn";

const stats = [
  { value: "50+", label: "Dekorer" },
  { value: "25 år", label: "Garanti" },
  { value: "Gratis", label: "Vareprøve" },
];

export default function About() {
  return (
    <section id="om-oss" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <p className="text-[#c8a87c] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Om Nordic Floor
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-8">
                Norsk leverandør av <span className="font-semibold">premium klikk-vinyl</span>
              </h2>
              <div className="space-y-5 text-nordic-500 font-light leading-relaxed text-lg">
                <p>
                  Vi samarbeider med Europas ledende produsenter for å tilby det beste 
                  utvalget av klikk-vinyl for norske hjem og næringsbygg. Våre gulv er bygget 
                  med HD Mineral Core — en høydensitets mineralkjerne som gjør dem vanntette, 
                  slitesterke og dimensjonsstabile.
                </p>
                <p>
                  Alle våre kolleksjoner har synkronisert tekstur (EIR) på premium-modeller, 
                  som gir en autentisk følelse av ekte tre eller stein. Med klikkesystem 
                  trenger du verken lim eller spesialverktøy — bare klipp, klikk og nyt.
                </p>
                <p>
                  Fra 300 kr/kvm får du et gulv som er rimeligere enn heltre, 
                  mer holdbart enn laminat, og vakrere enn noensinne.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div>
              <div className="aspect-[4/3] overflow-hidden mb-10">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80&auto=format&fit=crop"
                  alt="Moderne stue med Nordic Floor vinyl gulv"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-6">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-3xl md:text-4xl font-semibold text-[#c8a87c] mb-1">
                      {s.value}
                    </div>
                    <div className="text-sm text-nordic-500 tracking-wider uppercase">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
