const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const authRoutes = require("./Routes/authRoutes");
const postRoutes = require("./Routes/postRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5000",
      "https://myles-blog.netlify.app",
      "http://192.168.1.236:5000/",
      "http://192.168.112.1:5000/",
    ],
    credentials: true,
  })
);

app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.DB_URL)
  .then(() =>
    console.log("DataBase Connection Established")
  )
  .catch((err) =>
    console.error("MongoDB connection error:", err)
  );



// Routes
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
