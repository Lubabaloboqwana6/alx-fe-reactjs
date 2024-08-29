import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],

  // Action: Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Action: Set the entire recipes array
  setRecipes: (recipes) => set({ recipes }),

  // Action: Delete a recipe by name
  deleteRecipe: (recipeName) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.name !== recipeName),
    })),

  // Action: Update a recipe by name
  updateRecipe: (recipeName, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.name === recipeName ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),
}));

export default useRecipeStore;
