import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchProducts} from '../../store/action/product'
import { State } from "../../models/product"
import './home.css'


export const HomePage = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: State) => state.products)
    const products = state.products;
    const loading=  state.loading
    console.log(loading)

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

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
                            <span className="rating">Rating: {product.rating}</span>
                            <span className="stock">Stock: {product.stock}</span>
                            <span className="brand">Brand: {product.brand}</span>
                        </div>
                        <button>Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
        </>
        
    );
}