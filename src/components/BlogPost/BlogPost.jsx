import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import useFetch from "../../CustomHooks/useFetch/useFetch";
import "./Blogpost.css";
function BlogPost() {
  const blogId = Number(useParams().blogId);
  const [data, isLoading] = useFetch(`http://localhost:7000/blogs/${blogId}`);
  const navigate = useNavigate();

  const deleteBlog = async () => {
    try {
      await fetch(`http://localhost:7000/blogs/${blogId}`, {
        method: "DELETE",
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Single blog</title>
      </Helmet>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <div className="blogs">
          <h2>{data.title}</h2>
          <p>{data.content}</p>
          <p>{data.author}</p>
          <button onClick={deleteBlog}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default BlogPost;
