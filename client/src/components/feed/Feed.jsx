import React, { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";
/* import { Posts } from "../../dummyData"; */

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  // fetch posts once on render
  useEffect(() => {
    const fetchPosts = async () => {
      // we can skip the manual fetching of api queries with axios
      const res = username
        ? await axios.get(`posts/profile/${username}`)
        : await axios.get("posts/timeline/626de1ea6cb8864a340ed156");
      setPosts(res.data);
      return res;
    };
    console.log(fetchPosts());
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
