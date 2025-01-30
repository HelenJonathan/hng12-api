const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

// Middleware to handle CORS
app.use(cors());

// Route to return the required information
app.get("/api", (req, res) => {
  const response = {
    email: "helenjonathan333@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/HelenJonathan/hng12-api.git",
  };

  res.status(200).json(response);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
