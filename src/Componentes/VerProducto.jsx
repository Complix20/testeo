// src/Componentes/VerProducto.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './Styles/VerProducto.css';

function VerProducto({ productos }) {
  const { id } = useParams();
  const producto = productos.find((prod) => prod.id === id);

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="ver-producto-container">
      <h2>Detalles del Producto</h2>
      <div className="producto-detalle">
        <img src={producto.imagen} alt={producto.nombre} />
        <p><strong>ID:</strong> {producto.id}</p>
        <p><strong>Nombre:</strong> {producto.nombre}</p>
        <p><strong>Descripción:</strong> {producto.descripcion}</p>
        <p><strong>Características:</strong> {producto.caracteristicas}</p>
        <p><strong>Marca:</strong> {producto.marca}</p>
        <p><strong>Serie:</strong> {producto.serie}</p>
        <p><strong>Precio:</strong> {producto.precio}</p>
        <p><strong>Tipo:</strong> {producto.tipo}</p>
        <p><strong>Stock:</strong> {producto.stock}</p>
      </div>
    </div>
  );
}

export default VerProducto;
