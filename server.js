require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3000;

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

app.use(express.json());
app.use(cors());

const portfolioRouter = require("./routes/portfolio");
app.use("/portfolio", portfolioRouter);

db.on("error", (err) => console.error(err));
db.once("open", () => console.log("Database is open and live"));

app.listen(PORT, () => console.log(`Server is Live on Port: ${PORT}`));
