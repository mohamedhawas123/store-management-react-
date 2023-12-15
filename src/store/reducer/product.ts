import { FailListProductAction, ProductState, StartListProductAction, SuccessListProductAction } from "../../models/product";
import * as actionTypes from '../action/actionTypes'


const initialState:ProductState = {
    products : [],
    error: null,
    loading: false,
}

type Action = 
| StartListProductAction
    | SuccessListProductAction
    | FailListProductAction
    

;


const reducer = (state=initialState, action:Action) => {
    switch(action.type) {
        case actionTypes.STARTLISTPRODUCT:
        
            return { ...state, loading: true, error: null };

        case actionTypes.SUCCESSLISTPRODUCT:
            return { ...state, loading: false, products: action.payload };

        case actionTypes.FAILLISTPRODUCT:
       
            return { ...state, loading: false, error: action.error };
        

        default:
            return state
    }
}

export default reducer