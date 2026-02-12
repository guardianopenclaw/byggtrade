import FadeIn from "./FadeIn";

const images = [
  { src: "photo-1600585154340-be6161a56a0c", label: "Stue", tall: true },
  { src: "photo-1556909114-f6e7ad7d3136", label: "Kjøkken", tall: false },
  { src: "photo-1552321554-5fefe8c9ef14", label: "Bad", tall: false },
  { src: "photo-1600607687939-ce8a6c25118c", label: "Soverom", tall: false },
  { src: "photo-1600566753190-17f0baa2a6c3", label: "Kontor", tall: false },
  { src: "photo-1615529182904-14819c35db37", label: "Entré", tall: true },
];

export default function Inspiration() {
  return (
    <section id="inspirasjon" className="py-24 md:py-32 bg-nordic-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-[#c8a87c] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Inspirasjon
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a]">
              Se gulvene i <span className="font-semibold">bruk</span>
            </h2>
            <p className="mt-4 text-nordic-500 max-w-2xl mx-auto text-lg font-light">
              Klikk-vinyl passer i alle rom. Utforsk hvordan Nordic Floor 
              forvandler hjem og næringsbygg over hele Norge.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <FadeIn key={img.label} delay={i * 100}>
              <div
                className={`group relative overflow-hidden ${
                  img.tall ? "sm:row-span-2" : ""
                }`}
              >
                <img
                  src={`https://images.unsplash.com/${img.src}?w=600&q=80&auto=format&fit=crop`}
                  alt={`Nordic Floor i ${img.label.toLowerCase()}`}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    img.tall ? "h-full min-h-[400px]" : "aspect-square"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white text-lg font-medium tracking-wider">
                    {img.label}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
