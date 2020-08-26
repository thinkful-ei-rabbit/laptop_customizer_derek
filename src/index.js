import React from 'react';
import ReactDOM from 'react-dom';
// import './styles/index.css';
// import STORE from './STORE'
// import App from './App';
import STORE from './OWL_STORE';
import OWL from './OWL'
import './OWL_App/styles/pile/sassy.css'

ReactDOM.render(
  <OWL store={STORE} />,
  document.getElementById('root'),
);