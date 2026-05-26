function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 shadow-md">

        <div>
          <h1 className="text-3xl font-bold text-green-700">
            ScrapGo
          </h1>

          <p className="text-sm text-gray-500">
            Smart Scrap Pickup Service
          </p>
        </div>

        <button className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition">
          WhatsApp Us
        </button>

      </nav>


      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center mt-24 px-5">

        <h1 className="text-6xl font-bold text-green-800 leading-tight">
          Turn Your Waste <br /> Into Money ♻
        </h1>

        <p className="text-xl text-gray-600 mt-6 max-w-2xl">
          Sell Plastic, Paper, Iron, Electronics, AC, Fridge and More
          at Best Prices with Doorstep Pickup.
        </p>

        <div className="flex gap-5 mt-10">

          <button className="bg-green-700 text-white px-8 py-4 rounded-xl text-lg hover:bg-green-800 transition">
            Book Pickup
          </button>

          <button className="border-2 border-green-700 text-green-700 px-8 py-4 rounded-xl text-lg hover:bg-green-100 transition">
            Check Rates
          </button>

        </div>

      </section>


      {/* Categories Section */}
      <section className="mt-32 px-10">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-green-800">
            Scrap Categories
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            We buy all household and electronic scrap
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-16">

          <div className="bg-white shadow-lg rounded-2xl p-8 border hover:scale-105 transition">

            <img
              src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png"
              alt="Plastic"
              className="w-24 mx-auto"
            />

            <h3 className="text-2xl font-bold text-center mt-6 text-green-700">
              Plastic Scrap
            </h3>

          </div>


          <div className="bg-white shadow-lg rounded-2xl p-8 border hover:scale-105 transition">

            <img
              src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
              alt="Paper"
              className="w-24 mx-auto"
            />

            <h3 className="text-2xl font-bold text-center mt-6 text-green-700">
              Paper & Books
            </h3>

          </div>


          <div className="bg-white shadow-lg rounded-2xl p-8 border hover:scale-105 transition">

            <img
              src="https://cdn-icons-png.flaticon.com/512/3659/3659898.png"
              alt="Electronics"
              className="w-24 mx-auto"
            />

            <h3 className="text-2xl font-bold text-center mt-6 text-green-700">
              Electronics
            </h3>

          </div>

        </div>

      </section>


      {/* Rewards Section */}
      <section className="mt-32 bg-green-700 text-white py-20 px-10">

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            More Scrap = More Earnings ♻
          </h2>

          <p className="mt-5 text-xl text-green-100">
            Earn Better Rates When You Sell More Scrap
          </p>

        </div>

      </section>


      {/* Footer */}
      <footer className="bg-black text-white mt-32 py-10 px-10">

        <div className="flex flex-col md:flex-row justify-between items-center">

          <div>
            <h2 className="text-3xl font-bold text-green-500">
              ScrapGo
            </h2>

            <p className="text-gray-400 mt-2">
              Turn Your Waste Into Money ♻
            </p>
          </div>

          <div className="mt-6 md:mt-0 text-center md:text-right">
            <p>📞 +91 7052810810</p>
            <p className="mt-2">📧 support@ScrapGo.in</p>
          </div>

        </div>

      </footer>

    </div>
  );
}

export default Home;