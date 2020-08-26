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
// import RouletteGun from './state-drills/RouletteGun';
import Accordion from './Accordion/Accordion';

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

ReactDOM.render(
  <Accordion sections={sections}/>,
  document.getElementById('root'),
);