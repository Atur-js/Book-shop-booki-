import { createStore,applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import cartReducer from "./cart/cartReducer";
import productsReducer from "./products/productsReducer";

export type TypeRootReducer = {
    productsState: {
        loading: boolean,
        products: object[],
        error: string
    }
    
}


const rootReducer   = combineReducers({
    productsState: productsReducer,
    cartState: cartReducer
})



export const store = createStore(rootReducer, (applyMiddleware(thunk)));



export type RootState = ReturnType<typeof rootReducer>
