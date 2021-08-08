const express = require("express")
const router = express.Router()

const PortfolioItem = require('../models/portfolio')

//gets all items

router.get('/', async (req, res) => {

})

// gets one item

router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

// create a new item

router.post('/', (req, res) => {

})

// updates an item

router.patch('/:id', (req, res) => {

})

//deletes item

router.delete('/:id', (req, res) => {

})

module.exports = router