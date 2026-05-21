import { useEffect, useState } from "react";

function AdminPanel() {
  const [bookings, setBookings] = useState([]);
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      fetch("https://kabadiraja.onrender.com/bookings")
        .then((res) => res.json())
        .then((data) => setBookings(data))
        .catch((err) => console.error(err));
    }
  }, [isLoggedIn]);

  const handleLogin = () => {
    if (password === "kabadi123") {
      setIsLoggedIn(true);
    } else {
      alert("Wrong Password ❌");
    }
  };

  const handleDelete = async (id) => {
    await fetch(`https://kabadiraja.onrender.com/booking/${id}`, {
      method: "DELETE",
    });
    setBookings(bookings.filter((item) => item._id !== id));
  };

  const handleStatusChange = async (id, newStatus) => {
    await fetch(`https://kabadiraja.onrender.com/booking/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    });

    setBookings(
      bookings.map((item) =>
        item._id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  if (!isLoggedIn) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
        <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
            Admin Login
          </h2>

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3 rounded-xl w-full"
          />

          <button
            onClick={handleLogin}
            className="w-full mt-6 bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700"
          >
            Login
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 py-10">
      <h2 className="text-4xl font-bold text-green-700 text-center mb-8">
        Admin Dashboard
      </h2>

      <div className="max-w-6xl mx-auto grid gap-6">
        {bookings.map((item, index) => (
          <div key={index} className="bg-white shadow-lg rounded-2xl p-6 border">
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Phone:</strong> {item.phone}</p>
            <p><strong>Scrap Type:</strong> {item.scrapType}</p>
            <p><strong>Address:</strong> {item.address}</p>
            <p><strong>Date:</strong> {item.date}</p>
            <p><strong>Time:</strong> {item.time}</p>
            <p><strong>Status:</strong> {item.status || "Pending"}</p>

            <select
              onChange={(e) => handleStatusChange(item._id, e.target.value)}
              value={item.status || "Pending"}
              className="mt-4 border p-2 rounded-lg mr-4"
            >
              <option>Pending</option>
              <option>Picked</option>
              <option>Completed</option>
            </select>

            <button
              onClick={() => handleDelete(item._id)}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdminPanel;