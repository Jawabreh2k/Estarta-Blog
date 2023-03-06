import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../redux/blogsActions";
import Blog from "../Blog/Blog";
import "./BlogList.css";

const BlogList = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);
  const loading = useSelector((state) => state.blogs.loading);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [blogs, searchQuery]);

  const handleSearchInputChange = useCallback((event) => {
    setSearchQuery(event.target.value);
  }, []);

  return (
    <div>
      <div className="test">
        <h1>Blogs</h1>
        <input
          className="search-input"
          type="text"
          placeholder="Search blogs by title"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      {loading ? (
        <div>Loading blogs...</div>
      ) : (
        <ul className="main-page">
          {filteredBlogs.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default React.memo(BlogList);
