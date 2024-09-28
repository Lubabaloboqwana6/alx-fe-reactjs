import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) {
      alert("Please enter a GitHub username");
      return;
    }

    setLoading(true); // Set loading state to true before the API call
    setError(null); // Clear any previous errors

    try {
      const data = await fetchUserData(username); // Call the API service
      setUserData(data); // Set the fetched user data
    } catch (error) {
      setError("Looks like we can’t find the user."); // Set error message
      setUserData(null); // Clear user data if there's an error
    } finally {
      setLoading(false); // Set loading state to false after the API call
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>} {/* Show loading message */}
      {error && <p>{error}</p>} {/* Show error message */}
      {userData && (
        <div className="user-info">
          <h2>{userData.login}</h2>
          <img
            src={userData.avatar_url}
            alt={`${userData.login}'s avatar`}
            width="100"
          />
          <p>Name: {userData.name || "N/A"}</p>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
