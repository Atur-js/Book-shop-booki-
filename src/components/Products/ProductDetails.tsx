import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Style
import styles from "./ProductDetails.module.css";
import t from '../i18n/translate';

const ProductDetails = () => {

    const params = useParams();
    const id:any = params.id;
    const data = useSelector((state:any)=> state.productsState.products);
    const product = data[id - 1];
    const {image, title, price} = product;

    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="product" />
            <div className={styles.textContainer}>
                <h3 className={styles.textTitle}>{title}</h3>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price} $</span>
                    <Link to="/">{t("BackToShop")}</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;