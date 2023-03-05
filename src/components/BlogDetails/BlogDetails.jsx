import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  fetchSingleBlog,
  resetActiveBlog,
  deleteBlog,
} from "../../redux/blogsActions";

const BlogDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { blogId } = useParams();
  const activeBlog = useSelector((state) => state.blogs.activeBlog);
  const loading = useSelector((state) => state.blogs.loading);

  useEffect(() => {
    dispatch(fetchSingleBlog(blogId));

    // Reset active blog when component unmounts
    return () => {
      dispatch(resetActiveBlog());
    };
  }, [dispatch, blogId]);

  const handleDelete = () => {
    dispatch(deleteBlog(blogId));
    navigate("/");
  };

  if (loading) {
    return <div>Loading blog...</div>;
  }

  return (
    <div className="blogs">
      {activeBlog && (
        <>
          <h1>{activeBlog.title}</h1>
          <p>{activeBlog.content}</p>
          <p>{activeBlog.author}</p>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default BlogDetails;
