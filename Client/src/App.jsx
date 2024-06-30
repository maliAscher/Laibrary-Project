// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Book from './components/Book';
import Demo from './components/Demo';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Book />} />
      <Route path='/demo' element={<Demo />} />
    </Routes>
  );
};

export default App;
