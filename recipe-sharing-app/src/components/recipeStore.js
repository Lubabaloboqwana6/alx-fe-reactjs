import create from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],

  // Action: Add a recipe to favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  // Action: Remove a recipe from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Action: Generate recommendations based on favorites
  recommendations: [],
  generateRecommendations: () =>
    set((state) => {
      // Mock implementation: recommend recipes that are not already favorites
      const recommended = state.recipes.filter(
        (recipe) => !state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;
