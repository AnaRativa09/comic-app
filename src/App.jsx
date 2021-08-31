import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// Import views
import Home from './views/Home';
import NotFound from './views/NotFound';
import Collection from './views/Collection';

// Import styles
import './styles/index.scss';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/collection" component={Collection} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;
