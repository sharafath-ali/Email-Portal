import React from "react";
import Nav from "./Nav";
import "./App.css";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Mail from "./Mail";
import Emaillist from "./Email";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <div className="Appaction">
          <Sidebar />
          <Routes>
            <Route path="/Mail" element={<Mail />} />
            <Route path="/" element={<Emaillist />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
