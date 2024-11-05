import React, { useState, useEffect } from "react";
import PostsContainer from "./PostsContainer";
import PostForm from "./PostForm";

const FakeApiApp = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const result = await response.json();
        setData(result.reverse()); // Display in descending order
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPost.title && newPost.body) {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "POST",
            body: JSON.stringify(newPost),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );
        const createdPost = await response.json();
        setData([createdPost, ...data]);
        setNewPost({ title: "", body: "" });
      } catch (error) {
        console.error("Error submitting post:", error);
      }
    }
  };

  return (
    <div>
      <h1>Fake API App</h1>
      <PostForm
        newPost={newPost}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      {loading ? <p>Loading...</p> : <PostsContainer posts={data} />}
    </div>
  );
};

export default FakeApiApp;
