import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { store, history} from './store';

import { Route, Switch,BrowserRouter as Router } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import "react-datepicker/dist/react-datepicker.css";
import 'react-input-range/lib/css/index.css';
import './assets/css/app.css';

//Myroslav 05/09/2020
import './assets/css/w3.css';
import './assets/css/calendar.css';

import './i18n';
import App from './components/App';
import './fonts/Poppins-Regular.otf'

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
    <Router forceRefresh={true}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
      </Router>
    </ConnectedRouter>
  </Provider>

), document.getElementById('root'));
