import React from "react";

const Login = () => {
  return (
    <div className="login">
      <div className="form-container">
        <form action="/" className="form">
          <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="email"
            name
            id="email"
            placeholder="login@gmail.com"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name
            id="password"
            placeholder="*********"
            className="input input-password"
          />
          <input
            type="submit"
            defaultValue="Log in"
            className="primary-button login-button"
          />
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
};

export default Login;
