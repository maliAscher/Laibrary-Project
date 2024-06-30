// src/Books.js
import React, { useState, useEffect } from 'react';
import { getAllBooks, createBook, deleteBook, updateBook } from '../Servers/bookAPI';
import { Link } from 'react-router-dom';

const Book = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ name: '', author: '', genre: '', limit_age: '', status: '' });
  const [updateBookId, setUpdateBookId] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const data = await getAllBooks();
      setBooks(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateBook = async () => {
    try {
      await createBook(newBook);
      fetchBooks();
      setNewBook({ name: '', author: '', genre: '', limit_age: '', status: '' });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await deleteBook(id);
      fetchBooks();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateBook = async () => {
    try {
      await updateBook(updateBookId, newBook);
      fetchBooks();
      setUpdateBookId(null);
      setNewBook({ name: '', author: '', genre: '', limit_age: '', status: '' });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Books</h1>
      <br></br>
      <Link to='/demo'>
        <button>To the Next Page</button>
      </Link>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={newBook.name}
          onChange={(e) => setNewBook({ ...newBook, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <input
          type="text"
          placeholder="Genre"
          value={newBook.genre}
          onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
        />
        <input
          type="text"
          placeholder="Limit Age"
          value={newBook.limit_age}
          onChange={(e) => setNewBook({ ...newBook, limit_age: e.target.value })}
        />
        <input
          type="number"
          placeholder="status"
          value={newBook.status}
          onChange={(e) => setNewBook({ ...newBook, status: e.target.value })}
        />
        {updateBookId ? (
          <button onClick={handleUpdateBook}>Update Book</button>
        ) : (
          <button onClick={handleCreateBook}>Create Book</button>
        )}
      </div>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.name} - {book.author}
            <button onClick={() => handleDeleteBook(book._id)}>Delete</button>
            <button onClick={() => {
              setNewBook(book);
              setUpdateBookId(book._id);
            }}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Book;
