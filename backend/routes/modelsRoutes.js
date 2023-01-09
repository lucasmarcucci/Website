const express = require('express');
const router = express.Router();
const modelsController = require('../controllers/modelsController')

// Get all models
router.get('/', modelsController.getAll)

// Create a model
router.post('/', modelsController.create)

// Get a model
router.get('/:id', modelsController.findOne)

// Update a model
router.put('/:id', modelsController.update)

// Delete a model
router.delete('/:id', modelsController.delete)

module.exports = router