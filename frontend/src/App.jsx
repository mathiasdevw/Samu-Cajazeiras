import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Modulo_Tharm from "./pages/Modulo_Tharm";

export default function App() {
  return (
    <Router>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/Modulo_Tharm" element={<Modulo_Tharm />} />
</Routes>

    </Router>
  );
}
