import React from "react";
import "./friend.css";

export default function Friend({ user }) {
  return (
    <li className="friend">
      <img src={user.profilePicture} alt="" className="friendImage" />
      <span className="friendName">{user.username}</span>
    </li>
  );
}
