import React, { useState } from "react";
import Menu from "@components/Menu";

import menu from "@iconos/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingCart from "@iconos/icon_shopping_cart.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav>
      <img src={menu} alt className="menu" />
      <div className="navbar-left">
        <img src={logo} alt className="navbar-logo" />
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
        <li className="navbar-email" onClick={handleToggle}>
          johndoe@gmail.com
        </li>
        <li className="navbar-shopping-cart">
          <img src={shoppingCart} alt />
          <div>2</div>
        </li>
      </div>
      {toggle && <Menu />}    
    </nav>
  );
};

export default Header;
