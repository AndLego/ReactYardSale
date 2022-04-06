import React from "react";
import ProductInfo from "../components/ProductInfo";
import close from '@iconos/icon_close.png';

const ProductDetail = () => {
  return (
    <aside classname="product-detail">
      <div classname="close-button">
        <img src={close} alt />
      </div>
      <ProductInfo />
    </aside>
  );
};

export default ProductDetail;
