import React from 'react';
import './header.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { State } from '../../models/product';
import { Link } from 'react-router-dom'; 
import { useTranslation } from 'react-i18next';

const Header = () => {

  
  
  const state = useSelector((state: State) => state.products)
  const cartCount = state.cart 
  const countoProduct =cartCount.reduce((acc,product) => acc +product.quantity, 0)

  const { i18n } = useTranslation();
  const {t} = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="header">
      <div className="left-side">
        <Link to="/" className='link' >
          {t('products')}
        </Link>
        <Link to="/settings" className='link' >
        {t('settings')}
        </Link>
      </div>
      <Link to="/cart" >
      <div className="cart-icon">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="cart-badge">{countoProduct}</span>
      </div>
      </Link> 

      <button onClick={toggleLanguage}>
      {i18n.language === 'en' ? 'عربي' : 'English'}
    </button>
      
    </div>
  );
};

export default Header;
