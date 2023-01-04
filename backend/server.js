const express = require('express');
const bodyParser = require("body-parser");
const app = express();

// Middlewares
app.use(express.json());
// app.use(bodyParser.json()); // Parse requests of content-type: application/json
// app.use(bodyParser.urlencoded({ extended: true })); // Parse requests of content-type: application/x-www-form-urlencoded

const db = require('./db/db')

// Routes
app.use('/models', require('./routes/modelsRoutes'));

const PORT = 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))