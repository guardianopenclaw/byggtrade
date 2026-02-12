"use client";

import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-[#c8a87c] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Kontakt oss
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a]">
              Få et uforpliktende <span className="font-semibold">tilbud</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-nordic-500 mb-2 tracking-wider uppercase">
                    Navn
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-nordic-50 border border-nordic-200 focus:border-[#c8a87c] outline-none transition-colors text-[#1a1a1a]"
                    placeholder="Ditt navn"
                  />
                </div>
                <div>
                  <label className="block text-sm text-nordic-500 mb-2 tracking-wider uppercase">
                    E-post
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-nordic-50 border border-nordic-200 focus:border-[#c8a87c] outline-none transition-colors text-[#1a1a1a]"
                    placeholder="din@epost.no"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-nordic-500 mb-2 tracking-wider uppercase">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-nordic-50 border border-nordic-200 focus:border-[#c8a87c] outline-none transition-colors text-[#1a1a1a]"
                    placeholder="+47 xxx xx xxx"
                  />
                </div>
                <div>
                  <label className="block text-sm text-nordic-500 mb-2 tracking-wider uppercase">
                    Jeg er interessert i
                  </label>
                  <select className="w-full px-4 py-3 bg-nordic-50 border border-nordic-200 focus:border-[#c8a87c] outline-none transition-colors text-[#1a1a1a]">
                    <option value="">Velg kolleksjon</option>
                    <option value="oak">Nordic Oak Collection</option>
                    <option value="stone">Nordic Stone Collection</option>
                    <option value="urban">Nordic Urban Collection</option>
                    <option value="nature">Nordic Nature Collection</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm text-nordic-500 mb-2 tracking-wider uppercase">
                  Melding
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-nordic-50 border border-nordic-200 focus:border-[#c8a87c] outline-none transition-colors resize-none text-[#1a1a1a]"
                  placeholder="Fortell oss om prosjektet ditt — antall kvm, romtype, ønsket stil..."
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-12 py-4 bg-[#c8a87c] text-[#1a1a1a] font-medium tracking-wider uppercase text-sm hover:bg-[#b8956a] transition-colors duration-200"
              >
                Send forespørsel
              </button>
            </form>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-4">
                  Kontaktinformasjon
                </h3>
                <div className="space-y-4 text-nordic-500 font-light">
                  <div className="flex items-start gap-4">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-[#c8a87c] mt-0.5 shrink-0">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>post@nordicfloor.no</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-[#c8a87c] mt-0.5 shrink-0">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    <span>+47 22 33 44 55</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-[#c8a87c] mt-0.5 shrink-0">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>Oslo, Norge</span>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-nordic-50">
                <h4 className="font-semibold text-[#1a1a1a] mb-3">Gratis prøvebit</h4>
                <p className="text-nordic-500 font-light leading-relaxed">
                  Usikker på farge eller tekstur? Vi sender deg gratis prøvebiter 
                  slik at du kan se og føle kvaliteten hjemme hos deg. Bare velg 
                  kolleksjonen du er interessert i, så sender vi ut prøver 
                  innen 2–3 virkedager.
                </p>
              </div>

              <div className="p-8 bg-nordic-50">
                <h4 className="font-semibold text-[#1a1a1a] mb-3">Forhandlere</h4>
                <p className="text-nordic-500 font-light leading-relaxed">
                  Nordic Floor er tilgjengelig gjennom utvalgte forhandlere 
                  over hele Norge. Kontakt oss for å finne din nærmeste forhandler 
                  eller for å bli forhandler selv.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
