import React from "react";

const OrderItem = () => {
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
      <img src="./iconos/icon_close.png" alt />
    </div>
  );
};

export default OrderItem;
