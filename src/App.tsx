import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { HomePage } from './screens/home/home';
import Header from './component/header/header';
function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <div>
          <Route exact path="/" component={HomePage} />
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
