import React from 'react';
import './App.css';
import Dashboard from './component/dashboard/Dashboard';
import NewEmployee from './component/edit/Checkout';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/create/employee" component={NewEmployee} />
      </Switch>
    </div>
  );
}

export default App;
