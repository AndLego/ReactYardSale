import React from "react";

const ShoppingCartItem = () => {
  return (
    <div className="shopping-cart">
      <figure>
        <img
          src="https://images.pexels.com/photos/819805/pexels-photo-819805.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt
        />
      </figure>
      <p>Bike</p>
      <p>$ 120.00</p>
    </div>
  );
};

export default ShoppingCartItem;
