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
  res.send(res.portfolioItem);
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

router.patch("/:id", getPortfolioItem, async (req, res) => {
  if (req.body.name != null) {
    res.portfolioItem.name = req.body.name;
  }

  if (req.body.url != null) {
    res.portfolioItem.url = req.body.url;
  }

  if (req.body.description != null) {
    res.portfolioItem.description = req.body.description;
  }

  if (req.body.position != null) {
    res.portfolioItem.position = req.body.position;
  }

  if (req.body.tags != null) {
    res.portfolioItem.tags = req.body.tags;
  }
  try {
    const updatedPortfolioItem = await res.portfolioItem.save();
    res.json(updatedPortfolioItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//deletes item

router.delete("/:id", getPortfolioItem, async (req, res) => {
  try {
    await res.portfolioItem.remove();
    res.json({ message: "Deleted Portfolio Item" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// middle ware to get id
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
