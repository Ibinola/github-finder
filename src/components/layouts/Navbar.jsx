import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar text-neutral-content mb-12 shadow-lg bg-black">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to={"/"} className="font-bold align-middle">
            {" "}
            Github Finder
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="justify-end hidden md:flex">
            <Link className="btn btn-ghost btn-sm rounded-btn" to="/">
              Home
            </Link>
            <Link className="btn btn-ghost btn-sm rounded-btn" to="/about">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
