import React from "react";

const CreateAccount = () => {
  return (
    <div className="login">
      <div className="form-container form-create-container">
        <h1 className="title-account">My account</h1>
        <form action="/" className="form form-create">
          <div>
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              type="text"
              name
              id="name"
              placeholder="John Doe"
              className="input input-name"
            />
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
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              name
              id="password"
              placeholder="********"
              className="input input-password"
            />
          </div>
          <input
            type="submit"
            defaultValue="Save"
            className="primary-button login-button save-button"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
