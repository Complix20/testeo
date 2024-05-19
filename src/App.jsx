// src/App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Dashboard from './Componentes/Dashboard';
import Productos from './Componentes/Productos';
import Sidebar from './Componentes/Sidebar';
import AddProd from './Componentes/AddProd';
import VerProducto from './Componentes/VerProducto';

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const storedProductos = JSON.parse(localStorage.getItem('productos')) || [];
    setProductos(storedProductos);
  }, []);

  const handleAgregarProducto = (nuevoProducto) => {
    const nuevosProductos = [...productos, nuevoProducto];
    setProductos(nuevosProductos);
    localStorage.setItem('productos', JSON.stringify(nuevosProductos));
  };

  const handleDesactivarProducto = (id) => {
    const nuevosProductos = productos.filter(producto => producto.id !== id);
    setProductos(nuevosProductos);
    localStorage.setItem('productos', JSON.stringify(nuevosProductos));
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="princi">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/productos" element={<Productos productos={productos} onDesactivarProducto={handleDesactivarProducto} />} />
            <Route path="/agregar-producto" element={<AddProd onProductAdded={handleAgregarProducto} />} />
            <Route path="/producto/:id" element={<VerProducto productos={productos} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
