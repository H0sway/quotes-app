// controllers/quote-controller.js

// Import the Quote model.
const Quote =  require('../models/quote');

// Instantiate the controller object
const quotesController = {};

// Controller method for handling a request for all quotes
quotesController.findAll = (req, res) => {
  // Uses the findAll method from Quote
  Quote.findAll()
  .then(quotes => {
    // Sends the quotes as a JSON object
    res.json({
      message: 'Success',
      data: quotes
    });
  })
  .catch(err => {
    // If something goes wrong it logs the error in the console and sends it as a JSON object
    console.log(err);
    res.status(500).json({err});
  });
};

// Controller method for handling a request for a single quote
quotesController.findById = (req, res) => {
  // Quotes method for finding by id, passes the id as an argument
  Quote.findById(req.params.id)
  .then(quote => {
    // Sends the quote as a JSON object
    res.json({
      message: "Success",
      data: quote
    });
  })
  .catch(err => {
    // If something goes wrong it logs the error in the console and sends it as a JSON object
    console.log(err);
    res.status(500).json({err});
  });
};

// Export the controller
module.exports = quotesController;
