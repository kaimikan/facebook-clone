import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">FakBuk</h3>
          <span className="loginDescription">Connecting stuff</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" type="text" className="loginInput" />
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
            />
            <button className="loginButton">Login</button>
            <span className="loginForgot">Forgot password?</span>
            <button className="loginRegisterButton">Create Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
