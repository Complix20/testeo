// App
import './App.css'
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Dashboard from './Componentes/Dashboard';
import Sidebar from './Componentes/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="princi">
        <Sidebar />
        <Dashboard />
      </div>
      <Footer />
    </div>
  )
}

export default App;



