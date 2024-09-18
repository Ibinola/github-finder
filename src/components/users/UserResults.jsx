import React, { useContext } from "react";
import loadingSpinner from "../../assets/loadingspinner.gif";
import { GithubContext } from "../../context/GithubContext";
import { Link } from "react-router-dom";

function UserResults() {
  const { users, loading, error } = useContext(GithubContext);

  return (
    <div className="mx-auto">
      <div className="card items-center">
        <div>
          {users.length > 0 && (
            <p className="mb-4"> Total Results: {users.length}</p>
          )}
          <div className="grid grid-cols-2 gap-6">
            {loading && (
              <div className="loading-spinner">
                <img src={loadingSpinner} alt="Loading..." />
              </div>
            )}

            {error && <p>Error: {error}</p>}

            {!loading &&
              !error &&
              users.map((user) => {
                return (
                  <div key={user.id}>
                    <div className="cursor pointer">
                      {" "}
                      <img src={user.avatar_url} alt={user.login} />{" "}
                      <p>{user.login}</p>
                    </div>
                    <Link className="btn btn-ghost btn-xs" to="/user">
                      More Details
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserResults;
