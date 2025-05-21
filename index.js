const express = require("express");
const cors = require("cors");
const imageRoutes = require("./routes/images");

const app = express();

app.use(cors());
app.use(express.json());

// Mount the images API route under /api/images
app.use("/api/images", imageRoutes);

// Define the server port
const PORT = process.env.PORT || 3001;

// Basic route to confirm server is running
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
