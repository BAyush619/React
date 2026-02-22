import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { BrowserRouter, createBrowserRouter } from "react-router";
import Movies from './components/Movies.jsx';
import Header from './components/Header.jsx';
import FavouriteMovies from './components/FavouriteMovies.jsx';
let router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Movies></Movies>
      },
      {
        path: "/fav",
        element: <FavouriteMovies></FavouriteMovies>
      }

    ]

  },

])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />

)
