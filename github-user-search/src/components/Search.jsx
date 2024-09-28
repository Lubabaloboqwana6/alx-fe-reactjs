import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // For pagination
  const [totalPages, setTotalPages] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) {
      alert("Please enter a GitHub username");
      return;
    }

    setLoading(true);
    setError(""); // Reset error state before making a request

    try {
      const data = await fetchUserData(
        username,
        location,
        minRepos,
        currentPage
      );
      setUsers(data.items); // Set users from the search result
      setTotalPages(Math.ceil(data.total_count / 30)); // Assuming 30 results per page
    } catch (error) {
      setError("Looks like we can't find the user."); // Set error message
      setUsers([]); // Reset users data on error
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    if (currentPage >= totalPages) return; // No more pages to load

    setLoading(true);
    setCurrentPage(currentPage + 1);

    try {
      const data = await fetchUserData(
        username,
        location,
        minRepos,
        currentPage + 1
      );
      setUsers([...users, ...data.items]); // Append more users
    } catch (error) {
      setError("Error loading more users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="search-input"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="search-input"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>} {/* Show loading message */}
      {error && <p>{error}</p>} {/* Display error message */}
      {users.length > 0 && (
        <div className="users-list">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <h2>{user.login}</h2>
              <img
                src={user.avatar_url}
                alt={`${user.login}'s avatar`}
                width="100"
              />
              <p>Location: {user.location || "N/A"}</p>
              <p>Repositories: {user.public_repos}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          ))}
          {currentPage < totalPages && (
            <button onClick={loadMore} className="load-more-button">
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
