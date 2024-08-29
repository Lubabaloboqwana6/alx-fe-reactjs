import React from "react";
import { useParams } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(id))
  );

  const [isEditing, setIsEditing] = useState(false);

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  const toggleEditForm = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {isEditing ? (
        <EditRecipeForm recipe={recipe} toggleEditForm={toggleEditForm} />
      ) : (
        <button onClick={toggleEditForm}>Edit Recipe</button>
      )}

      <DeleteRecipeButton recipeId={parseInt(id)} />
    </div>
  );
};

export default RecipeDetails;
