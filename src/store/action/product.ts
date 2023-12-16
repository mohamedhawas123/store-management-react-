import * as actionTypes from './actionTypes'
import { Product } from '../../models/product';
import axios from 'axios';




export const fetchProducts = ():any => async(dispatch:any) => {

    try {
        dispatch({
            type: actionTypes.STARTLISTPRODUCT,

        })

        const res =await axios.get("https://dummyjson.com/products")
        const products = res.data.products

        dispatch({
            type: actionTypes.SUCCESSLISTPRODUCT,
            payload: products
        })
        

    }catch(e) {
        console.log(e)
        dispatch({
            type: actionTypes.FAILLISTPRODUCT,
            error: e
        })
    }

}

export const addToCart = (product: Product) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: { product, quantity: 1 }
    };
};


export const removeFromCart = (productId: number) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: productId
    };
};

export const clearCart = () => {
    return {
        type: actionTypes.CLEAR_CART
    };
};
