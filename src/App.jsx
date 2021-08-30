import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// Import views
import Home from './views/Home';
import NotFound from './views/NotFound';

// Import styles
import './styles/index.scss';

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
