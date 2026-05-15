const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(
  "mongodb+srv://Mayank:Kabadi@cluster0.svtl6wm.mongodb.net/kabadiraja?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => {
  console.log("MongoDB Connected ✅");
})
.catch((error) => {
  console.log(error);
});

// Schema
const bookingSchema = new mongoose.Schema({
  name: String,
  phone: String,
  altPhone: String,
  address: String,
  scrapType: String,
  date: String,
  time: String,
  status: {
    type: String,
    default: "Pending",
  },
});

// Model
const Booking = mongoose.model("Booking", bookingSchema);

// Test Route
app.get("/", (req, res) => {
  res.send("KabadiRaja Backend Running 🚀");
});

// Save Booking
app.post("/book", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();

    console.log("Booking Saved ✅");

    res.json({
      success: true,
      message: "Booking Saved Successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error saving booking",
    });
  }
});

// Get All Bookings
app.get("/bookings", async (req, res) => {
  try {
    const allBookings = await Booking.find().sort({ _id: -1 });

    const updatedBookings = allBookings.map((item) => ({
      ...item._doc,
      status: item.status || "Pending",
    }));

    res.json(updatedBookings);
  } catch (error) {
    console.log(error);
    res.json([]);
  }
});

// Delete Booking
app.delete("/booking/:id", async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Booking Deleted",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
    });
  }
});

// Update Status
app.put("/booking/:id", async (req, res) => {
  try {
    await Booking.findByIdAndUpdate(req.params.id, {
      status: req.body.status,
    });

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});