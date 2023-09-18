import React, { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const init = {
      UserName: userName,
      Password: password,
    };
    console.log(init.UserName);
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={formSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter email"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <Link to="#">password?</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
