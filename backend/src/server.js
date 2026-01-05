const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const notesRoutes = require("./routes/notesRoutes.js");
const connectDB = require("./config/db.js");
const rateLimiter = require("./middleware/rateLimiter.js");

dotenv.config();

const app = express();

app.use(express.json());


app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

const port = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(port, () => {
    console.log("Listening on port " + port);
  });
});
