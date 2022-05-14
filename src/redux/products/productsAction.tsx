import axios from "axios";
import { Dispatch } from "redux";


const fetchProductsRequest = () => {
    return {
        type: "FETCH_PRODUCTS_REQUEST"
    }
}

const fetchProductsSuccess = (products: object) => {
    return {
        type: "FETCH_PRODUCTS_SUCCESS",
        payload: products
    }
}

const fetchProductsFailure =  (error: string) => {
    return {
        type: "FETCH_PRODUCTS_FAILURE",
        payload: error
    }
}

export const fetchProducts= () => {
    return (dispatch : Dispatch) => {
        dispatch(fetchProductsRequest());
        axios.get("https://mocki.io/v1/3d562860-4709-4d72-87c1-fa4fd308ce5a")
        .then(response => {
            const products = response.data;
            dispatch(fetchProductsSuccess(products));
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchProductsFailure(errorMsg));
        })
    }
}
