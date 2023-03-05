export const fetchBlogsRequest = () => {
  return {
    type: "FETCH_BLOGS_REQUEST",
  };
};

export const fetchBlogsSuccess = (blogs) => {
  return {
    type: "FETCH_BLOGS_SUCCESS",
    payload: blogs,
  };
};

export const fetchBlogsFailure = (error) => {
  return {
    type: "FETCH_BLOGS_FAILURE",
    payload: error,
  };
};

export const fetchSingleBlogRequest = () => {
  return {
    type: "FETCH_SINGLE_BLOG_REQUEST",
  };
};

export const fetchSingleBlogSuccess = (blog) => {
  return {
    type: "FETCH_SINGLE_BLOG_SUCCESS",
    payload: blog,
  };
};

export const fetchSingleBlogFailure = (error) => {
  return {
    type: "FETCH_SINGLE_BLOG_FAILURE",
    payload: error,
  };
};

export const fetchBlogs = () => {
  return (dispatch) => {
    dispatch(fetchBlogsRequest());
    fetch("http://localhost:7000/blogs")
      .then((response) => response.json())
      .then((data) => dispatch(fetchBlogsSuccess(data)))
      .catch((error) => dispatch(fetchBlogsFailure(error.message)));
  };
};

export const fetchSingleBlog = (id) => {
  return (dispatch) => {
    dispatch(fetchSingleBlogRequest());
    fetch(`http://localhost:7000/blogs/${id}`)
      .then((response) => response.json())
      .then((data) => dispatch(fetchSingleBlogSuccess(data)))
      .catch((error) => dispatch(fetchSingleBlogFailure(error.message)));
  };
};

export const resetActiveBlog = () => {
  return {
    type: "RESET_ACTIVE_BLOG",
  };
};
export const deleteBlog = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:7000/blogs/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        dispatch(fetchBlogs());
      })
      .catch((error) => console.log(error));
  };
};
