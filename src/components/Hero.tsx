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
        {/* Forbedret mørk gradient overlay for bedre kontrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 via-[#1a1a1a]/60 to-[#1a1a1a]/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Backdrop blur på tekstområdet for bedre lesbarhet */}
        <div className="absolute inset-0 backdrop-blur-[2px] rounded-lg -mx-8 -my-8" />
        
        <div className="relative">
          <FadeIn>
            <p className="text-[#c8a87c] text-sm tracking-[0.35em] uppercase mb-6 font-medium drop-shadow-lg">
              Norsk kvalitet — Europeisk håndverk
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-4 [text-shadow:_0_2px_12px_rgb(0_0_0_/_80%),_0_4px_24px_rgb(0_0_0_/_40%)] tracking-wide">
              Premium <span className="font-semibold">klikk-vinyl</span>
            </h1>
            <p className="text-[#c8a87c] text-lg md:text-xl font-light tracking-[0.08em] mb-6 drop-shadow-lg">
              for norske hjem
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <p className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed [text-shadow:_0_2px_8px_rgb(0_0_0_/_60%)] tracking-wide">
              Vanntette gulv med HD Mineral Core teknologi. Enkelt å legge, 
              vanskelig å slite ut. Perfekt for alle rom i hjemmet.
            </p>
          </FadeIn>
          <FadeIn delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#kolleksjoner"
                className="px-10 py-4 bg-[#c8a87c] text-[#1a1a1a] font-semibold tracking-[0.12em] uppercase text-sm hover:bg-[#b8956a] hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border border-[#c8a87c] hover:border-[#b8956a]"
              >
                Utforsk kolleksjonene
              </a>
              <a
                href="#kontakt"
                className="px-10 py-4 border-2 border-white/40 text-white font-semibold tracking-[0.12em] uppercase text-sm hover:bg-white/15 hover:border-white/60 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm"
              >
                Bestill gratis vareprøve
              </a>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
