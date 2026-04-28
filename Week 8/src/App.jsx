import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { Terminal, Home as HomeIcon, Database, Info } from "lucide-react";

import Home from "./pages/Home";
import Vault from "./pages/Vault";
import About from "./pages/About";

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-brand">
          <Terminal size={24} color="var(--primary)" />
          Snippet Vault
        </div>
        
        <NavLink 
          to="/" 
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          <HomeIcon size={18} /> Home
        </NavLink>
        
        <NavLink 
          to="/vault" 
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          <Database size={18} /> Vault
        </NavLink>
        
        <NavLink 
          to="/about" 
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          <Info size={18} /> About
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vault" element={<Vault />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
