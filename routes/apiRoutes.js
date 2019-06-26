const axios = require("axios");
const router = require("express").Router();

router.get("/books", (req, res) => {
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

module.exports = router;
