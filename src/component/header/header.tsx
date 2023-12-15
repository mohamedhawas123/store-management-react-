import React from 'react';
import './header.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <div className="header">
      <div className="left-side">
        <a href="#" className="link">Products</a>
        <a href="#" className="link">Settings</a>
      </div>
      <div className="cart-icon">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="cart-badge">3</span>
      </div>
    </div>
  );
};

export default Header;
