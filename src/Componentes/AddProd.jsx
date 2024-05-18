// src/Componentes/AddProd.jsx
import React, { useState } from 'react';
import './Styles/AddProd.css'; // Importa tu archivo CSS

function AddProd() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [caracteristicas, setCaracteristicas] = useState('');
  const [marca, setMarca] = useState('');
  const [serie, setSerie] = useState('');
  const [precio, setPrecio] = useState('');
  const [tipo, setTipo] = useState('');
  const [stock, setStock] = useState('');
  const [imagen, setImagen] = useState(null); // Estado para la imagen

  const handleGuardar = () => {
    // Aquí puedes guardar los datos en la tabla de Productos
    // También puedes enviar la imagen al servidor si es necesario
    console.log('Datos guardados:', {
      nombre,
      descripcion,
      caracteristicas,
      marca,
      serie,
      precio,
      tipo,
      stock,
      imagen, // Agrega la imagen al objeto de datos
    });
  };

  const handleImagenChange = (e) => {
    // Maneja el cambio de la imagen
    const file = e.target.files[0];
    setImagen(URL.createObjectURL(file));
  };

  return (
    <div className="Agregacion">
      <div className="Cabezon">Agregar Producto</div>
      <div className="Formulario">
      <div className="ImagenContainer">
      <div className='ImageLoad'>
      {imagen && <img src={imagen} alt="Imagen seleccionada" />}
      </div>
      <div className='peque'> 
      <input
          type="file"
          accept="image/*"
          onChange={handleImagenChange} // Maneja el cambio de la imagen
        />
        </div>
      </div>     
      <div className="Forms">
        <label htmlFor="nombre">Nombre:</label>
        <br />
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <br />
        <label htmlFor="descripcion">Descripcion:</label>
        <br />
        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <br />
        <label htmlFor="caracteristicas">Carateriscas:</label>
        <br />
        <input
          type="text"
          placeholder="Características"
          value={caracteristicas}
          onChange={(e) => setCaracteristicas(e.target.value)}
        />
        <br />
        <label htmlFor="marca">Marca:</label>
        <br />
        <input
          type="text"
          placeholder="Marca"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
        />
        <br />
        <label htmlFor="serie">Serie:</label>
        <br />
        <input
          type="text"
          placeholder="Serie"
          value={serie}
          onChange={(e) => setSerie(e.target.value)}
        />
        <br />
        <label htmlFor="precio">Precio:</label>
        <br />
        <input
          type="text"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <br />
        <label htmlFor="tipo">Tipo:</label>
        <br />
        <input
          type="text"
          placeholder="Tipo"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        />
        <br />
        <label htmlFor="descripcion">Descripcion:</label>
        <br />
        <br />
        <input
          type="text"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <button onClick={handleGuardar}>Guardar</button>
      </div>
    </div>
    </div>
  );
}

export default AddProd;
