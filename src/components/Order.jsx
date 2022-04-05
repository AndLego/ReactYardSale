import React from "react";

const Order = () => {
  return (
    <div className="my-order">
      <div className="my-order-container">
        <h1 className="order-title">My orders</h1>
        <div className="my-order-content">
          <div className="my-orders">
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$ 560.00</p>
            <img src="./iconos/flechita.svg" alt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
