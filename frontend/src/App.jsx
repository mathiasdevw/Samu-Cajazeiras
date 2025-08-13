import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Tharm from "./pages/Tharm";

export default function App() {
  return (
    <Router>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/Tharm" element={<Tharm />} />
</Routes>

    </Router>
  );
}
