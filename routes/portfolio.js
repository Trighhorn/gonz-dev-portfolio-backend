const express = require("express")
const router = express.Router()

//gets all items

router.get('/', (req, res) => {
    res.send('Hello from portfolio route')
})

// gets one item

router.get('/:id', (req, res) => {

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