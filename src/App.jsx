// App.jsx
import './App.css'
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import AppRouter from './Componentes/Router';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="princi">
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;



