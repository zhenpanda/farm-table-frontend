import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import {IndexRoute,Router,Route,browserHistory} from 'react-router';
import reduxThunk from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';

import './css/style.css';
import './css/materialize/css/materialize.min.css';

// composed components
import ReuiredAuth from './components/Require_authentication'

// basic components
import App from './components/App';
import Home from './components/Home';
import Farm from './components/Farm';
import SetupFarm from './components/SetupFarm';
import Summary from './components/Summary';
import Visitor from './components/Visitor';

// import Async from './middlewares/async'

// reducers
import reducers from './reducers';

// connecting middlewares
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

// wrap store with provider hold the store, applying reducers
// broadcast down into child components when change happens
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="farm" component={Farm} />
      <Route path="setupFarm" component={SetupFarm} />
      <Route path="summary" component={Summary} />
      <Route path="visitor" component={Visitor} />
    </Route>
  </Router>
  </Provider>
  ,document.querySelector('.app')
);

registerServiceWorker();
