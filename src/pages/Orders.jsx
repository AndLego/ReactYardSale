import React from "react";
import OrderItem from "../components/OrderItem";
import flechita from '@iconos/flechita.svg';

const Orders = () => {
  return (
    <aside className="product-detail-cart">
      <div className="title-container">
        <img src={flechita} alt />
        <h1 className="title-shopping">Shopping cart</h1>
      </div>
      <div className="my-order-content">
          <OrderItem />
      </div>
    </aside>
  );
};

export default Orders;
