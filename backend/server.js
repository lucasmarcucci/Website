const express = require('express');
const cors = require("cors");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");

const app = express();

// ---Middlewares--- //
app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// app.use(bodyParser.json()); // Parse requests of content-type: application/json
// app.use(bodyParser.urlencoded({ extended: true })); // Parse requests of content-type: application/x-www-form-urlencoded

// Routes
// app.use('/models', require('./routes/modelsRoutes'));
app.use('/users', require('./routes/usersRoutes'));

const PORT = 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))