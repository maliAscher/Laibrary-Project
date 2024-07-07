

// // src/Books.js
// import React, { useState, useEffect } from 'react';
// import { getAllBooks, deleteBook, updateBook } from '../Servers/bookAPI';
// import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const Book = () => {
//   const [books, setBooks] = useState([]);
//   const [newBook, setNewBook] = useState({ name: '', author: '', genre: '', limit_age: '', status: '' });
//   const [updateBookId, setUpdateBookId] = useState(null);

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   const fetchBooks = async () => {
//     try {
//       const data = await getAllBooks();
//       setBooks(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDeleteBook = async (id) => {
//     Swal.fire({
//       title: "Do you want to delete the book?",
//       showDenyButton: true,
//       showCancelButton: true,
//       confirmButtonText: "Delete",
//       denyButtonText: `Don't delete`
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           await deleteBook(id);
//           fetchBooks();
//           Swal.fire("Deleted!", "", "success");
//         } catch (error) {
//           console.error(error);
//         }
//       } else if (result.isDenied) {
//         Swal.fire("Book is not deleted", "", "info");
//       }
//     });
//   };

//   const handleUpdateBook = async () => {
//     Swal.fire({
//       title: "Do you want to update the book?",
//       showDenyButton: true,
//       showCancelButton: true,
//       confirmButtonText: "Update",
//       denyButtonText: `Don't update`
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           await updateBook(updateBookId, newBook);
//           fetchBooks();
//           setUpdateBookId(null);
//           setNewBook({ name: '', author: '', genre: '', limit_age: '', status: '' });
//           Swal.fire("Updated!", "", "success");
//         } catch (error) {
//           console.error(error);
//         }
//       } else if (result.isDenied) {
//         Swal.fire("Changes are not saved", "", "info");
//       }
//     });
//   };

//   return (
//     <div>
//       <h1>Books</h1>
//       <br />
//       <Link to='/add-book'>
//         <button>Add New Book</button>
//       </Link>
//       <div>
//         <ul>
//           {books.map((book) => (
//             <li key={book._id}>
//               {book.name} - {book.author}
//               <button onClick={() => handleDeleteBook(book._id)}>Delete</button>
//               <button onClick={() => {
//                 setNewBook(book);
//                 setUpdateBookId(book._id);
//               }}>Edit</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Book;





//////////////////////////////


// import React, { useState, useEffect } from 'react';
// import { getAllBooks, deleteBook, updateBook } from '../Servers/bookAPI';
// import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const Book = () => {
//   const [books, setBooks] = useState([]);
//   const [newBook, setNewBook] = useState({ name: '', author: '', genre: '', limit_age: '', status: '' });
//   const [updateBookId, setUpdateBookId] = useState(null);

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   const fetchBooks = async () => {
//     try {
//       const data = await getAllBooks();
//       setBooks(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDeleteBook = async (id) => {
//     Swal.fire({
//       title: "Do you want to delete the book?",
//       showDenyButton: true,
//       showCancelButton: true,
//       confirmButtonText: "Delete",
//       denyButtonText: `Don't delete`
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           await deleteBook(id);
//           fetchBooks();
//           Swal.fire("Deleted!", "", "success");
//         } catch (error) {
//           console.error(error);
//         }
//       } else if (result.isDenied) {
//         Swal.fire("Book is not deleted", "", "info");
//       }
//     });
//   };

//   const handleUpdateBook = async () => {
//     Swal.fire({
//       title: "Do you want to update the book?",
//       showDenyButton: true,
//       showCancelButton: true,
//       confirmButtonText: "Update",
//       denyButtonText: `Don't update`
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           console.log('Updating book with ID:', updateBookId);
//           console.log('New book details:', newBook);
//           await updateBook(updateBookId, newBook);
//           fetchBooks();
//           setUpdateBookId(null);
//           setNewBook({ name: '', author: '', genre: '', limit_age: '', status: '' });
//           Swal.fire("Updated!", "", "success");
//         } catch (error) {
//           console.error(error);
//         }
//       } else if (result.isDenied) {
//         Swal.fire("Changes are not saved", "", "info");
//       }
//     });
//   };

//   return (
//     <div>
//       <h1>Books</h1>
//       <br />
//       <Link to='/add-book'>
//         <button>Add New Book</button>
//       </Link>
//       <div>
//         <ul>
//           {books.map((book) => (
//             <li key={book._id}>
//               {book.name} - {book.author}
//               <button onClick={() => handleDeleteBook(book._id)}>Delete</button>
//               <button onClick={() => {
//                 setNewBook(book);
//                 setUpdateBookId(book._id);
//               }}>Edit</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       {updateBookId && (
//         <div>
//           <input
//             type="text"
//             placeholder="Name"
//             value={newBook.name}
//             onChange={(e) => setNewBook({ ...newBook, name: e.target.value })}
//           />
//           <input
//             type="text"
//             placeholder="Author"
//             value={newBook.author}
//             onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
//           />
//           <input
//             type="text"
//             placeholder="Genre"
//             value={newBook.genre}
//             onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
//           />
//           <input
//             type="text"
//             placeholder="Limit Age"
//             value={newBook.limit_age}
//             onChange={(e) => setNewBook({ ...newBook, limit_age: e.target.value })}
//           />
//           <input
//             type="number"
//             placeholder="Status"
//             value={newBook.status}
//             onChange={(e) => setNewBook({ ...newBook, status: e.target.value })}
//           />
//           <button onClick={handleUpdateBook}>Update Book</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Book;




// src/Books.js
import React, { useState, useEffect } from 'react';
import { getAllBooks, deleteBook } from '../Servers/bookAPI';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

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
              {book.name} - {book.author}
              <button onClick={() => handleDeleteBook(book._id)}>Delete</button>
              <button onClick={() => navigate(`/edit-book/${book._id}`)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Book;
