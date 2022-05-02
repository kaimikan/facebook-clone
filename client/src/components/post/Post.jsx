import React, { useState, useEffect } from "react";
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const [reactions, setReactions] = useState(post.likes.length);
  const [isReacted, setIsReacted] = useState(false);
  const [user, setUser] = useState({});
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  console.log(publicFolder);

  // fetch posts once on render
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userID=${post.userID}`);
      setUser(res.data);
      return res;
    };
    console.log(fetchUser());
  }, [post.userID]);

  const reactionHandler = () => {
    setReactions(isReacted ? reactions - 1 : reactions + 1);
    setIsReacted(!isReacted);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImage"
                src={
                  publicFolder + (user.profilePicture || "person/noAvatar.png")
                }
                alt=""
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            {/* the ? is in case the object has no description attribute */}
            {post?.description}
            <img className="postImage" src={publicFolder + post.image} alt="" />
          </span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="reactionIcon"
              src={publicFolder + "like.png"}
              onClick={reactionHandler}
              alt=""
            />
            <img
              className="reactionIcon"
              src={publicFolder + "heart.png"}
              onClick={reactionHandler}
              alt=""
            />
            <span className="postReactionCounter">
              {reactions} people reacted
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comments} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
