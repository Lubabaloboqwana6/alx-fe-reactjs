import React from "react";
import useRecipeStore from "./recipeStore";

const IngredientFilter = () => {
  const { ingredientFilter, setIngredientFilter } = useRecipeStore();

  const handleIngredientChange = (e) => {
    setIngredientFilter(e.target.value);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={ingredientFilter}
        onChange={handleIngredientChange}
        placeholder="Filter by ingredient..."
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

export default IngredientFilter;
