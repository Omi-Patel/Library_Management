const express = require("express");
const Book = require("../models/book");

const router = express.Router();

// CREATE a new book
router.post("/books", async (req, res) => {
  try {
    const {
      title,
      author,
      genre,
      publicationYear,
      price,
      quantity,
      publisher,
    } = req.body;

    // Validate request body
    if (
      !title ||
      !author ||
      !genre ||
      !publicationYear ||
      !price ||
      !quantity ||
      !publisher
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newBook = new Book({
      title,
      author,
      genre,
      publicationYear,
      price,
      quantity,
      publisher,
    });

    const book = await newBook.save();

    res.status(201).json({ success: "Book Created Successfully!", book });

    // end
  } catch (error) {
    res.status(500).json({ error: "Server Error..!" });
  }
});


module.exports = router;
