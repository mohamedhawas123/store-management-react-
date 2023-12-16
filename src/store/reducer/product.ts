import { AddToCartAction, RemoveFromCartAction, CLEAR_CART } from "../../models/cart";
import {FailListProductAction, ProductState, StartListProductAction, SuccessListProductAction } from "../../models/product";
import * as actionTypes from '../action/actionTypes'


const initialState:ProductState = {
    products : [],
    cart: [],
    error: null,
    loading: false,
}

type Action = 
| StartListProductAction
    | SuccessListProductAction
    | FailListProductAction
    |   AddToCartAction 
    | RemoveFromCartAction 
    | CLEAR_CART;
    

;


const reducer = (state=initialState, action:Action) => {
    switch(action.type) {
        case actionTypes.STARTLISTPRODUCT:
        
            return { ...state, loading: true, error: null };

        case actionTypes.SUCCESSLISTPRODUCT:
            return { ...state, loading: false, products: action.payload };

        case actionTypes.FAILLISTPRODUCT:
       
            return { ...state, loading: false, error: action.error };

        case actionTypes.ADD_TO_CART:
            const addIndex = state.cart.findIndex(item => item.product.id === action.payload.product.id);
            let newCart = [...state.cart];
            if (addIndex >= 0) {
                newCart[addIndex] = {
                    ...newCart[addIndex],
                    quantity: newCart[addIndex].quantity + 1
                    };
                } else {
                    newCart.push({ product: action.payload.product, quantity: 1 });
                }
            return { ...state, cart: newCart };
    
        case actionTypes.REMOVE_FROM_CART:
            const removeIndex = state.cart.findIndex(item => item.product.id === action.payload);
            let newcart;
            if (removeIndex >= 0) {
                console.log(`state cart is ${state.cart[removeIndex].quantity}`)
                if (state.cart[removeIndex].quantity > 1) {
                    newcart = [...state.cart];
                    newcart[removeIndex] = {
                        ...newcart[removeIndex],
                        quantity: newcart[removeIndex].quantity - 1
                        };
                    } else {
                        newcart = state.cart.filter(item => item.product.id !== action.payload);
                    }
                return { ...state, cart: newcart };
                }
                return state;
    
            case actionTypes.CLEAR_CART:
                return { ...state, cart: [] };
        

        default:
            return state
    }
}

export default reducer