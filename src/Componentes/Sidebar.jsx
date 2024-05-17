// src/Componentes/Sidebar.jsx
import React from 'react';
import './Styles/Sidebar.css';
function Sidebar() {
  return (
    <aside className="App-sidebar">
      <h2>Admin</h2>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Usuarios registrados</li>
          <li>Productos</li>
          <li>Órdenes</li>
          <li>Productos más vendidos</li>
          <li>Series</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
