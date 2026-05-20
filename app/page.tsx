export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#2b1d1d] to-[#1a1a1a] text-white">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">

        <h1 className="text-6xl md:text-8xl font-bold text-[#8A9A5B] mb-8 tracking-wide">
          Forever With Her
        </h1>

        <p className="text-2xl md:text-3xl text-[#d8ccb8] max-w-4xl leading-relaxed">
          Together with their beloved family,
          Isabelle & Leïla
          joyfully invite you to celebrate
          a love written for eternity.
        </p>

      </section>

      {/* COUPLE MESSAGE */}
      <section className="text-center px-6 py-20">

        <h2 className="text-5xl md:text-6xl font-semibold text-[#8A9A5B] mb-10">
          Isabelle & Leïla
        </h2>

        <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-300 leading-10">
          Through every moment, every smile,
          and every challenge,
          we found a love that became our home.
          Today, we begin our forever together.
        </p>

      </section>

      {/* FAMILY SECTION */}
      <section className="px-8 py-20 max-w-6xl mx-auto">

        <div className="bg-[#111111] border border-[#8A9A5B] rounded-3xl p-12 shadow-2xl">

          <h3 className="text-4xl font-bold text-[#8A9A5B] mb-10 text-center">
            The Clochard Family
          </h3>

          <div className="grid md:grid-cols-2 gap-12">

            <div>
              <ul className="space-y-5 text-xl text-[#d8ccb8]">
                <li>Isabelle Clochard</li>
                <li>Olivier Clochard</li>
                <li>Leïla Clochard</li>
                <li>Nathanaël Clochard</li>
              </ul>
            </div>

            <div>
              <p className="text-lg leading-9 text-gray-300">
                Being welcomed into the Clochard family
                is one of the most beautiful blessings of my life.
                In your kindness, warmth, and love,
                I found a family that feels like home forever.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* WEDDING DETAILS */}
      <section className="px-6 py-20">

        <div className="max-w-4xl mx-auto bg-[#161616] border border-[#5b3a29] rounded-3xl p-14 shadow-2xl text-center">

          <h2 className="text-5xl font-bold text-[#8A9A5B] mb-12">
            Wedding Celebration
          </h2>

          <div className="space-y-8 text-xl text-[#d8ccb8]">

            <p>
              📅 Saturday, August 1st, 2026
            </p>

            <p>
              🕕 Ceremony Begins at 6:00 PM
            </p>

            <p>
              📍 Château de Bordeaux, France
            </p>

            <p>
              🥂 Dinner, Celebration & Dancing to Follow
            </p>

          </div>

        </div>

      </section>

      {/* WELCOME MESSAGE */}
      <section className="px-6 py-20 text-center">

        <div className="max-w-5xl mx-auto">

          <h3 className="text-4xl font-bold text-[#8A9A5B] mb-8">
            You Are Warmly Welcomed
          </h3>

          <p className="text-xl text-gray-300 leading-10">
            Your presence on this unforgettable day
            means more to us than words can express.
            Join us as we celebrate love, family,
            and the beginning of forever.
          </p>

        </div>

      </section>

      {/* QUOTE */}
      <section className="px-6 py-24 text-center">

        <p className="italic text-3xl text-[#d8ccb8] max-w-4xl mx-auto leading-relaxed">
          “In your love, I found my forever.
          In your family, I found my home.”
        </p>

      </section>

    </main>
  );
}