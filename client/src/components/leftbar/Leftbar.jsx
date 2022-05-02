import React from "react";
import "./leftbar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <RssFeedIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Feed</span>
          </li>

          <li className="leftbarListItem">
            <QuestionMarkIcon className="leftbarIcon" />
            <span className="leftbarListItemText">...</span>
          </li>

          <li className="leftbarListItem">
            <QuestionMarkIcon className="leftbarIcon" />
            <span className="leftbarListItemText">...</span>
          </li>

          <li className="leftbarListItem">
            <QuestionMarkIcon className="leftbarIcon" />
            <span className="leftbarListItemText">...</span>
          </li>
        </ul>

        <button className="leftbarButton">...</button>
        <hr className="leftbarHr" />

        <ul className="leftbarFriendList">
          <li className="leftbarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="leftbarFriendImage"
            />
            <span className="leftbarFriendName">Friend Name 1</span>
          </li>

          <li className="leftbarFriend">
            <img
              src="/assets/person/4.jpeg"
              alt=""
              className="leftbarFriendImage"
            />
            <span className="leftbarFriendName">Friend Name 2</span>
          </li>

          <li className="leftbarFriend">
            <img
              src="/assets/person/5.jpeg"
              alt=""
              className="leftbarFriendImage"
            />
            <span className="leftbarFriendName">Friend Name 3</span>
          </li>

          <li className="leftbarFriend">
            <img
              src="/assets/person/6.jpeg"
              alt=""
              className="leftbarFriendImage"
            />
            <span className="leftbarFriendName">Friend Name 4</span>
          </li>

          <li className="leftbarFriend">
            <img
              src="/assets/person/7.jpeg"
              alt=""
              className="leftbarFriendImage"
            />
            <span className="leftbarFriendName">Friend Name 5</span>
          </li>
          <li className="leftbarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="leftbarFriendImage"
            />
            <span className="leftbarFriendName">Friend Name 1</span>
          </li>

          <li className="leftbarFriend">
            <img
              src="/assets/person/4.jpeg"
              alt=""
              className="leftbarFriendImage"
            />
            <span className="leftbarFriendName">Friend Name 2</span>
          </li>

          <li className="leftbarFriend">
            <img
              src="/assets/person/5.jpeg"
              alt=""
              className="leftbarFriendImage"
            />
            <span className="leftbarFriendName">Friend Name 3</span>
          </li>

          <li className="leftbarFriend">
            <img
              src="/assets/person/6.jpeg"
              alt=""
              className="leftbarFriendImage"
            />
            <span className="leftbarFriendName">Friend Name 4</span>
          </li>

          <li className="leftbarFriend">
            <img
              src="/assets/person/7.jpeg"
              alt=""
              className="leftbarFriendImage"
            />
            <span className="leftbarFriendName">Friend Name 5</span>
          </li>
          <li className="leftbarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="leftbarFriendImage"
            />
            <span className="leftbarFriendName">Friend Name 1</span>
          </li>

          <li className="leftbarFriend">
            <img
              src="/assets/person/4.jpeg"
              alt=""
              className="leftbarFriendImage"
            />
            <span className="leftbarFriendName">Friend Name 2</span>
          </li>

          <li className="leftbarFriend">
            <img
              src="/assets/person/5.jpeg"
              alt=""
              className="leftbarFriendImage"
            />
            <span className="leftbarFriendName">Friend Name 3</span>
          </li>

          <li className="leftbarFriend">
            <img
              src="/assets/person/6.jpeg"
              alt=""
              className="leftbarFriendImage"
            />
            <span className="leftbarFriendName">Friend Name 4</span>
          </li>

          <li className="leftbarFriend">
            <img
              src="/assets/person/7.jpeg"
              alt=""
              className="leftbarFriendImage"
            />
            <span className="leftbarFriendName">Friend Name 5</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
