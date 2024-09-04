import React, { useEffect, useState } from "react";
import loadingSpinner from "../../assets/loadingspinner.gif";

function UserResults() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Added state for error handling

  const base_url = "https://api.github.com/users";
  const APP_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

  console.log(APP_TOKEN);

  async function getUsers() {
    setLoading(true);
    setError(null); // Reset error state before fetching
    try {
      const token = {
        headers: {
          Authorization: "Bearer " + APP_TOKEN,
        },
      };
      const res = await fetch(base_url, token);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      setError(error.message); // Set error message
    } finally {
      setLoading(false); // Ensure loading is set to false in finally block
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {loading && (
        <div className="loading-spinner">
          <img src={loadingSpinner} alt="Loading..." />
        </div>
      )}
      {error && <p>Error: {error}</p>} {/* Show error message if exists */}
      {!loading && !error && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserResults;
