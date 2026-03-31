require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

// Route imports
const authRoutes = require("./routes/authRoutes");
const incomeRoutes = require("./routes/incomeRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

// ---------------------------
// ✅ CORS Configuration
// ---------------------------
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


// ---------------------------
// ✅ Middleware
// ---------------------------
app.use(express.json());

// ---------------------------
// ✅ Database Connection
// ---------------------------
connectDB();

// ---------------------------
// ✅ API Routes
// ---------------------------
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/income", incomeRoutes);
app.use("/api/v1/expense", expenseRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);

// ---------------------------
// ✅ Serve static uploads folder
// ---------------------------
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ---------------------------
// ✅ Start Server
// ---------------------------
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
