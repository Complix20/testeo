// src/Componentes/Productos.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Styles/Productos.css'; // Importa tu archivo CSS
import SearchBox from './SearchBox'; // Importa el componente SearchBox

function Productos() {
  const [filteredProducts, setFilteredProducts] = useState([]); // Aquí debes usar tu lista de productos
  const itemsPerPage = 10; // Cambia esto según tus necesidades
  const [currentPage, setCurrentPage] = useState(1);

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
    setCurrentPage(1); // Reinicia la página actual al realizar una búsqueda
  };

  // Calcula los índices para la paginación
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="productos-container">
      <div className="Cabecita1">
        <div>Productos</div>
        <div className="agregacion-prod">
          <Link to="/agregar-producto">
          <button className="agregar-btn">+ Agregar producto</button>
          </Link>
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
          {currentItems.map((product) => (
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
      {/* Componente de navegación de paginación */}
      <div className="pagination">
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Anterior
        </button>
        <span> {currentPage} </span>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentItems.length < itemsPerPage}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default Productos;
