import React from "react";
import "./errorPage.css";
import { Helmet } from "react-helmet";
const ErrorPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Error page</title>
      </Helmet>
      <p className="error-message">
        404
        <br /> Page Not Found
      </p>
    </div>
  );
};
export default ErrorPage;
