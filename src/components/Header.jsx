import React from "react";

const Header = () => {
  return (
    <nav>
      <img src="./iconos/icon_menu.svg" alt className="menu" />
      <div className="navbar-left">
        <img src="./logos/logo_yard_sale.svg" alt className="navbar-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furniture</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <li className="navbar-email">johndoe@gmail.com</li>
        <li className="navbar-shopping-cart">
          <img src="./iconos/icon_shopping_cart.svg" alt />
          <div>2</div>
        </li>
      </div>
    </nav>
  );
};

export default Header;
