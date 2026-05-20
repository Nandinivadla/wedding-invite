export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-200 via-yellow-100 to-pink-300 text-black overflow-hidden">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28">

        <h1 className="text-6xl md:text-8xl font-extrabold text-pink-700 drop-shadow-lg mb-8">
          Forever With Her
        </h1>

        <p className="text-2xl md:text-3xl text-[#7a2048] max-w-4xl leading-relaxed font-medium">
          Together with their beloved family,
          Auriane & Nandu
          joyfully invite you to celebrate
          a love filled with happiness,
          warmth, and forever.
        </p>

      </section>

      {/* BRIDES SECTION */}
      <section className="text-center px-6 py-20">

        <div className="bg-white/70 rounded-[40px] p-12 shadow-2xl border-[6px] border-pink-300 max-w-5xl mx-auto">

          <h2 className="text-5xl md:text-7xl font-bold text-pink-700 mb-8">
            Auriane & Nandu
          </h2>

          <p className="max-w-4xl mx-auto text-xl md:text-2xl text-[#5a2a3a] leading-10">
            Two brides. Two hearts.
            One beautiful promise.
            Surrounded by love,
            family, and forever.
          </p>

        </div>

      </section>

      {/* COUPLE PHOTO */}
      <section className="px-6 py-16 flex justify-center">

        <img
          src="/together.jpg"
          alt="Auriane and Nandu"
          className="rounded-[50px] shadow-2xl w-full max-w-4xl h-[550px] object-cover border-[10px] border-yellow-300"
        />

      </section>

      {/* FAMILY SECTION */}
      <section className="px-8 py-20 max-w-6xl mx-auto">

        <div className="bg-white/70 border-[6px] border-pink-300 rounded-[40px] p-12 shadow-2xl">

          <h3 className="text-5xl font-bold text-pink-700 mb-12 text-center">
            Our Beloved Family
          </h3>

          <div className="grid md:grid-cols-2 gap-12">

            <div>
              <ul className="space-y-6 text-2xl text-[#7a2048] font-semibold">
                <li>💖 Isabelle Clochard</li>
                <li>💖 Olivier Clochard</li>
                <li>💖 Leïla Clochard</li>
                <li>💖 Nathanaël Clochard</li>
              </ul>
            </div>

            <div>
              <p className="text-2xl leading-10 text-[#5a2a3a]">
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

        <div className="max-w-5xl mx-auto bg-white/80 border-[6px] border-yellow-400 rounded-[40px] p-14 shadow-2xl text-center">

          <h2 className="text-5xl font-bold text-pink-700 mb-12">
            Wedding Details
          </h2>

          <div className="space-y-8 text-2xl text-[#7a2048] font-medium">

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

        <div className="max-w-5xl mx-auto bg-pink-100/80 rounded-[40px] p-14 border-[6px] border-yellow-300 shadow-2xl">

          <h3 className="text-5xl font-bold text-pink-700 mb-10">
            You Are Warmly Welcomed
          </h3>

          <p className="text-2xl text-[#5a2a3a] leading-10">
            Your presence on this special day
            will make our celebration complete.
            We welcome you with love,
            joy, and gratitude
            as we gather together
            to witness the beginning
            of our forever.
          </p>

        </div>

      </section>

      {/* FINAL QUOTE */}
      <section className="px-6 py-24 text-center">

        <div className="bg-white/60 rounded-[40px] p-12 max-w-5xl mx-auto shadow-2xl border-[6px] border-pink-300">

          <p className="italic text-4xl md:text-5xl text-pink-800 leading-relaxed font-semibold">
            “In your love, I found my forever.
            In your family, I found my home.”
          </p>

        </div>

      </section>

    </main>
  );
}