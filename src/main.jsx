import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClientProvider, QueryClient } from "react-query";

import './index.css'

import Navbar from "./shared/Navbar.jsx";
import Breadcrumb from "./shared/Breadcrumb.jsx";

import StudentList from "./pages/students/StudentList.jsx";
import StudentNew from "./pages/students/StudentNew.jsx";
import StudentDetail from "./pages/students/StudentDetail.jsx";
import StudentEdit from "./pages/students/StudentEdit.jsx";
import HomePage from "./pages/HomePage.jsx";

const root = document.getElementById("root");
const queryClient = new QueryClient()

ReactDOM.createRoot(root).render(
  <QueryClientProvider client={queryClient}>
    <div className="bg-gray-100 min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Breadcrumb />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/students/new" element={<StudentNew />} />
          <Route path="/students/details" element={<StudentDetail />} />
          <Route path="/students/edit" element={<StudentEdit />} />
          <Route path="/class" element={<StudentList />} />
        </Routes>
      </BrowserRouter>
    </div>
  </QueryClientProvider>
);