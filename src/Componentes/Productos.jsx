// src/Componentes/Productos.jsx

import React from 'react';

import './Styles/Productos.css'; // Importa tu archivo CSS

function Productos() {
 
  return (
    <div className="productos-container">
      <div className='Cabecita1'>
      <div>Productos</div>
      <div className='agregacion-prod'>
        {/* Aquí agregaremos el botón "Agregar producto" */}
        <button className="agregar-btn">+ Agregar producto</button>
        {/* ... Otro contenido de la página de productos ... */}
      </div>
    </div>
    </div>


    
  );
}
export default Productos;