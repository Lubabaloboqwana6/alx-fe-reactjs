import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} />
        <Route path="/favorites" element={<FavoritesList />} />{" "}
        <Route path="/recommendations" element={<RecommendationsList />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
