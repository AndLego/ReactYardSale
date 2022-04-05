import React from "react";

const MyAccount = () => {
  return (
    <div className="login">
      <div className="form-container form-create-container">
        <h1 className="title-account">My account</h1>
        <form action="/" className="form form-create">
          <div>
            <label htmlFor="name" className="label">
              Name
            </label>
            <p className="value">John Doe</p>
            <label htmlFor="email" className="label">
              Email address
            </label>
            <p className="value">johndoe@gmail.com</p>
            <label htmlFor="password" className="label">
              Password
            </label>
            <p className="value">******</p>
          </div>
          <input
            type="submit"
            defaultValue="Edit"
            className="secondary-button edit-button"
          />
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
