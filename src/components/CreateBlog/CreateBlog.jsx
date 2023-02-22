import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateBlog.css";

function CreateBlog(props) {
  const titleRef = useRef();
  const contentRef = useRef();
  const authorRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const blogData = {
      id: Math.random(),
      title: titleRef.current.value,
      content: contentRef.current.value,
      author: authorRef.current.value,
    };
    fetch("http://localhost:7000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    })
      .then((response) => response.json())
      .then((data) => {
        blogData.title = "";
        blogData.content = "";
        blogData.author = "";
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form className="create-blog" onSubmit={handleSubmit}>
      <label>Blog Title:</label>
      <input type="text" ref={titleRef} />
      <label>Blog Body:</label>
      <textarea rows="4" ref={contentRef} />
      <label>Blog Author:</label>
      <input type="text" ref={authorRef} />
      <button className="submit-btn">Submit</button>
    </form>
  );
}

export default CreateBlog;
