import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Product.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { name, img, seller, price, ratings } = props.product;
    return (
        <div className='product-container'>
            <div className='product'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <span>Manufacturer: {seller}</span>
            </div>
            <button onClick={() => props.addToCart(props.product)} className="add-cart">Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>

        </div>
    );
};

export default Product;