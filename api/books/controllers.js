const Book = require("../../models/Book");

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
exports.getOneBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const book = await Book.findById(bookId);
    return res.status(200).json(book);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    return res.status(200).json(book);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
exports.updateBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    await Book.findByIdAndUpdate(bookId, req.body);
    return res.status(200).end();
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
exports.deleteBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    await Book.findByIdAndDelete(bookId);
    return res.status(200).end();
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
