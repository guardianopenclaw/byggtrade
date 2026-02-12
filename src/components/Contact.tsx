"use client";

import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <FadeIn>
            <div>
              <p className="text-warm-500 font-semibold tracking-widest uppercase text-sm mb-3">
                Kontakt oss
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Få et uforpliktende tilbud
              </h2>
              <p className="text-nordic-400 text-lg leading-relaxed mb-10">
                Vi hjelper deg gjerne med å finne det perfekte klikk-vinyl gulvet.
                Ta kontakt for en prat eller bestill gratis prøvebit.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-warm-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-warm-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Adresse</h4>
                    <p className="text-nordic-400">Storgata 1, 0155 Oslo</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-warm-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-warm-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">E-post</h4>
                    <p className="text-nordic-400">post@nordicfloor.no</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-warm-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-warm-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Telefon</h4>
                    <p className="text-nordic-400">+47 22 00 00 00</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-nordic-50 p-8 md:p-10 rounded-2xl space-y-6"
            >
              <div>
                <label className="block text-sm font-semibold mb-2">Navn</label>
                <input
                  type="text"
                  placeholder="Ditt fulle navn"
                  className="w-full px-4 py-3 rounded-lg border border-nordic-200 bg-white focus:outline-none focus:ring-2 focus:ring-warm-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">E-post</label>
                <input
                  type="email"
                  placeholder="din@epost.no"
                  className="w-full px-4 py-3 rounded-lg border border-nordic-200 bg-white focus:outline-none focus:ring-2 focus:ring-warm-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Telefon</label>
                <input
                  type="tel"
                  placeholder="+47 000 00 000"
                  className="w-full px-4 py-3 rounded-lg border border-nordic-200 bg-white focus:outline-none focus:ring-2 focus:ring-warm-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Melding</label>
                <textarea
                  rows={4}
                  placeholder="Fortell oss om ditt prosjekt – rom, areal, ønsket stil..."
                  className="w-full px-4 py-3 rounded-lg border border-nordic-200 bg-white focus:outline-none focus:ring-2 focus:ring-warm-500 focus:border-transparent transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-warm-500 hover:bg-warm-600 text-white font-semibold py-4 rounded-lg transition-colors text-lg"
              >
                Send forespørsel
              </button>
              <p className="text-nordic-400 text-xs text-center">
                Vi svarer normalt innen 24 timer.
              </p>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
