// src/EditBook.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBookById, updateBook } from '../Servers/bookAPI';
import Swal from 'sweetalert2';

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({ name: '', author: '', genre: '', limit_age: '', status: '' });

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    try {
      const data = await getBookById(id);
      setBook(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateBook = async () => {
    Swal.fire({
      title: "Do you want to update the book?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Update",
      denyButtonText: `Don't update`
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await updateBook(id, book);
          Swal.fire("Updated!", "", "success").then(() => {
            setTimeout(() => {
              navigate('/book'); // Navigate back to the Books page after 2 seconds
            }, 2000);
          });
        } catch (error) {
          console.error(error);
        }
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div>
      <h1>Edit Book</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={book.name}
          onChange={(e) => setBook({ ...book, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={book.author}
          onChange={(e) => setBook({ ...book, author: e.target.value })}
        />
        <input
          type="text"
          placeholder="Genre"
          value={book.genre}
          onChange={(e) => setBook({ ...book, genre: e.target.value })}
        />
        <input
          type="text"
          placeholder="Limit Age"
          value={book.limit_age}
          onChange={(e) => setBook({ ...book, limit_age: e.target.value })}
        />
        <input
          type="number"
          placeholder="Status"
          value={book.status}
          onChange={(e) => setBook({ ...book, status: e.target.value })}
        />
        <button onClick={handleUpdateBook}>Update Book</button>
      </div>
    </div>
  );
};

export default EditBook;
