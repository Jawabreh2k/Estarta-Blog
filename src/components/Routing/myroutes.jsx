import { Route, Routes } from "react-router-dom";
import React, { lazy } from "react";

const ErrorPage = lazy(() => import("../ErrorPage/errorPage"));
const CreateBlog = lazy(() => import("../CreateBlog/CreateBlog"));
const NavigationBar = lazy(() => import("../NavigationBar/NavigationBar"));
const BlogDetails = lazy(() => import("../BlogDetails/BlogDetails"));
const BlogListPage = lazy(() => import("../BlogList/BlogList"));

const MyRoutes = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<BlogListPage />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/blogs/:blogId" element={<BlogDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
};

export default MyRoutes;
