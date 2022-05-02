import React from "react";
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImage"
              src="/assets/person/3.jpeg"
              alt=""
            />
            <span className="postUsername">User Name</span>
            <span className="postDate">3 min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            Hey! It's a nice day today! Do your best!
            <img className="postImage" src="/assets/post/1.jpeg" alt="" />
          </span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="reactionIcon" src="/assets/like.png" alt="" />
            <img className="reactionIcon" src="/assets/heart.png" alt="" />
            <span className="postReactionCounter">42 people reacted</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">5 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
