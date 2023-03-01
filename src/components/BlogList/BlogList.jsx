import "./BlogList.css";
import React, { useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Blog from "../Blog/Blog";
import useFetch from "../../CustomHooks/useFetch/useFetch";

function BlogList({ blogs }) {
  return (
    <div>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

BlogList = React.memo(BlogList);

function Search({ onSearchChange }) {
  return (
    <div>
      <input
        placeholder="Search by name"
        type="text"
        onChange={onSearchChange}
      />
    </div>
  );
}

function BlogListPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [blogs, isLoading] = useFetch("http://localhost:7000/blogs");
  const navigate = useNavigate();

  const handleSearchChange = useCallback((event) => {
    setSearchQuery(event.target.value);
  }, []);

  const filteredBlogs = useMemo(() => {
    if (!Array.isArray(blogs)) {
      return [];
    }

    return blogs.filter((blog) => {
      return blog.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }, [blogs, searchQuery]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home page</title>
      </Helmet>
      <Search onSearchChange={handleSearchChange} />
      <BlogList blogs={filteredBlogs} />
    </div>
  );
}

export default BlogListPage;
