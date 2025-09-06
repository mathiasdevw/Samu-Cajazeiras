import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Tharm from "./pages/Tharm";
import Operacional from "./pages/Operacional";

export default function App() {
  return (
    <Router>
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Modulo-Tharm" element={<Tharm/>}/>
        <Route path="/Modulo-Operacional" element={<Operacional/>}/>
</Routes>

    </Router>
  );
}
