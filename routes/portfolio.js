const express = require("express");
const router = express.Router();

const PortfolioItem = require("../models/portfolio");

//gets all items

router.get("/", async (req, res) => {
  try {
    const portfolio = await PortfolioItem.find();
    res.json(portfolio);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// gets one item

router.get("/:id", getPortfolioItem, (req, res) => {
  res.send(res.portfolioItem)
});

// create a new item

router.post("/", async (req, res) => {
  const portfolio = new PortfolioItem({
    name: req.body.name,
    url: req.body.url,
    description: req.body.description,
    position: req.body.position,
    tags: req.body.tags,
  });
  try {
    const newPortfolioItem = await portfolio.save();
    res.status(201).json(newPortfolioItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// updates an item

router.patch("/:id", getPortfolioItem, (req, res) => {});

//deletes item

router.delete("/:id", getPortfolioItem, (req, res) => {});

async function getPortfolioItem(req, res, next) {
  let portfolioItem;
  try {
    portfolioItem = await PortfolioItem.findById(req.params.id);
    if (portfolioItem == null) {
      return res.status(404).json({ message: "Cannot get Portfolio Item" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.portfolioItem = portfolioItem;
  next();
}

module.exports = router;
