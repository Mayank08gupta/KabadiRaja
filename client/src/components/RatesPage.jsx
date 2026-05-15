function RatesPage() {
  const rates = [
    { item: "Newspaper", price: "₹16/kg" },
    { item: "Books & Copies", price: "₹14/kg" },
    { item: "Cardboard / Gatta", price: "₹15/kg" },
    { item: "Plastic Mix", price: "₹10/kg" },
    { item: "Iron", price: "₹28/kg" },
    { item: "Steel", price: "₹35/kg" },
    { item: "Aluminium", price: "₹105/kg" },
    { item: "Copper", price: "₹550/kg" },
    { item: "Brass", price: "₹320/kg" },
    { item: "AC", price: "Best after inspection" },
    { item: "Fridge", price: "Best after inspection" },
    { item: "Washing Machine", price: "Best after inspection" },
    { item: "E-waste", price: "Depends on item" },
  ];

  return (
    <section className="min-h-screen bg-green-50 px-6 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8">
        <a
  href="/"
  className="inline-block mb-6 bg-green-700 text-white px-6 py-3 rounded-xl hover:bg-green-800"
>
  ← Back to Home
</a>
        <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
          Scrap Rates List
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rates.map((rate, index) => (
            <div
              key={index}
              className="flex justify-between border p-4 rounded-xl shadow-sm"
            >
              <span className="font-semibold">{rate.item}</span>
              <span className="text-green-700 font-bold">{rate.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RatesPage;