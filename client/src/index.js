import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './views/Home/Home'
import Navbar from "./components/Navbar/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path : '/navbar',
    element : <Navbar/>
  }
]);
root.render(<RouterProvider router={router} />);
