import React, { useState } from "react";

function RegistrationForm() {
  // Define state variables for each input field
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State for handling errors
  const [errors, setErrors] = useState("");

  // Handling Form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if each field is empty
    if (!username) {
      setErrors("Username is required.");
    } else if (!email) {
      setErrors("Email is required.");
    } else if (!password) {
      setErrors("Password is required.");
    } else {
      setErrors(""); // Clear errors if all fields are filled

      // Form submission logic
      console.log("Form submitted with data:", { username, email, password });

      // Optionally clear the form after submission
      setUsername("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username: </label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Email: </label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password: </label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
      </div>
      <button type="submit">Submit</button>
      {errors && <div style={{ color: "red" }}>{errors}</div>}
    </form>
  );
}

export default RegistrationForm;
