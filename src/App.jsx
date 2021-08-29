import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// Import views
import Home from './views/Home';
import NotFound from './views/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
