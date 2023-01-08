const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')

// Get all users
// router.get('/', usersController.findAll)

// Create a user
router.post('/', usersController.create)

// Get a user
// router.get('/:id', usersController.findOne)

// Update a user
// router.put('/:id', usersController.update)

// Delete a user
// router.delete('/:id', usersController.delete)

module.exports = router