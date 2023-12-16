import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchProducts, addToCart} from '../../store/action/product'
import { Product, State } from "../../models/product"
import './home.css'
import { useTranslation } from "react-i18next"


export const HomePage = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: State) => state.products)
    const products = state.products;
    const loading=  state.loading
    const { t } = useTranslation();
    
    const { i18n } = useTranslation();
    const addoCart = (product:Product) => {
        dispatch(addToCart(product))
    }

    useEffect(() => {
        document.documentElement.setAttribute('dir', i18n.language === 'ar' ? 'rtl' : 'ltr');
        dispatch(fetchProducts());
    }, [dispatch, i18n.language]);

    return (

        <>
       
        {loading ?? (
        <div className="loader-container">
            <div className="loader"></div>
          </div>
        )}
    <div className="product-container">
            
            {products.map(product => (
                <div className="product-card" key={product.title}>
                    <img src={product.thumbnail} alt={product.title} className="product-image" />
                    <div className="product-info">
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <div className="product-price">
                            <span className="original-price">${product.price}</span>
                            <span className="discount-price">${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}</span>
                        </div>
                        <div className="product-details">
                            <span className="rating">{t('rating')}: {product.rating}</span>
                            <span className="stock">{t('stock')}: {product.stock}</span>
                            <span className="brand">{t('brand')}: {product.brand}</span>
                        </div>
                        <button onClick={() => addoCart(product)} >{t('addToCart')}</button>
                    </div>
                </div>
            ))}
        </div>
        </>
        
    );
}