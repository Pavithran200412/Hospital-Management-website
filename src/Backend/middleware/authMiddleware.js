const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  let token;

  // Check for token in Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get the token from the header
      token = req.headers.authorization.split(" ")[1];

      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach the user to the request object
      req.user = decoded;

      next(); // Continue to the next middleware or route handler
    } catch (err) {
      console.error(err);
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  // If no token, respond with 401
  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

module.exports = protect;
