/* /src/Componentes/Productos.jsx */
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Styles/Productos.css';
import SearchBox from './SearchBox';

function Productos({ productos, onDesactivarProducto, onProductAdded }) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const itemsPerPage = 4; // Limitar a 4 productos por página
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    setFilteredProducts(productos);
  }, [productos]);

  const handleSearch = (query) => {
    const filtered = productos.filter((product) =>
      product.id.includes(query) ||
      product.serie.includes(query) ||
      product.nombre.includes(query)
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handleDelete = (id) => {
    onDesactivarProducto(id);
  };

  const handleView = (product) => {
    navigate('/ver-producto', { state: { product } });
  };

  const handleUpdate = (product) => {
    navigate('/agregar-producto', { state: { product } });
  };

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
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Serie</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.nombre}</td>
              <td>{product.descripcion}</td>
              <td>{product.serie}</td>
              <td>{product.precio}</td>
              <td>{product.stock}</td>
              <td>
                <button onClick={() => handleView(product)}>Ver</button>
                <button onClick={() => handleUpdate(product)}>Actualizar</button>
                <button onClick={() => handleDelete(product.id)}>Desactivar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>{currentPage}</span>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentItems.length < itemsPerPage}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default Productos;


