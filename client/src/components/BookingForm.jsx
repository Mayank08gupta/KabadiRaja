import { useState } from "react";

function BookingForm() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    altPhone: "",
    address: "",
    scrapType: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async () => {

    try {

      const response = await fetch(
        "https://kabadiraja.onrender.com/book",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {

        alert("Booking Submitted Successfully ✅");

        const message = `
🟢 ScrapGo Pickup Request

Name: ${formData.name}
Phone: ${formData.phone}
Alt Phone: ${formData.altPhone}
Address: ${formData.address}
Scrap Type: ${formData.scrapType}
Date: ${formData.date}
Time: ${formData.time}
`;

        const url =
          `https://wa.me/916392494908?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");

        setFormData({
          name: "",
          phone: "",
          altPhone: "",
          address: "",
          scrapType: "",
          date: "",
          time: "",
        });

      } else {

        alert("Booking Failed ❌");

      }

    } catch (error) {

      console.log(error);

      alert("Something went wrong ❌");

    }

  };

  return (

    <section className="mt-20 px-6 mb-20">

      <div className="max-w-4xl mx-auto bg-gray-50 shadow-2xl rounded-3xl p-10 border">

        <h2 className="text-4xl font-bold text-green-700 text-center">
          Book Scrap Pickup
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Fill details and we will contact you instantly
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="border p-3 rounded-xl w-full"
          />

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border p-3 rounded-xl w-full"
          />

          <input
            type="text"
            name="altPhone"
            value={formData.altPhone}
            onChange={handleChange}
            placeholder="Alternate Number"
            className="border p-3 rounded-xl w-full"
          />

          <input
            type="text"
            name="scrapType"
            value={formData.scrapType}
            onChange={handleChange}
            placeholder="Scrap Type"
            className="border p-3 rounded-xl w-full"
          />

        </div>

        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Full Address"
          className="border p-3 rounded-xl w-full mt-5 h-28"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border p-3 rounded-xl w-full"
          />

          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="border p-3 rounded-xl w-full"
          />

        </div>

        <button
          onClick={handleSubmit}
          className="w-full mt-8 bg-green-600 text-white py-4 rounded-xl text-lg font-bold hover:bg-green-700"
        >
          Book Pickup Now
        </button>

      </div>

    </section>

  );

}

export default BookingForm;