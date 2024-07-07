// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Book from './components/Book';
import HomePage from './components/HomePage';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/book' element={<Book />} />
      <Route path='/edit-book/:id' element={<EditBook />} />
      <Route path='/add-book' element={ <AddBook/>}/>
    </Routes>
  );
};

export default App;
