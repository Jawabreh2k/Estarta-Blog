import { Route, Routes } from "react-router-dom";
import React, { lazy } from "react";
import useFetch from "../../CustomHooks/useFetch/useFetch";

const ErrorPage = lazy(() => import("../ErrorPage/errorPage"));
const CreateBlog = lazy(() => import("../CreateBlog/CreateBlog"));
const NavigationBar = lazy(() => import("../NavigationBar/NavigationBar"));
const BlogPost = lazy(() => import("../BlogPost/BlogPost"));
const BlogListPage = lazy(() => import("../BlogList/BlogList"));

const MyRoutes = () => {
  const [blogData, setData] = useFetch("http://localhost:7000/blogs");

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<BlogListPage blogData={blogData} />} />
          <Route path="/create" element={<CreateBlog onAddBlog={setData} />} />
          <Route path="/blogs/:blogId" element={<BlogPost />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
};

export default MyRoutes;
