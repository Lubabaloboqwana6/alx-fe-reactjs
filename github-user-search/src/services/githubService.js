import axios from "axios";

// Function to fetch user data from GitHub API
export const fetchUserData = async (
  username,
  location = "",
  minRepos = "",
  page = 1
) => {
  // Construct the search query
  let query = username;

  if (location) {
    query += `+location:${location}`;
  }

  if (minRepos) {
    query += `+repos:>=${minRepos}`;
  }

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(
    query
  )}&page=${page}&per_page=30`;

  try {
    const response = await axios.get(url);

    // Return the entire response, including items (user list) and total_count
    return response.data;
  } catch (error) {
    throw error;
  }
};
