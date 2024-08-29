import React, { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = ({ recipe, toggleEditForm }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    updateRecipe(recipe.id, { title, description });
    toggleEditForm(); // Close the form after submitting
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Save Changes</button>
      <button type="button" onClick={toggleEditForm}>
        Cancel
      </button>
    </form>
  );
};

export default EditRecipeForm;
