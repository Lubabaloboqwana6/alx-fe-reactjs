import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  ingredientFilter: "",
  timeFilter: "",

  setSearchTerm: (term) => set({ searchTerm: term }),
  setIngredientFilter: (ingredient) => set({ ingredientFilter: ingredient }),
  setTimeFilter: (time) => set({ timeFilter: time }),

  filteredRecipes: [],
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) => {
        const matchesSearch = recipe.title
          .toLowerCase()
          .includes(state.searchTerm.toLowerCase());
        const matchesIngredient = state.ingredientFilter
          ? recipe.ingredients.includes(state.ingredientFilter)
          : true;
        const matchesTime = state.timeFilter
          ? recipe.cookingTime <= state.timeFilter
          : true;
        return matchesSearch && matchesIngredient && matchesTime;
      }),
    })),
}));
