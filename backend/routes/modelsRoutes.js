const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const modelsController = require('../controllers/modelsController');

// Get all models
router.get('/', modelsController.findAll)

// Create a model
// router.post('/', modelsController.create())
// router.post('/', jsonParser, (req, res) => {
//     modelsController.create(req.body)
// })
router.post('/', (req, res) => {
    const data = req.body
    console.log(data)
    modelsController.create(data)
})

// Get a model
router.get('/:id', modelsController.findOne)

// // Update a model
router.put('/:id', modelsController.update)

// Delete a model
router.delete('/:id', modelsController.delete)

module.exports = router