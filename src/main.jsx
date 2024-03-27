import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Pages/Home/Home';
import ListedBook from './Pages/LIstedBook/ListedBook';
import PagesRead from './Pages/PagesRead/PagesRead';
import MainLayout from './Layout/MainLayout/MainLayout';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import BookDetail from './Components/BookDetail/BookDetail';
import ReadBook from './Components/ReadBook/ReadBook';
import WishlistBook from './Components/WishlistBook/WishlistBook';
import Contact from './Components/Contact/Contact';
import Review from './Components/Review/Review';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/listedBook",
        element: <ListedBook></ListedBook>,
        children:[
          {
            path: 'readBook',
            element:<ReadBook></ReadBook>,
          },
          {
            path: 'wishListBook',
            element: <WishlistBook></WishlistBook>,
          }
        ]
      },
      {
        path: "pagesRead",
        element: <PagesRead></PagesRead>,
      },
      {
        path: "bookDetail/:id",
        element: <BookDetail></BookDetail>,
    
        
      },
      {
        path: "contact",
        element: <Contact></Contact>
      },
      {
        path: "review",
        element: <Review></Review>
      }
     

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

    <ToastContainer />
  </React.StrictMode>,
)
