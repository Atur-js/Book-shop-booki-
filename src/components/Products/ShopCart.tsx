import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./Cart";
import styles from "./ShopCart.module.css";

import { clear, checkout } from "../../redux/cart/cartAction";
import t from "../i18n/translate";
import { RootState } from "../../redux/store";

const ShopCart = () => {
  // const { state, dispatch } = useContext(CartContext);
  const state = useSelector((state: RootState) => state.cartState);
  const dispatch = useDispatch();
  
  return (
    <div className={styles.mainContainer}>
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {state.selectedItems.map((item: { id: number; image: any; title: string; price: number; quantity: number; }) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>

      {state.itemsCounter > 0 && (
        <div className={styles.payments}>
          <p>
            <span>{t("TotalItems")}</span> {state.itemsCounter}
          </p>
          <p>
            <span>{t("TotalPayments")}</span> {state.total} 
          </p>
          <div className={styles.buttonContainer}>
            <button className={styles.clear} onClick={() => dispatch(clear())}>
              {t("Clear")}
            </button>
            <button
              className={styles.checkout}
              onClick={() => dispatch(checkout())}
            >
              {t("Checkout")}
            </button>
          </div>
        </div>
      )}

      {state.itemsCounter === 0 && !state.checkout && (
        <div className={styles.afterShop}>
        <div className={styles.complete}>
          
          <Link className={styles.completeButton} to="/">{t("BuyMore")}</Link>
        </div>
        </div>
      )}

      {state.checkout && (
        <div className={styles.afterShop}>
        <div className={styles.complete}>
          <h3 style={{color:"#004cff"}}>{t("CheckoutSuccess")}</h3>
          <Link className={styles.completeButton} to="/">{t("BuyMore")}</Link>
        </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default ShopCart;
