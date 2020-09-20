import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css' ;

import Navbar from "./components/Navbar"
import Router from "./components/Router"
//import  "./App.css"
import store from "./store"
import {Provider} from 'react-redux'
const App =() => {
  return (
    <Provider store ={store} >
    <div className='App'>

      <Navbar/>
   
      <Router/>
      
    </div>
    </Provider>
  );
}

export default App;
