// App.jsx
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Dashboard from './Componentes/Dashboard';
import Productos from './Componentes/Productos';
import Sidebar from './Componentes/Sidebar';
import AddProd from './Componentes/AddProd';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="princi">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/agregar-producto" element={<AddProd />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
