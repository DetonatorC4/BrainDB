const express = require("express");
const dotenv = require("dotenv");

const rateLimiter = require("./middleware/rateLimiter.js");

const notesRoutes = require("./routes/notesRoutes.js");
const connectDB = require("./config/db.js");

const app = express();
const port = process.env.PORT;

dotenv.config();

app.use(express.json());
app.use(rateLimiter);
app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(port, () => {
    console.log("Listening on port " + port);
  });
});
