import Image from "next/image";

export default function Hero() {
  return (
    <section id="hjem" className="relative h-screen min-h-[600px] flex items-center justify-center">
      <Image
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
        alt="Moderne interiør med tregulv"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-warm-950/50" />
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          Gulv som forandrer rommet
        </h1>
        <p className="text-lg md:text-xl text-warm-200 mb-10 font-light leading-relaxed">
          Kvalitetsparkett, laminat og vinylgulv — levert med fagkunnskap og omtanke for norske hjem.
        </p>
        <a
          href="#produkter"
          className="inline-block bg-warm-500 hover:bg-warm-600 text-white px-8 py-4 text-sm font-semibold uppercase tracking-widest transition-colors"
        >
          Utforsk våre gulv
        </a>
      </div>
    </section>
  );
}
