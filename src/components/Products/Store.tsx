import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";
import { fetchProducts } from "../../redux/products/productsAction";
import styles from "./Store.module.css";
import Loader from "./Loader";
import Hero from "../Hero";
import { TypeRootReducer } from "../../redux/store";




const Store: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const productsState = useSelector((state:  TypeRootReducer) => state.productsState);


  useEffect(() => {
    if (!productsState.products.length) dispatch<any>(fetchProducts());
  }, []);

  return (
    <>
    <Hero/>
    <div className={styles.container}>
        
      {productsState.loading ? (
        <Loader />
      ) : productsState.error ? (
        <p>Somethin went wrong</p>
      ) : (
        productsState.products.map((product : any) => (
          <Product key={product.id} productData={product}  />
        ))
      )}
    </div>
    </>
  );
};

export default Store;
