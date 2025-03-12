import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import './index.css'

import Navbar from "./shared/Navbar.jsx";
import Breadcrumb from "./shared/Breadcrumb.jsx";

import StudentList from "./pages/students/StudentList.jsx";
import StudentNew from "./pages/students/StudentNew.jsx";
import HomePage from "./pages/HomePage.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <div className="bg-gray-100 min-h-screen">
    <BrowserRouter>
      <Navbar />
      <Breadcrumb />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/students/new" element={<StudentNew />} />
        <Route path="/class" element={<StudentList />} />
      </Routes>
    </BrowserRouter>
  </div>
);