const axios = require("axios");
const router = require("express").Router();
var Book = require("../bookModel");

router.get("/searchBooks", (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes", {
      params: {
        q: req.query.q
      }
    })
    .then((response) => {
      // console.log(response.data);
      res.json(response.data);
    })
    .catch(err => res.status(422).json(err));
});

router.post("/books", (req, res) => {
  console.log(req.body);

  // Book is the model that we use to create a new entry in our database, req.body is the data we are passing
  Book.create(req.body)
  .then(function(insertedBook) {
    // If saved successfully, print the new Example document to the console
    console.log(insertedBook);
  })
  .catch(function(err) {
    // If an error occurs, log the error message
    console.log(err.message);
  });

  res.json({});
});

router.get("/books", (req, res) => {  
  // Book is the model that we use to create a new entry in our database, req.body is the data we are passing
  Book.find({})
  .then(function(books) {
    // If saved successfully, print the new Example document to the console
    console.log(books);
    res.json(books);
  })
  .catch(function(err) {
    // If an error occurs, log the error message
    console.log(err.message);
  });
});


module.exports = router;
