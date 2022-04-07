import React, { useContext } from "react";
import OrderItem from "@components/OrderItem";
import AppContext from "@context/AppContext";
import flechita from "@iconos/flechita.svg";

const MyOrder = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className="product-detail-cart">
      <div className="title-container">
        <img src={flechita} alt />
        <h1 className="title-shopping">Shopping cart</h1>
      </div>
      <div className="my-order-content">
        {state.cart.map((item, index) => (
          <OrderItem item={item} key={index} index={index} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$ {sumTotal()}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
