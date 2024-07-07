// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Book from './components/Book';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/book' element={<Book />} />
    </Routes>
  );
};

export default App;
