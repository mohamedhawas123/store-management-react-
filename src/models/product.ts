import * as actionTypes from '../store/action/actionTypes'
import { CartItem } from './cart';


export interface Product {
id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductState {
  products: Product[];
  cart:CartItem[];
  error: Error | null;
  loading: boolean;
}

export interface State {
  products: ProductState;
}

export interface StartListProductAction {
  type: typeof actionTypes.STARTLISTPRODUCT;
}

export interface SuccessListProductAction {
  type: typeof actionTypes.SUCCESSLISTPRODUCT;
  payload: Product[];
}

export interface FailListProductAction {
  type: typeof actionTypes.FAILLISTPRODUCT;
  error: Error;
}

