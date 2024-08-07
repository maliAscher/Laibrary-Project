// export default AddBook;
import React, { useState } from 'react';
import { createBook } from '../Servers/bookAPI';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import'../Style/AddBook.css';

const AddBook = () => {
  const [newBook, setNewBook] = useState({ name: '', author: '', genre: '', limit_age: '', status: '' });
  const navigate = useNavigate();

  const handleCreateBook = async () => {
    const { name, author, genre, limit_age, status } = newBook;
    
    // Validation check
    if (!name || !author || !genre || !limit_age || !status) {
      Swal.fire("Error", "All fields must be filled out.", "error");
      return;
    }

    Swal.fire({
      title: "Do you want to add the book?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await createBook(newBook);
          setNewBook({ name: '', author: '', genre: '', limit_age: '', status: '' });
          Swal.fire("Saved!", "", "success").then(() => {
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
      <h1>Add Book</h1>
      <div className='position'>
        <input
          type="text"
          placeholder="Name"
          value={newBook.name}
          onChange={(e) => setNewBook({ ...newBook, name: e.target.value })}
        /><br></br>
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        /><br></br>
        <input
          type="text"
          placeholder="Genre"
          value={newBook.genre}
          onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
        /><br></br>
        <input
          type="text"
          placeholder="Limit Age"
          value={newBook.limit_age}
          onChange={(e) => setNewBook({ ...newBook, limit_age: e.target.value })}
        /><br></br>
        <input
          type="number"
          placeholder="Status"
          value={newBook.status}
          onChange={(e) => setNewBook({ ...newBook, status: e.target.value })}
        />
        <button onClick={handleCreateBook}>Create Book</button>
      </div>
    </div>
  );
};

export default AddBook;
