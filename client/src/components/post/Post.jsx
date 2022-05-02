import React, { useState } from "react";
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Users } from "../../dummyData";

export default function Post({ post }) {
  const [reactions, setReactions] = useState(post.reactions);
  const [isReacted, setIsReacted] = useState(false);

  const reactionHandler = () => {
    setReactions(isReacted ? reactions - 1 : reactions + 1);
    setIsReacted(!isReacted);
  };

  const user = Users.filter((user) => user.id === post.userId)[0];
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImage"
              src={user.profilePicture}
              alt=""
            />
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            {/* the ? is in case the object has no description attribute */}
            {post?.description}
            <img className="postImage" src={post.photo} alt="" />
          </span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="reactionIcon"
              src="/assets/like.png"
              onClick={reactionHandler}
              alt=""
            />
            <img
              className="reactionIcon"
              src="/assets/heart.png"
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
