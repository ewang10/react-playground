import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
//import App from './state/App';
//import App from './state-drills/App'
//import App from './shopping-list/App';
//import App from './demonymapp/demonymApp'
import { BrowserRouter } from "react-router-dom";
//import App from './paltrows-power-toes/App';
//import AppLang from './lang-context/AppLang';
//import RegistrationForm from './registrationForm/registrationForm';
import App from './playingwithdanger/App';
import './index.css';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';

/*
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
document.getElementById('root'));
*/

ReactDOM.render(
    <App />,
    document.getElementById('root')
);