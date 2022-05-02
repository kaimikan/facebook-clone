import React, { useEffect, useState } from "react";
import "./rightbar.css";
import Online from "../online/Online";
import axios from "axios";

/* profile is to check if we load the rightbar from the Home or from the Profile page */
export default function Rightbar({ user }) {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get(`/users/friends/${user._id}`);
        setFriends(friendList.data);
      } catch (e) {
        console.log(e);
      }
    };
    getFriends();
  }, [user._id]);

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img
            className="birthdayImage"
            src={`${publicFolder}gift.png`}
            alt=""
          />
          <span className="birthdayText">
            <b>Name 1</b> and <b>2 other friends</b> have birthdays today
          </span>
        </div>
        <img className="rightbarAd" src={`${publicFolder}ad.png`} alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        {/* <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online key={user._id} user={user} />
          ))}
        </ul> */}
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city || "N/A"}</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from || "N/A"}</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : "-"}
            </span>
          </div>
        </div>

        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          {friends.map((friend) => (
            <div className="rightbarFollowing">
              <img
                src={
                  publicFolder +
                  (friend.profilePicture || "person/noAvatar.png")
                }
                alt=""
                className="rightbarFollowingImage"
              />
              <span className="rightbarFollowingName">{friend.username}</span>
            </div>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
