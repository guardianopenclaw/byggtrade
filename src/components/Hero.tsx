import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80&auto=format&fit=crop"
          alt="Moderne interiør med premium gulv"
          className="w-full h-full object-cover animate-hero-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/70 via-[#1a1a1a]/50 to-[#1a1a1a]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-[#c8a87c] text-sm tracking-[0.3em] uppercase mb-6 font-medium">
            Norsk kvalitet — Europeisk håndverk
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-4">
            Premium <span className="font-semibold">klikk-vinyl</span>
          </h1>
          <p className="text-white/50 text-lg md:text-xl font-light mb-6">
            for norske hjem
          </p>
        </FadeIn>
        <FadeIn delay={400}>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Vanntette gulv med HD Mineral Core teknologi. Enkelt å legge, 
            vanskelig å slite ut. Perfekt for alle rom i hjemmet.
          </p>
        </FadeIn>
        <FadeIn delay={600}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#kolleksjoner"
              className="px-10 py-4 bg-[#c8a87c] text-[#1a1a1a] font-medium tracking-wider uppercase text-sm hover:bg-[#b8956a] transition-colors duration-200"
            >
              Utforsk kolleksjonene
            </a>
            <a
              href="#kontakt"
              className="px-10 py-4 border border-white/30 text-white font-medium tracking-wider uppercase text-sm hover:bg-white/10 transition-colors duration-200"
            >
              Bestill gratis vareprøve
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
