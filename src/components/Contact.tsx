"use client";

import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 md:py-32 bg-warm-100/50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-warm-500 mb-3">
            Kontakt oss
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Vi hjelper deg gjerne
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-warm-700 mb-1">Navn</label>
                <input
                  type="text"
                  className="w-full border border-warm-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-warm-500/30 focus:border-warm-500 transition-colors"
                  placeholder="Ditt fulle navn"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-warm-700 mb-1">E-post</label>
                  <input
                    type="email"
                    className="w-full border border-warm-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-warm-500/30 focus:border-warm-500 transition-colors"
                    placeholder="din@epost.no"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-warm-700 mb-1">Telefon</label>
                  <input
                    type="tel"
                    className="w-full border border-warm-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-warm-500/30 focus:border-warm-500 transition-colors"
                    placeholder="+47 000 00 000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-warm-700 mb-1">Melding</label>
                <textarea
                  rows={5}
                  className="w-full border border-warm-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-warm-500/30 focus:border-warm-500 transition-colors resize-none"
                  placeholder="Fortell oss om ditt prosjekt..."
                />
              </div>
              <button
                type="submit"
                className="bg-warm-500 hover:bg-warm-600 text-white px-8 py-3 text-sm font-semibold uppercase tracking-widest transition-colors w-full sm:w-auto"
              >
                Send melding
              </button>
            </form>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-lg mb-2">Besøk oss</h3>
                <p className="text-warm-600 text-sm leading-relaxed">
                  Byggtrade AS<br />
                  Storgata 12<br />
                  0155 Oslo, Norge
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Kontaktinfo</h3>
                <p className="text-warm-600 text-sm leading-relaxed">
                  Telefon: +47 22 00 00 00<br />
                  E-post: post@byggtrade.no<br />
                  Åpningstider: Man–Fre 08:00–16:00
                </p>
              </div>
              {/* Map placeholder */}
              <div className="aspect-[4/3] bg-warm-200 flex items-center justify-center">
                <div className="text-center text-warm-500">
                  <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm font-medium">Kart-placeholder</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
