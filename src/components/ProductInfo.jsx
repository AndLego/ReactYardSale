import React from "react";
import addToCart from '../assets/iconos/bt_add_to_cart.svg';

const ProductInfo = () => {
  return (
    <div>
      <img
        src="https://images.pexels.com/photos/819805/pexels-photo-819805.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="bike"
      />
      <div className="product-info-sale">
        <p>$ 120.00</p>
        <p>Bike</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
        <button className="primary-button add-to-cart-button">
          <img src={addToCart} alt />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
