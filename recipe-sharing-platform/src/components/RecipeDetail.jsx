import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find(
          (recipe) => recipe.id === parseInt(id)
        );
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error("Error fetching recipe:", error));
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      {/* Adding shadow to the container */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
        {/* Adding shadow to the image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-96 object-cover rounded-md mb-4 shadow-md"
        />
        <p className="text-gray-700 mb-4">{recipe.summary}</p>

        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <p className="text-gray-700">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
