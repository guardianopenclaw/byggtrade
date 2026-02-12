import FadeIn from "./FadeIn";

const rooms = [
  {
    name: "Stue",
    img: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    name: "Kjøkken",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80&auto=format&fit=crop",
    span: "",
  },
  {
    name: "Bad",
    img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80&auto=format&fit=crop",
    span: "",
  },
  {
    name: "Soverom",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format&fit=crop",
    span: "md:col-span-2",
  },
];

export default function Gallery() {
  return (
    <section id="galleri" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <p className="text-warm-500 font-semibold tracking-widest uppercase text-sm mb-3 text-center">
            Inspirasjon
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Se det i ditt hjem
          </h2>
          <p className="text-nordic-400 text-center max-w-2xl mx-auto mb-16 text-lg">
            Våre klikk-vinyl gulv passer i alle rom. La deg inspirere av ekte referanseprosjekter.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-4 gap-4">
          {rooms.map((r, i) => (
            <FadeIn key={r.name} delay={i * 100} className={r.span}>
              <div className="group relative rounded-xl overflow-hidden h-64 md:h-full min-h-[250px] cursor-pointer">
                <img
                  src={r.img}
                  alt={`${r.name} med Nordic Floor klikk-vinyl`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-nordic-950/20 group-hover:bg-nordic-950/40 transition-colors" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 text-nordic-900 text-sm font-semibold px-4 py-1.5 rounded-full">
                    {r.name}
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
