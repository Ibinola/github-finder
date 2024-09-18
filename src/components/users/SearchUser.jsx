import React, { useContext } from "react";
import { GithubContext } from "../../context/GithubContext";
import UserResults from "./UserResults";

function SearchUser() {
  const { user, handleSearch, handleSubmit, clearBtn } =
    useContext(GithubContext);

  return (
    <div className="container mx-auto max-w-80 flex sm:flex-row md:flex-col gap-8">
      {/* <form> */}
      <div className="flex flex-col md:flex-row">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            value={user}
            onChange={handleSearch}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <button className="btn" onClick={handleSubmit}>
          Search User
        </button>

        <button className="btn" onClick={clearBtn}>
          Clear
        </button>
      </div>

      <UserResults />
    </div>
  );
}

export default SearchUser;
