//src/Componentes/Router.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';
import Productos from './Productos';
import Dashboard from './Dashboard';

function AppRouter() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/productos" component={Productos} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default AppRouter;


