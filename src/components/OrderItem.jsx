import React, { useContext } from "react";
import AppContext from "@context/AppContext";
import close from "@assets/iconos/icon_close.png";

const OrderItem = ({ item, index }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = product => {
    removeFromCart(product, index);
  };

  return (
    <div className="shopping-cart">
      <figure>
        <img src={item.images[0]} alt={item.title} />
      </figure>
      <p>{item.title}</p>
      <p>$ {item.price}</p>
      <img
        src={close}
        alt="close"
        className="close"
        onClick={() => handleRemove(item)}
      />
    </div>
  );
};

export default OrderItem;
