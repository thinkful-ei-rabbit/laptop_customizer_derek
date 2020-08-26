import React from 'react';
import ReactDOM from 'react-dom';
// import './styles/index.css';
// import STORE from './Trello_App/STORE'
// import App from './Trello_App/App';
// import STORE from './OWL_App/OWL_STORE';
// import OWL from './OWL_App/OWL';
// import './OWL_App/styles/pile/sassy.css';
// import HelloWorld from './state-drills/HelloWorld';
// import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';

ReactDOM.render(
  <RouletteGun bullet={3}/>,
  document.getElementById('root'),
);