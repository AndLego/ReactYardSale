import React from "react";
import OrderItem from "@components/OrderItem";
import flechita from '@iconos/flechita.svg';

const MyOrder = () => {
  return (
    <aside className="product-detail-cart">
      <div className="title-container">
        <img src={flechita} alt />
        <h1 className="title-shopping">Shopping cart</h1>
      </div>
      <div className="my-order-content">
        <OrderItem />
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$ 560.00</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
