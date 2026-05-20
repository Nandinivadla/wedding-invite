export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-100 to-pink-50 text-center flex flex-col items-center justify-center p-6">

      <h1 className="text-6xl md:text-8xl font-bold text-rose-700 mb-6">
        Aarya ❤️ Rohan
      </h1>

      <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mb-10">
        Together with their families,
        joyfully invite you to celebrate their wedding
        and share in the happiness of this beautiful beginning.
      </p>

      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">

        <h2 className="text-4xl font-semibold text-rose-600 mb-6">
          Wedding Celebration
        </h2>

        <div className="space-y-4 text-lg text-gray-700">

          <p>📅 18 July 2026</p>

          <p>🕕 6:00 PM onwards</p>

          <p>
            📍 Le Grand Palace Hall,
            Paris, France
          </p>

        </div>

        <button className="mt-8 bg-rose-600 hover:bg-rose-700 transition text-white px-8 py-3 rounded-full text-lg shadow-lg">
          RSVP With Love
        </button>

      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-14 max-w-5xl w-full">

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-3xl font-bold text-rose-500 mb-4">
            Bride's Family
          </h3>

          <p className="text-lg text-gray-700">
            Daughter of Mr. & Mrs. Sharma
          </p>

          <p className="mt-2 text-gray-600">
            Origin: Jaipur, Rajasthan
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-3xl font-bold text-rose-500 mb-4">
            Groom's Family
          </h3>

          <p className="text-lg text-gray-700">
            Son of Mr. & Mrs. Reddy
          </p>

          <p className="mt-2 text-gray-600">
            Origin: Hyderabad, Telangana
          </p>
        </div>

      </div>

      <p className="mt-16 text-gray-500 italic text-lg">
        "Two hearts, one beautiful journey."
      </p>

    </main>
  );
}