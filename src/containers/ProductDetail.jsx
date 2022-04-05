import React from "react";
import ProductInfo from "../components/ProductInfo";

const ProductDetail = () => {
  return (
    <aside classname="product-detail">
      <div classname="close-button">
        <img src="./iconos/icon_close.png" alt />
      </div>
      <ProductInfo />
    </aside>
  );
};

export default ProductDetail;
