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

