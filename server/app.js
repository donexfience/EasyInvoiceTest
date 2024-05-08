require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();
//cors setting
const allowedOrigins = ["http://localhost:5173"];
const corsOptions = {
  origin: [allowedOrigins],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(logger("dev"));

const userRoutes = require("./routes/user");
app.use("/api/user", userRoutes);

app.listen(4000, () => {
  console.log("server runnign at port 4000");
});
