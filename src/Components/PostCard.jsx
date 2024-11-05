import React from "react";

const PostCard = ({ title, body }) => (
  <div className="post">
    <h3>{title}</h3>
    <p>{body}</p>
  </div>
);

export default PostCard;
