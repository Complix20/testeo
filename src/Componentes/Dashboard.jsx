// src/Componentes/Dashboard.jsx
import React from 'react';
import './Styles/Dashboard.css';

function Dashboard() {
  return (
    
    <div className="Dashboard">
      <div className="Cabecita">
        <div>Dashboard</div>
        <div className="ChangeDate">Cambiar Fecha o Periodo</div>
      </div>
      <div className="Statistics">
        <div className="StatItem">68 <br /> Órdenes del día de hoy</div>
        <div className="StatItem">12 <br /> Usuarios nuevos</div>
        <div className="StatItem">S/ 13,500.00 <br />Ingresos de hoy</div>
      </div>
    </div>
  );
}

export default Dashboard;
