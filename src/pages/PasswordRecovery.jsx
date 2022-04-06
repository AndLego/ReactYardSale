import React from "react";
import logo from '@logos/logo_yard_sale.svg';

const PasswordRecovery = () => {
  return (
    <div className="email-sent">
      <div className="form-container">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="title">Password Recovery</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>
        <form action="/" className="form">
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="email"
            name
            id="email"
            placeholder="johndoe@gmail.com"
            className="input input-email"
          />
          <input
            type="submit"
            value="Confirm"
            className="primary-button login-button"
          />
        </form>
      </div>
    </div>
  );
};

export default PasswordRecovery;
