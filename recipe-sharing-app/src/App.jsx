import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"; // Import your Home component
import RecipeDetails from "./components/RecipeDetails"; // Import your RecipeDetails component
import AddRecipeForm from "./components/AddRecipeForm"; // Import the AddRecipeForm component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} />{" "}
        {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;
