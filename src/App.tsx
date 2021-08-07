import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
        <Router>
          <Route path="/" component={Login}/>
          </Router>
  );
}

export default App;
