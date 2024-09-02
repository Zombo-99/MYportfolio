import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OtherPage from "./pages/OtherPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/other" element={<OtherPage />} />
      </Routes>
    </Router>
  );
}

export default App;
