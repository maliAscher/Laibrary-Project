import { Route, Routes, useRoutes } from 'react-router-dom';
import Book from './components/Book';
import AddBook from './components/AddBook';

const Routing = () => {
  let element = useRoutes([
    { path: '/book', element: <Book/> },
    { path: '/add-book', element: <AddBook /> },
  ]);

  return element;
}

export default Routing;
