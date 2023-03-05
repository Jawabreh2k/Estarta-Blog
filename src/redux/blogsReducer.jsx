const initialState = {
  loading: false,
  error: null,
  blogs: [],
  activeBlog: null, // Updated initial state for activeBlog to null
};

const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BLOGS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_BLOGS_SUCCESS":
      return {
        ...state,
        loading: false,
        blogs: action.payload,
      };
    case "FETCH_BLOGS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "FETCH_SINGLE_BLOG_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SINGLE_BLOG_SUCCESS":
      return {
        ...state,
        loading: false,
        activeBlog: action.payload,
      };
    case "FETCH_SINGLE_BLOG_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "RESET_ACTIVE_BLOG":
      return {
        ...state,
        activeBlog: null, // Updated to set activeBlog to null
      };
    default:
      return state;
  }
};

export default blogsReducer;
