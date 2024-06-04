import {createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Signform from './signform';
import Home from './home';
import FilmPage from './film';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children : [
        {
          path: "signin",
          element: <Signform />
        },
        { 
            path : "home",
            element : <Home />
        },
        {
            path : "filmdetails",
            element : <FilmPage />
        },
        {
          path: "about",
          element: <h1>About</h1>
        },
        {
          path: "contact",
          element: <h1>Contact</h1>
        },
        {
          path: "*",
          element: <h1>404</h1>
        }
      ]
    },
  ]);