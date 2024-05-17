//src/Componentes/Router.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './Componentes/Sidebar';
import Productos from './Componentes/Productos';
import Dashboard from './Componentes/Dashboard';

function AppRouter() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/productos" component={Productos} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
