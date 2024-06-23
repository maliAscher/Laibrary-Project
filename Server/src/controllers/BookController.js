const BookModel = require('../models/BookModel');

// Create a book
exports.createBook = async (req, res) => {
  try {
    const book = await BookModel.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete book by ID
exports.deleteBookById = async (req, res) => {
  try {
    const book = await BookModel.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await BookModel.find();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await BookModel.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read book by name
exports.getBookByName = async (req, res) => {
  try {
    const book = await BookModel.find({ name: req.params.name });
    if (!book || book.length === 0) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read book by publish_date
exports.getBookByPublishDate = async (req, res) => {
  try {
    const book = await BookModel.find({ publish_date: req.params.publish_date });
    if (!book || book.length === 0) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read book by genre
exports.getBookByGenre = async (req, res) => {
  try {
    const book = await BookModel.find({ genre: req.params.genre });
    if (!book || book.length === 0) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update book by ID
exports.updateBookById = async (req, res) => {
  try {
    const book = await BookModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read books by author
exports.getBooksByAuthor = async (req, res) => {
  try {
    const books = await BookModel.find({ author: req.params.author });
    if (!books || books.length === 0) {
      return res.status(404).json({ message: 'Books not found for the specific author' });
    }
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};


