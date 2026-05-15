import { useEffect, useState } from "react";

function Admin() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-green-700 text-center mb-10">
        KabadiRaja Admin Panel
      </h1>

      <div className="grid gap-6">
        {bookings.length === 0 ? (
          <p className="text-center text-gray-600">No bookings found</p>
        ) : (
          bookings.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 border"
            >
              <p><b>Name:</b> {item.name}</p>
              <p><b>Phone:</b> {item.phone}</p>
              <p><b>Alt Phone:</b> {item.altPhone}</p>
              <p><b>Address:</b> {item.address}</p>
              <p><b>Scrap Type:</b> {item.scrapType}</p>
              <p><b>Date:</b> {item.date}</p>
              <p><b>Time:</b> {item.time}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Admin;