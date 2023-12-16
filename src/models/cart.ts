import { Product } from "./product";
import * as actionTypes from '../store/action/actionTypes'

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface AddToCart {
    type: typeof actionTypes.ADD_TO_CART;
  }



export interface AddToCartAction {
    type: typeof actionTypes.ADD_TO_CART;
    payload: { product: Product; quantity: number };
}

export interface RemoveFromCartAction {
    type: typeof actionTypes.REMOVE_FROM_CART;
    payload: number; 
}

export interface CLEAR_CART {
    type: typeof actionTypes.CLEAR_CART;
   
}