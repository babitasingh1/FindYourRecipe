import React, { useState } from 'react';
import { connect } from 'react-redux';
import { favoriteRecipes } from '../actions';

const RecipeItem = (props) => {
  const [favorite, setfavorite] = useState(false);

  const handleFavorite = (recipeItem) => {
    console.log(recipeItem);
    props.favoriteRecipes(recipeItem);
    setfavorite(true);
  };

  return (
    <div className='recipe-item '>
      {favorite ? (
        <div className='star'>&#9733;</div>
      ) : (
        <div className='star' onClick={() => handleFavorite(props.recipe)}>
          &#9734;
        </div>
      )}

      <div className='recipe-text'>
        <a href={props.recipe.href}>
          <h4>{props.recipe.title}</h4>
        </a>

        <p>{props.recipe.ingredients}</p>
      </div>
      <div>
        <img
          src={props.recipe.thumbnail}
          alt={props.recipe.title}
          className='recipe-image'
        />
      </div>
    </div>
  );
};

export default connect(null, { favoriteRecipes })(RecipeItem);
