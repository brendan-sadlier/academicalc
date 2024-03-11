import React from "react";
import Home from "views/Home/Home";
import CalculateGpaPage from "views/CalculateGpaPage/CalculateGpaPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculate-gpa" element={<CalculateGpaPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;