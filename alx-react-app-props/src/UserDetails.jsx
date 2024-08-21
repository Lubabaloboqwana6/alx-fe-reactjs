import React, { useContext } from "react";
import userContext from "./UserContext";

function UserDetails({ userData }) {
  const user = useContext(userContext);
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserDetails;
