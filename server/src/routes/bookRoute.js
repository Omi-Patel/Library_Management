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

// GET all books
router.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({ success: "Books Retrieved Successfully!", books });
  } catch (error) {
    res.status(500).json({ error: "Server Error..!" });
  }
});

// GET a single book by ID
router.get("/books/:id", async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.status(200).json({ success: "Book Retrieved Successfully!", book });
  } catch (error) {
    res.status(500).json({ error: "Server Error..!" });
  }
});

// UPDATE a book by ID
router.put("/books/:id", async (req, res) => {
  try {
    const bookId = req.params.id;
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

    const updatedBook = {
      title,
      author,
      genre,
      publicationYear,
      price,
      quantity,
      publisher,
    };

    const book = await Book.findByIdAndUpdate(bookId, updatedBook, {
      new: true,
    });

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.status(200).json({ success: "Book Updated Successfully!", book });
  } catch (error) {
    res.status(500).json({ error: "Server Error..!" });
  }
});



module.exports = router;
