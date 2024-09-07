import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

function Profile() {
  return (
    <div>
      <nav>
        <Link to="details">Details</Link>
        <br />
        <Link to="settings">Settings</Link>
        <br />
        <Link to="/user/1">User 1 Profile</Link> {/* Dynamic Link Example */}
        <br />
        <Link to="/user/2">User 2 Profile</Link> {/* Another Example */}
      </nav>

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;
