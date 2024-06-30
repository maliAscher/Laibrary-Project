import { Route, Routes, useRoutes } from 'react-router-dom';
import Demo from './components/Demo';

const Routing = () => {
  let element = useRoutes([
    { path: '/demo', element: <Demo /> },
  ]);

  return element;
}

export default Routing;
