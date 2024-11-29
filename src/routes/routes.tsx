import { createBrowserRouter } from 'react-router-dom';
import { Explore, Hero } from '../features';
import { Root } from './root';
import { NotFoundPages } from './not-found-pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFoundPages />,
    children: [
      {
        path: '/',
        element: <Hero />,
      },
      {
        path: '/explore',
        element: <Explore />,
      },
    ],
  },
]);
