export const SET_RECIPES = 'SET_RECIPES';
export const FAVORITE_RECIPE = 'FAVORITE_RECIPE';

export default function setRecipes(items) {
  return {
    type: SET_RECIPES,
    items,
  };
}

export function favoriteRecipes(recipe) {
  return {
    type: FAVORITE_RECIPE,
    recipe,
  };
}
