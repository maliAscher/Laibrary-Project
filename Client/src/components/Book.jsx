// src/Books.js
import React, { useState, useEffect } from 'react';
import { getAllBooks, deleteBook } from '../Servers/bookAPI';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../Style/Book.css'

const Book = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

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

  const handleDeleteBook = async (id) => {
    Swal.fire({
      title: "Do you want to delete the book?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't delete`
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteBook(id);
          fetchBooks();
          Swal.fire("Deleted!", "", "success");
        } catch (error) {
          console.error(error);
        }
      } else if (result.isDenied) {
        Swal.fire("Book is not deleted", "", "info");
      }
    });
  };

  return (
    <div>
      <h1>Books</h1>
      <br />
      <Link to='/add-book'>
        <button>Add New Book</button>
      </Link>
      <div>
        <ul>
          {books.map((book) => (
            <li key={book._id}>
              {book.name} - {book.author} <br></br>
              <button className='button-position' onClick={() => handleDeleteBook(book._id)}>Delete</button>
              <button onClick={() => navigate(`/edit-book/${book._id}`)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Book;
