import FadeIn from "./FadeIn";

export default function Awards() {
  return (
    <section className="py-16 md:py-20 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Logos */}
            <div className="flex items-center gap-8 shrink-0">
              <img
                src="/arbiton-logo.svg"
                alt="Arbiton"
                className="h-8 md:h-10 brightness-0 invert opacity-80"
              />
              <div className="w-px h-12 bg-white/20" />
              <img
                src="/if-design-banner.png"
                alt="iF Design Award 2025"
                className="h-16 md:h-20 object-contain"
              />
            </div>

            {/* Text */}
            <div className="text-center md:text-left">
              <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
                3x iF Design Award 2025
              </h3>
              <p className="text-white/60 font-light leading-relaxed text-sm md:text-base max-w-xl">
                Arbiton ble tildelt tre iF Design Awards for fremragende design, 
                funksjonalitet og holdbarhet — en anerkjennelse av kvaliteten vi 
                leverer til norske hjem gjennom Nordic Floor.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
