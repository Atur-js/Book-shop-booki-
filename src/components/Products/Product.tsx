import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {  isInCart, quantityCount } from "../../helper/functions";
import trashIcon from "../../assets/icons/trash.svg";
import styles from "./Product.module.css";




import  {
  addItem,
  removeItem,
  increase,
  decrease,
} from "../../redux/cart/cartAction";
import t from "../i18n/translate";
import { RootState } from "../../redux/store";


interface Props {
    productData : any;
    
}

const Product: React.FC<Props> = ({productData}): JSX.Element => {
  const state = useSelector((state : RootState) => state.cartState);
  const dispatch = useDispatch();


  

  return (
    <div className={styles.container}>
      <img className= {styles.cardImage} src={productData.image} alt="product" />
      <h3>{productData.title}</h3>
      <p>{productData.author}</p>
      <p>{`${productData.price} $`}</p>
      <div className={styles.linkContainer}>
        <div className={styles.buttonContainer}>
          {quantityCount(state, productData.id) === 1 && (
            <button
              className={styles.smallButton}
              onClick={() => dispatch(removeItem(productData))}
            >
              <img src={trashIcon} alt="trash" />
            </button>
          )}
          {quantityCount(state, productData.id) > 1 && (
            <button
              className={styles.smallButton}
              onClick={() => dispatch(decrease(productData))}
            >
              -
            </button>
          )}
          {quantityCount(state, productData.id) > 0 && (
            <span className={styles.counter}>
              {quantityCount(state, productData.id)}
            </span>
          )}
          {isInCart(state, productData.id) ? (
            <button
              className={styles.smallButton}
              onClick={() => dispatch(increase(productData))}
            >
              +
            </button>
          ) : (
            <button onClick={() => dispatch(addItem(productData))}>
              {t("AddToCart")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
