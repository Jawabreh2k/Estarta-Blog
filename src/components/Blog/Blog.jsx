import React, { useState, memo } from "react";
import { useNavigate } from "react-router-dom";

function Blog({ blog }) {
  const navigate = useNavigate();
  const [editedTitle, setEditedTitle] = useState(blog.title);
  const [isEditing, setIsEditing] = useState(false);

  const handleTitleChange = (event) => {
    setEditedTitle(event.target.value);
  };

  const handleSaveTitle = () => {
    blog.title = editedTitle;
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedTitle(blog.title);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input type="text" value={editedTitle} onChange={handleTitleChange} />
          <button onClick={handleSaveTitle}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      ) : (
        <div>
          <h2 onClick={() => navigate(`/blogs/${blog.id}`)}>{blog.title}</h2>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
      <p>{blog.content}</p>
      <p>{blog.author}</p>
      <hr />
    </div>
  );
}

export default memo(Blog);
