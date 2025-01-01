const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const routes = require("./routes/v1");

dotenv.config();
app.use(express.json());

app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB is connected"))
  .catch((error) => console.log(error));

app.use("/v1", routes);

app.listen(process.env.PORT, () => {
  console.log(" backend is running on Port 8000....");
});
