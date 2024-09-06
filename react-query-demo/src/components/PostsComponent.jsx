import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not okay");
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, isError, refetch } = useQuery(
    ["posts"],
    fetchPosts,
    {
      staleTime: 5000, // Data will be considered fresh for 5 seconds
      cacheTime: 10000, // Data will be cached for 10 seconds
    }
  );

  // Loading state
  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  // Error handling
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // Data rendering
  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
