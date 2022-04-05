import React from "react";

const ProductItem = () => {
  return (
    <div className="product-card">
      <img
        className="product-img"
        src="https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt
      />
      <div className="product-info">
        <div>
          <p>$ 120,00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src="./iconos/bt_add_to_cart.svg" alt />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
