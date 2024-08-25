import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Post from "./post/Post";
import Home from "./home/Home";
import Nav from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:postId" element={<Post />} />
    </Routes>
  </BrowserRouter>
);
