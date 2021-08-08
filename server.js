require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

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

app.get("/", (req, res) => {
  res.send("theres no front end here to see data go to");
});

const server = app.listen(PORT, () => {
  const host = server.address().address;
  console.log(`Server is Live on http://${host}:${PORT}`);
});
