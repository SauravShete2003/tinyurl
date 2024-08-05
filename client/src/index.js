import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './views/Home/Home'
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  
  {
    path : '*',
    element : <h1>404 Not Found</h1>
  },
  {
    path : '/signup',
    element : <Signup/>
  },
  {
    path : '/login',
    element : <Login/>
  }
]);
root.render(<RouterProvider router={router} />);
