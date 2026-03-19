require("./db");
const Contact = require("./models/Contact");
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend files
app.use(express.static(path.join(__dirname, "public")));

// Contact form API
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    console.log("Saved to MongoDB:", newContact);

    res.json({ success: true, message: "Form submitted successfully" });

  } catch (err) {
    console.error("Database error:", err);
    res.json({ success: false, message: "Error saving form" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});