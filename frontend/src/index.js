import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./page/Home";
import Menu from "./page/Menu";
import About from "./page/About";
import Contact from "./page/Contact";
import Login from "./page/Login";
import NewProduct from "./page/NewProduct";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Signup from "./page/Signup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="Menu" element={<Menu />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="About" element={<About />} />
      <Route path="Login" element={<Login />} />
      <Route path="NewProduct" element={<NewProduct />} />
      <Route path="Signup" element={<Signup />} />
      
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}></RouterProvider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
