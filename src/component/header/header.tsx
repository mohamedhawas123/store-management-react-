import React from 'react';
import './header.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { State } from '../../models/product';
import { Link } from 'react-router-dom'; 

const Header = () => {

  
  
  const state = useSelector((state: State) => state.products)
  const cartCount = state.cart 
  const countoProduct =cartCount.reduce((acc,product) => acc +product.quantity, 0)
  return (
    <div className="header">
      <div className="left-side">
        <Link to="/" className='link' >
          Products
        </Link>
        <Link to="/settings" className='link' >
          settings
        </Link>
      </div>
      <Link to="/cart" >
      <div className="cart-icon">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="cart-badge">{countoProduct}</span>
      </div>
      </Link> 
      
    </div>
  );
};

export default Header;
