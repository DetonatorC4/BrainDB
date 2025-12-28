const express = require("express");
const dotenv = require("dotenv");

const notesRoutes = require("./routes/notesRoutes.js");
const connectDB = require("./config/db.js");

const app = express();
const port = process.env.PORT;

dotenv.config();
connectDB();

app.use("/api/notes", notesRoutes);

app.listen(port, () => {
  console.log("Listening on port " + port);
});
