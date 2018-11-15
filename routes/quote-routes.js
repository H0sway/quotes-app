// routes/quote-routes.js

// Import express
const express = require(express);
// Define the router using the express router
const quoteRouter = express.Router();

// Import the quotesController
const quoteController = require('../controllers/quote-controller');

// For each route access the correct controller method

// Request all quotes, send it to the / route
quoteRouter.get('/', quoteController.findAll);

// Request single quote, send it to the /:id route
quoteRouter.get('/:id', quoteController.findById);

// Export the router
module.exports = quoteRouter;
