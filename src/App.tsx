import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HomePage } from './screens/home/home';
import Header from './component/header/header';
import { Cart } from './screens/cart/cart';
import {I18nextProvider } from 'react-i18next';
import i18n from './i18n'; 
function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <React.Fragment>
        <Router>
          <Header />
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/cart" component={Cart} />
          </div>
        </Router>
      </React.Fragment>
    </I18nextProvider>
  );
}

export default App;
