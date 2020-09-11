import React from 'react';
//import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Form from './components/Form'
import Board from './components/Board'
import Game from './components/Game'
import Title from './components/Title'
import Sidebar from './components/Sidebar'

function App() {
  return (
    
    <div className="App">
      <Title />
      <Sidebar />
      <Router>
<Switch>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/game" component={Game}>
            <Game />
          </Route>
      
        </Switch>
        </Router>
              </div>
  );
}

export default App;
