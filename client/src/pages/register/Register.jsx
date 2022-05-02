import React from "react";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">FakBuk</h3>
          <span className="registerDescription">Connecting stuff</span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input placeholder="Name" type="text" className="registerInput" />
            <input placeholder="Email" type="text" className="registerInput" />
            <input
              placeholder="Password"
              type="password"
              className="registerInput"
            />
            <input
              placeholder="Password Again"
              type="password"
              className="registerInput"
            />
            <button className="registerButton">Sign up</button>
            <button className="registerRegisterButton">Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
}
