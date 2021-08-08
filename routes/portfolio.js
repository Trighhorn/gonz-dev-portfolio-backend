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

router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

// create a new item

router.post("/", async (req, res) => {
  const portfolio = new PortfolioItem({
    name: req.body.name,
    url: req.body.url,
    description: req.body.description,
    position: req.body.position,
    tags: req.body.tags
  });
  try {
    const newPortfolioItem = await portfolio.save();
    res.status(201).json(newPortfolioItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// updates an item

router.patch("/:id", (req, res) => {});

//deletes item

router.delete("/:id", (req, res) => {});



module.exports = router;
