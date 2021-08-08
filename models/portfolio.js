const mongoose = require("mongoose");

const portfolioItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  position: {
    type: Number,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
  addedDate: {
    type: Date,
    required: true,
    default: Date.now,
  }
});

module.exports = mongoose.model("PortfolioItem", portfolioItemSchema);
