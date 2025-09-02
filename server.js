// server.js
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParsMiddlewares

// Simple Route
app.get("/", (req, res) => {
  res.send("✅ Chhattisgarh Pradesh Niyamit Sarvsikshak Federation API is running...");
});

// Example API
app.get("/members", (req, res) => {
  res.json([
    { id: 1, name: "Aadil", role: "President" },
    { id: 2, name: "Zishan", role: "Secretary" }
  ]);
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
