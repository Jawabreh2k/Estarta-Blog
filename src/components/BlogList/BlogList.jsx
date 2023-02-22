import React, { useState } from "react";
import "../BlogList/BlogList.css";
import { useNavigate } from "react-router-dom";
import useFetch from "../../CustomHooks/useFetch/useFetch";

function BlogList(props) {
  const navigate = useNavigate();
  const [blogs, isLoading] = useFetch("http://localhost:7000/blogs");
  const [searchQuery, setSearchQuery] = useState("");
  const [editIndex, setEditIndex] = useState(-1); // track which blog title is being edited
  const [editedTitle, setEditedTitle] = useState(""); // track the edited title
  const [originalTitles, setOriginalTitles] = useState({}); // keep track of the original titles

  const blogClickHandler = (blogId) => {
    navigate(`/blogs/${blogId}`);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Helper function to save the edited title and reset the state
  const saveTitle = (index) => {
    // Update the original title with the edited title
    setOriginalTitles((prevTitles) => ({
      ...prevTitles,
      [index]: editedTitle,
    }));
    setEditedTitle("");
    setEditIndex(-1);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const filteredBlogs = blogs.filter((blog) => {
    return blog.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <input
        placeholder="Search by name"
        className="search-field"
        type="text"
        onChange={handleSearch}
        value={searchQuery}
      />
      {filteredBlogs?.map((blog, index) => (
        <div key={blog?.id}>
          <div className="change-title">
            {editIndex === index ? (
              <div className="change">
                <input
                  className="edit-input"
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
                <button className="save" onClick={() => saveTitle(index)}>
                  Save
                </button>
                <button className="close" onClick={() => setEditIndex(-1)}>
                  Close
                </button>
              </div>
            ) : (
              <div className="change-title">
                <h2 onClick={() => blogClickHandler(blog?.id)}>
                  {originalTitles[index] || blog?.title}
                </h2>
                {editIndex === -1 && (
                  <button
                    className="edit-btn"
                    onClick={() => setEditIndex(index)}
                  >
                    Edit
                  </button>
                )}
              </div>
            )}
          </div>
          <p>{blog?.content}</p>
          <p>{blog?.author}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default BlogList;
