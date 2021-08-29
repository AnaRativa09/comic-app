import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// Import views
import Home from './views/Home';
import NotFound from './views/NotFound';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;
