import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "./pages/App";
import About from "./pages/About";
import Encode from "./pages/Encode";
import OCR from "./pages/OCR";
import Login from "./pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/encode" element={<Encode />} />
      <Route path="/ocr" element={<OCR />} />
      <Route path="/login" element={<Login />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
