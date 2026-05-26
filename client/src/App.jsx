import scrap from "./assets/images/scrap.png";
import pickup from "./assets/images/pickup.jpg";
import visit from "./assets/images/visit.jpeg";
import money from "./assets/images/money.jpg";
import paper from "./assets/hero/paper.png";
import bottle from "./assets/hero/bottle.png";
import electronic from "./assets/hero/electronic.png";
import kabad from "./assets/hero/kabad.png";
import BookingForm from "./components/BookingForm";


function App() {
  return (
    <div className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-5 shadow-md sticky top-0 bg-white z-50">

        <div>
          <h1 className="text-3xl font-bold text-green-700">
            ScrapGo
          </h1>

          <p className="text-sm text-gray-500">
            Smart Scrap Pickup Service
          </p>
        </div>

        <div className="hidden md:flex gap-8 text-lg font-medium">

          <a href="#home" className="hover:text-green-700">
            Home
          </a>

          <a href="#categories" className="hover:text-green-700">
            Categories
          </a>

          <a href="#booking" className="hover:text-green-700">
            Book Pickup
          </a>

        </div>

        <a
          href="https://wa.me/916392494908"
          target="_blank"
          className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition"
        >
          WhatsApp Us
        </a>

      </nav>


      {/* Hero Section */}
<section
  id="home"
  className="mt-16 px-6 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-10"
>

  {/* LEFT SIDE IMAGES */}
  <div className="hidden lg:flex flex-col gap-6 items-center">

    <img
      src={paper}
      alt="Paper Scrap"
      className="w-44 hover:scale-110 transition duration-300 drop-shadow-2xl"
    />

    <img
      src={bottle}
      alt="Bottle Scrap"
      className="w-40 hover:scale-110 transition duration-300 drop-shadow-2xl"
    />

  </div>


  {/* CENTER CONTENT */}
  <div className="text-center max-w-3xl">

    <h1 className="text-5xl md:text-7xl font-bold text-green-800 leading-tight">
      Turn Your Waste <br /> Into Money ♻
    </h1>

    <p className="text-lg md:text-2xl text-gray-600 mt-6">
      Sell Plastic, Paper, Iron, Electronics, AC, Fridge and More
      at Best Prices with Doorstep Pickup.
    </p>


    {/* Buttons */}
    <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">

      <a
        href="#booking"
        className="bg-green-700 text-white px-8 py-4 rounded-xl text-lg hover:bg-green-800 transition shadow-lg"
      >
        Book Pickup
      </a>

     <a
  href="/rates"
  className="border-2 border-green-700 text-green-700 px-8 py-4 rounded-xl text-lg hover:bg-green-100 transition"
>
  Check Rates
</a>

    </div>


    {/* Small Trust Points */}
    <div className="flex flex-wrap justify-center gap-5 mt-10 text-sm md:text-base">

      <div className="bg-green-100 text-green-800 px-5 py-2 rounded-full font-semibold">
        ✅ Best Scrap Rates
      </div>

      <div className="bg-green-100 text-green-800 px-5 py-2 rounded-full font-semibold">
        🚚 Doorstep Pickup
      </div>

      <div className="bg-green-100 text-green-800 px-5 py-2 rounded-full font-semibold">
        💰 Instant Payment
      </div>

    </div>

  </div>


  {/* RIGHT SIDE IMAGES */}
  <div className="hidden lg:flex flex-col gap-6 items-center">

   <img
  src={electronic}
  alt="Electronic Scrap"
  className="w-56 hover:scale-110 transition duration-300 drop-shadow-2xl"
/>

    <img
      src={kabad}
      alt="Kabadi Scrap"
      className="w-40 hover:scale-110 transition duration-300 drop-shadow-2xl"
    />

  </div>

</section>

      {/* Categories Section */}
      <section id="categories" className="mt-20 px-6 md:px-10">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-green-800">
            Scrap Categories
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            We buy all household and electronic scrap
          </p>

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-16">

          {/* Plastic */}
          <div className="bg-white shadow-lg rounded-2xl p-8 border hover:scale-105 transition duration-300">

            <img
              src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png"
              alt="Plastic"
              className="w-24 mx-auto"
            />

            <h3 className="text-2xl font-bold text-center mt-6 text-green-700">
              Plastic Scrap
            </h3>

            <p className="text-center text-gray-600 mt-3">
              Bottles, containers and all plastic items.
            </p>

          </div>


          {/* Paper */}
          <div className="bg-white shadow-lg rounded-2xl p-8 border hover:scale-105 transition duration-300">

            <img
              src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
              alt="Paper"
              className="w-24 mx-auto"
            />

            <h3 className="text-2xl font-bold text-center mt-6 text-green-700">
              Paper & Books
            </h3>

            <p className="text-center text-gray-600 mt-3">
              Newspaper, notebooks, books and cardboard.
            </p>

          </div>


          {/* Electronics */}
          <div className="bg-white shadow-lg rounded-2xl p-8 border hover:scale-105 transition duration-300">

            <img
              src="https://cdn-icons-png.flaticon.com/512/3659/3659898.png"
              alt="Electronics"
              className="w-24 mx-auto"
            />

            <h3 className="text-2xl font-bold text-center mt-6 text-green-700">
              Electronics
            </h3>

            <p className="text-center text-gray-600 mt-3">
              AC, fridge, cooler, washing machine and more.
            </p>

          </div>

        </div>

      </section>


      {/* Rewards Section */}
      <section className="mt-20 bg-green-700 text-white py-16 px-6 md:px-10">

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            More Scrap = More Earnings ♻
          </h2>

          <p className="mt-5 text-xl text-green-100">
            Sell More Scrap and Get Better Rates Instantly
          </p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

          {/* Plastic Pricing */}
          <div className="bg-white text-black rounded-2xl p-10 shadow-xl">

            <h3 className="text-3xl font-bold text-green-700">
              Plastic Scrap
            </h3>

            <div className="mt-8 space-y-5">

              <div className="flex justify-between border-b pb-3">
                <span>Below 20kg</span>
                <span className="font-bold">₹12/kg</span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span>Above 20kg</span>
                <span className="font-bold text-green-700">
                  ₹15/kg
                </span>
              </div>

            </div>

          </div>


          {/* Paper Pricing */}
          <div className="bg-white text-black rounded-2xl p-10 shadow-xl">

            <h3 className="text-3xl font-bold text-green-700">
              Paper & Books
            </h3>

            <div className="mt-8 space-y-5">

              <div className="flex justify-between border-b pb-3">
                <span>Below 30kg</span>
                <span className="font-bold">₹14/kg</span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span>Above 30kg</span>
                <span className="font-bold text-green-700">
                  ₹17/kg
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Referral Section */}
      <section className="mt-20 px-6 md:px-10 text-center">

        <h2 className="text-5xl font-bold text-green-800">
          Refer Friends & Earn Rewards 🎁
        </h2>

        <p className="text-gray-600 text-xl mt-5 max-w-3xl mx-auto">
          Invite your friends to ScrapGo and earn extra rewards
          when they book scrap pickup through your referral.
        </p>

        <button className="mt-10 bg-green-700 text-white px-8 py-4 rounded-xl text-lg hover:bg-green-800 transition">
          Start Referring
        </button>

      </section>


      {/* How It Works */}
      <section className="mt-20 bg-gray-100 py-16 px-6 md:px-10">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-green-800">
            How It Works
          </h2>

          <p className="text-gray-600 mt-5 text-lg">
            Sell Scrap in 4 Easy Steps
          </p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">

          {/* Step 1 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300">

            <img
              src={scrap}
              alt="Select Scrap"
              className="w-full h-56 object-cover"
            />

            <div className="p-8 text-center">

              <div className="bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                1
              </div>

              <h3 className="text-2xl font-bold mt-5 text-green-700">
                Select Scrap
              </h3>

              <p className="text-gray-600 mt-3">
                Choose plastic, paper, iron, electronics or any scrap you want to sell.
              </p>

            </div>

          </div>


          {/* Step 2 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300">

            <img
              src={pickup}
              alt="Book Pickup"
              className="w-full h-56 object-cover"
            />

            <div className="p-8 text-center">

              <div className="bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                2
              </div>

              <h3 className="text-2xl font-bold mt-5 text-green-700">
                Book Pickup
              </h3>

              <p className="text-gray-600 mt-3">
                Enter your details and schedule pickup at your preferred time.
              </p>

            </div>

          </div>


          {/* Step 3 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300">

            <img
              src={visit}
              alt="We Visit You"
              className="w-full h-56 object-cover"
            />

            <div className="p-8 text-center">

              <div className="bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                3
              </div>

              <h3 className="text-2xl font-bold mt-5 text-green-700">
                We Visit You
              </h3>

              <p className="text-gray-600 mt-3">
                Our ScrapGo team reaches your location and collects the scrap.
              </p>

            </div>

          </div>


          {/* Step 4 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300">

            <img
              src={money}
              alt="Get Paid"
              className="w-full h-56 object-cover"
            />

            <div className="p-8 text-center">

              <div className="bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                4
              </div>

              <h3 className="text-2xl font-bold mt-5 text-green-700">
                Get Paid Instantly
              </h3>

              <p className="text-gray-600 mt-3">
                Receive instant payment based on scrap weight and category.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/916392494908"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-600 text-white p-5 rounded-full shadow-2xl hover:bg-green-700 transition text-3xl"
      >
        💬
      </a>


      {/* Stats Section */}
      <section className="mt-20 px-6 md:px-10">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="bg-green-700 text-white rounded-2xl p-10 text-center shadow-xl">

            <h2 className="text-5xl font-bold">
              500+
            </h2>

            <p className="mt-3 text-lg">
              Happy Customers
            </p>

          </div>


          <div className="bg-white border rounded-2xl p-10 text-center shadow-xl">

            <h2 className="text-5xl font-bold text-green-700">
              20+
            </h2>

            <p className="mt-3 text-lg text-gray-600">
              Scrap Categories
            </p>

          </div>


          <div className="bg-white border rounded-2xl p-10 text-center shadow-xl">

            <h2 className="text-5xl font-bold text-green-700">
              ₹50K+
            </h2>

            <p className="mt-3 text-lg text-gray-600">
              Paid To Customers
            </p>

          </div>


          <div className="bg-white border rounded-2xl p-10 text-center shadow-xl">

            <h2 className="text-5xl font-bold text-green-700">
              24/7
            </h2>

            <p className="mt-3 text-lg text-gray-600">
              WhatsApp Support
            </p>

          </div>

        </div>

      </section>


      {/* Why Choose Us */}
      <section className="mt-20 bg-green-50 py-16 px-6 md:px-10">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-green-800">
            Why Choose ScrapGo?
          </h2>

          <p className="text-gray-600 mt-5 text-lg">
            We provide the smartest and fastest scrap pickup service
          </p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

          <div className="bg-white rounded-2xl p-10 shadow-lg">

            <h3 className="text-2xl font-bold text-green-700">
              Best Rates
            </h3>

            <p className="text-gray-600 mt-4">
              We offer higher scrap prices compared to local kabadiwalas.
            </p>

          </div>


          <div className="bg-white rounded-2xl p-10 shadow-lg">

            <h3 className="text-2xl font-bold text-green-700">
              Doorstep Pickup
            </h3>

            <p className="text-gray-600 mt-4">
              Our team comes directly to your location at your preferred time.
            </p>

          </div>


          <div className="bg-white rounded-2xl p-10 shadow-lg">

            <h3 className="text-2xl font-bold text-green-700">
              Instant Payment
            </h3>

            <p className="text-gray-600 mt-4">
              Get paid instantly after scrap collection without any delay.
            </p>

          </div>

        </div>

      </section>
{/* Customer Reviews */}
<section className="mt-20 px-6 md:px-10 py-16 bg-gray-50">

  <div className="text-center">

    <h2 className="text-5xl font-bold text-green-800">
      What Our Customers Say
    </h2>

    <p className="text-gray-600 mt-5 text-lg">
      Trusted by hundreds of happy customers
    </p>

  </div>


  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

    {/* Review 1 */}
    <div className="bg-white rounded-3xl p-8 shadow-lg hover:scale-105 transition duration-300">

      <h3 className="text-2xl font-bold text-green-700">
        Rahul Sharma
      </h3>

      <p className="text-yellow-500 text-xl mt-2">
        ★★★★★
      </p>

      <p className="text-gray-600 mt-4">
        Very fast pickup service and best scrap prices.
        Highly recommended.
      </p>

    </div>


    {/* Review 2 */}
    <div className="bg-white rounded-3xl p-8 shadow-lg hover:scale-105 transition duration-300">

      <h3 className="text-2xl font-bold text-green-700">
        Priya Verma
      </h3>

      <p className="text-yellow-500 text-xl mt-2">
        ★★★★★
      </p>

      <p className="text-gray-600 mt-4">
        Pickup boy arrived on time and payment was instant.
      </p>

    </div>


    {/* Review 3 */}
    <div className="bg-white rounded-3xl p-8 shadow-lg hover:scale-105 transition duration-300">

      <h3 className="text-2xl font-bold text-green-700">
        Aman Khan
      </h3>

      <p className="text-yellow-500 text-xl mt-2">
        ★★★★★
      </p>

      <p className="text-gray-600 mt-4">
        Easy booking process and excellent customer support.
      </p>

    </div>

  </div>

</section>
{/* FAQ Section */}
<section className="mt-20 px-6 md:px-10 py-16 bg-white">

  <div className="text-center">

    <h2 className="text-5xl font-bold text-green-800">
      Frequently Asked Questions
    </h2>

    <p className="text-gray-600 mt-5 text-lg">
      Everything you need to know about ScrapGo
    </p>

  </div>


  <div className="max-w-4xl mx-auto mt-16 space-y-6">

    {/* FAQ 1 */}
    <div className="bg-gray-100 rounded-2xl p-6 shadow">

      <h3 className="text-2xl font-bold text-green-700">
        Do you provide doorstep pickup?
      </h3>

      <p className="text-gray-600 mt-3 text-lg">
        Yes, our team visits your location and collects scrap directly from your home.
      </p>

    </div>


    {/* FAQ 2 */}
    <div className="bg-gray-100 rounded-2xl p-6 shadow">

      <h3 className="text-2xl font-bold text-green-700">
        How do I get payment?
      </h3>

      <p className="text-gray-600 mt-3 text-lg">
        Payment is given instantly after weighing your scrap items.
      </p>

    </div>


    {/* FAQ 3 */}
    <div className="bg-gray-100 rounded-2xl p-6 shadow">

      <h3 className="text-2xl font-bold text-green-700">
        Which scrap categories do you accept?
      </h3>

      <p className="text-gray-600 mt-3 text-lg">
        We accept plastic, paper, iron, electronics, AC, fridge and many more items.
      </p>

    </div>

  </div>

</section>
      {/* Booking Form */}
      <div id="booking">
        <BookingForm />
      </div>


      {/* Footer */}
      <footer className="bg-black text-white mt-20 py-10 px-6 md:px-10">

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

            <p>📞 +91 6392494908</p>
            <p className="mt-2">📧 support@ScrapGo.in</p>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;