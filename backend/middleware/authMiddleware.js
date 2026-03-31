const jwt = require("jsonwebtoken");
const User = require("../models/User");

/**
 * Middleware to protect routes using JWT authentication
 */
exports.protect = async (req, res, next) => {
  try {
    // 🔍 Get the Authorization header
    const authHeader = req.headers.authorization;

    // ✅ Check if header exists and follows 'Bearer <token>' format
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      console.warn("⚠️ No Authorization header found or format invalid");
      return res.status(401).json({ message: "Unauthorized, token missing" });
    }

    // ✅ Extract token
    const token = authHeader.split(" ")[1];
    if (!token) {
      console.warn("⚠️ Token missing after Bearer keyword");
      return res.status(401).json({ message: "Unauthorized, token missing" });
    }

    // ✅ Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded || !decoded.id) {
      console.warn("⚠️ Token verification failed or no user ID");
      return res.status(401).json({ message: "Unauthorized, invalid token" });
    }

    // ✅ Find user from DB, exclude password field
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      console.warn("⚠️ User not found for decoded token ID");
      return res.status(401).json({ message: "Unauthorized, user not found" });
    }

    // ✅ Attach user to request for next middleware or route
    req.user = user;

    // ✅ Success
    next();
  } catch (error) {
    console.error("❌ Auth Middleware Error:", error.message);
    return res.status(401).json({ message: "Unauthorized, invalid token" });
  }
};
