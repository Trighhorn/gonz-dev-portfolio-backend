require('dotenv').config()

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection

db.on('error', (err) => console.error(err))
db.once('open', () => console.log('Database is open and live'))

app.listen(PORT, () => console.log(`Server is Live on Port: ${PORT}`));
