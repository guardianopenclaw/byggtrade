import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="om-oss" className="py-24 md:py-32 bg-warm-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80&auto=format&fit=crop"
                alt="Nordic Floor showroom"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div>
              <p className="text-warm-500 font-semibold tracking-widest uppercase text-sm mb-3">
                Om oss
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Nordic Floor
              </h2>
              <div className="space-y-4 text-nordic-500 text-lg leading-relaxed">
                <p>
                  Nordic Floor er en norsk leverandør av premium klikk-vinyl gulv,
                  med hovedkontor i Oslo. Vi har spesialisert oss på å levere
                  høykvalitets vinylgulv som kombinerer skandinavisk design med
                  moderne teknologi.
                </p>
                <p>
                  Våre produkter er nøye utvalgt for å møte nordiske krav til
                  kvalitet, holdbarhet og bærekraft. Alle våre klikk-vinyl gulv
                  er 100% vanntette, slitesterke og enkle å installere selv.
                </p>
                <p>
                  Vi samarbeider med ledende produsenter i Europa for å sikre
                  at hvert gulv oppfyller de strengeste standarder for kvalitet
                  og miljø.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-10">
                <div>
                  <div className="text-3xl font-bold text-nordic-900">500+</div>
                  <div className="text-nordic-400 text-sm mt-1">Fornøyde kunder</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-nordic-900">15+</div>
                  <div className="text-nordic-400 text-sm mt-1">År erfaring</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-nordic-900">25 år</div>
                  <div className="text-nordic-400 text-sm mt-1">Garanti</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
