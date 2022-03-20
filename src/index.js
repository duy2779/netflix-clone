import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

