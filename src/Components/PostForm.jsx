import React from "react";

const PostForm = ({ newPost, handleInputChange, handleSubmit }) => (
  <div className="post">
    <h2>Post Form</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={newPost.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Body:</label>
        <input
          type="text"
          name="body"
          value={newPost.body}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

export default PostForm;
