export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 via-yellow-100 to-pink-200 text-black">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28">

        <h1 className="text-6xl md:text-8xl font-bold text-pink-700 mb-8">
          Forever With Her
        </h1>

        <p className="text-2xl md:text-3xl text-[#7a2048] max-w-4xl leading-relaxed">
          Together with their beloved family,
          Auriane & Nandu
          joyfully invite you to celebrate
          a love filled with happiness,
          warmth, and forever.
        </p>

      </section>

      {/* BRIDES SECTION */}
      <section className="px-6 py-20">

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* Nandu */}
          <div className="bg-white/70 rounded-3xl p-8 shadow-2xl border-4 border-pink-300 text-center">

            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
              alt="Nandu"
              className="w-72 h-72 object-cover rounded-full mx-auto border-4 border-yellow-400 shadow-xl"
            />

            <h2 className="text-5xl font-bold text-pink-700 mt-8">
              Nandu
            </h2>

            <p className="mt-6 text-xl text-[#5a2a3a] leading-9">
              Strong heart. Endless love.
              A soul filled with warmth,
              loyalty, and forever dreams.
            </p>

          </div>

          {/* Auriane */}
          <div className="bg-white/70 rounded-3xl p-8 shadow-2xl border-4 border-yellow-300 text-center">

            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop"
              alt="Auriane"
              className="w-72 h-72 object-cover rounded-full mx-auto border-4 border-pink-400 shadow-xl"
            />

            <h2 className="text-5xl font-bold text-pink-700 mt-8">
              Auriane
            </h2>

            <p className="mt-6 text-xl text-[#5a2a3a] leading-9">
              Graceful soul. Gentle heart.
              A beautiful light
              that turned love into home.
            </p>

          </div>

        </div>

      </section>

      {/* FAMILY SECTION */}
      <section className="px-8 py-20 max-w-6xl mx-auto">

        <div className="bg-white/70 border-4 border-pink-300 rounded-3xl p-12 shadow-2xl">

          <h3 className="text-4xl font-bold text-pink-700 mb-10 text-center">
            Our Beloved Family
          </h3>

          <div className="grid md:grid-cols-2 gap-12">

            <div>
              <ul className="space-y-5 text-2xl text-[#7a2048]">
                <li>💖 Isabelle Clochard</li>
                <li>💖 Olivier Clochard</li>
                <li>💖 Leïla Clochard</li>
                <li>💖 Nathanaël Clochard</li>
              </ul>
            </div>

            <div>
              <p className="text-xl leading-10 text-[#5a2a3a]">
                Being welcomed into the Clochard family
                is one of the greatest blessings of my life.
                Your love, kindness, and warmth
                have given me a home
                filled with happiness forever.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* WEDDING DETAILS */}
      <section className="px-6 py-20">

        <div className="max-w-5xl mx-auto bg-white/70 border-4 border-yellow-400 rounded-3xl p-14 shadow-2xl text-center">

          <h2 className="text-5xl font-bold text-pink-700 mb-12">
            Wedding Celebration
          </h2>

          <div className="space-y-8 text-2xl text-[#7a2048]">

            <p>
              📅 Saturday, August 1st, 2026
            </p>

            <p>
              🕕 Ceremony Begins at 6:00 PM
            </p>

            <p>
              📍 L’Étang de la Sauvagère
              <br />
              La Bruffière, France
            </p>

            <p>
              🥂 Dinner, Celebration & Dancing to Follow
            </p>

          </div>

        </div>

      </section>

      {/* WELCOME MESSAGE */}
      <section className="px-6 py-20 text-center">

        <div className="max-w-5xl mx-auto bg-yellow-100/80 rounded-3xl p-12 border-4 border-pink-300 shadow-2xl">

          <h3 className="text-4xl font-bold text-pink-700 mb-8">
            You Are Warmly Welcomed
          </h3>

          <p className="text-2xl text-[#5a2a3a] leading-10">
            Your presence on this special day
            will make our celebration complete.
            Join us as we celebrate love,
            family, and the beginning of forever.
          </p>

        </div>

      </section>

      {/* FINAL QUOTE */}
      <section className="px-6 py-24 text-center">

        <p className="italic text-4xl text-pink-800 max-w-5xl mx-auto leading-relaxed">
          “In your love, I found my forever.
          In your family, I found my home.”
        </p>

      </section>

    </main>
  );
}