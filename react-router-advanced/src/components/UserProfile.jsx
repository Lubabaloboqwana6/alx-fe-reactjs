import React from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  const { userId } = useParams(); // Extracting the userId from the URL

  return (
    <div>
      <h1>User Profile</h1>
      <p>This is the profile for user: {userId}</p>
    </div>
  );
}

export default UserProfile;
