import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-9xl mb-8 font-bold">404</h1>
          <p className="text-lg mb-8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <Link to="/" className="btn  btn-lg">
            <FaHome />
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
