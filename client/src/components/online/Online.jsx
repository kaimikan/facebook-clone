import React from "react";
import "./online.css";

export default function Online({ user }) {
  return (
    <li className="onlineFriend">
      <div className="onlineProfileImageContainer">
        <img className="onlineProfileImage" src={user.profilePicture} alt="" />
        <span className="onlineIcon"></span>
      </div>
      <span className="onlineUsername">{user.username}</span>
    </li>
  );
}
