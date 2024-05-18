// src/Componentes/Productos.jsx
import React, { useState } from 'react';
import './Styles/Productos.css'; // Importa tu archivo CSS
import SearchBox from './SearchBox'; // Importa el componente SearchBox

function Productos() {
  const [filteredProducts, setFilteredProducts] = useState([]); // Aquí debes usar tu lista de productos

  const handleSearch = (query) => {
    // Filtra los productos según la consulta de búsqueda (query)
    // Actualiza filteredProducts con los resultados
    // Por ejemplo:
    const filtered = USERS.filter((product) => {
      return (
        product.id.includes(query) ||
        product.serie.includes(query) ||
        product.detalle.includes(query)
      );
    });
    setFilteredProducts(filtered);
  };

  return (
    <div className="productos-container">
      <div className="Cabecita1">
        <div>Productos</div>
        <div className="agregacion-prod">
          {/* Aquí agregaremos el botón "Agregar producto" */}
          <button className="agregar-btn">+ Agregar producto</button>
        </div>
      </div>
      <SearchBox onSearch={handleSearch} />
      {/* Mostrar la lista de productos filtrados */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Detalle</th>
            <th>Serie</th>
            <th>Precio</th>
            <th>Fecha de Registro</th>
            <th>Stock</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.detalle}</td>
              <td>{product.serie}</td>
              <td>{product.precio}</td>
              <td>{product.fechaRegistro}</td>
              <td>{product.stock}</td>
              <td>{product.estado}</td>
              <td>Acciones aquí</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Productos;
