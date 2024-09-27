import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./views/Home/Home";
import Signup from "./views/Signup/Signup";
import Login from "./views/Login/Login";
import GenerateLink from "./views/GenerateLink/GenerateLink";
import MyLinks from "../src/views/MyLinks/MyLinks";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PrivacyPolicy from "./views/PrivacyPolicy/PrivacyPolicy";
import TermsCondition from "./views/TermsCondition/TermsCondition";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/alllinks",
    element: <MyLinks />,
  },
  {
    path: "/navbar",
    element: <Navbar />,
  },
  {
    path: "/footer",
    element: <Footer />,
  },
  {
    path: "/privacypolicy",
    element: <PrivacyPolicy />,
  },
  {
    path: "termscondition",
    element: <TermsCondition />,
  },
  {
    path : '/generate',
    element : <GenerateLink />
  }
]);
root.render(<RouterProvider router={router} />);
