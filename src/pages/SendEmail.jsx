import React from "react";
import '../styles/styles.scss';

const SendEmail = () => {
  return (
    <main className="email-sent">
      <div className="form-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className="email-icon">
          <img src="./iconos/email.svg" alt="email icon" />
        </div>
        <button className="primary-button login-button">Login</button>
        <p className="resend">
          <span>
            Didn't receive the email? <a href="/">Resend</a>
          </span>
        </p>
      </div>
    </main>
  );
};

export default SendEmail;
