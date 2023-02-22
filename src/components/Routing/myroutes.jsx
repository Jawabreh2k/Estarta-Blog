import { Route, Routes } from "react-router-dom";
import ErrorPage from "../ErrorPage/errorPage";
import BlogList from "../BlogList/BlogList";
import CreateBlog from "../CreateBlog/CreateBlog";
import NavigationBar from "../NavigationBar/NavigationBar";
import useFetch from "../../CustomHooks/useFetch/useFetch";
import BlogPost from "../BlogPost/BlogPost";

const MyRoutes = () => {
  const [blogData, setData] = useFetch("http://localhost:7000/blogs");

  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<BlogList blogData={blogData} />} />
        <Route path="/create" element={<CreateBlog onAddBlog={setData} />} />
        <Route path="/blogs/:blogId" element={<BlogPost />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
