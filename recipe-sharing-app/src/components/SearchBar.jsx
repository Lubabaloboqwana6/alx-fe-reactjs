import React from "react";
import useRecipeStore from "./recipeStore";

const RecipeSearch = () => {
  const { searchTerm, setSearchTerm } = useRecipeStore();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search for a recipe..."
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
};

export default RecipeSearch;
