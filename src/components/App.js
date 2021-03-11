import React from 'react';
import SearchRecipes from './SearchRecipes';
import RecipeList from './RecipeList';

import FavoriteItemList from './FavoriteItemList';

export default function App() {
  return (
    <div>
      <div>
        <h2>FindYourRecipes</h2>
        <p>(Note: results are based on recipepuppy.com)</p>
      </div>
      <SearchRecipes />
      <RecipeList />
      <FavoriteItemList />
    </div>
  );
}
