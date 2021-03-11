import React from 'react';

const FavoriteItem = (props) => {
  return (
    <div className='recipe-item '>
      <div className='recipe-text'>
        <a href={props.favoriteRecipe.href}>
          <h4>{props.favoriteRecipe.title}</h4>
        </a>

        <p>{props.favoriteRecipe.ingredients}</p>
      </div>
      <div>
        <img
          src={props.favoriteRecipe.thumbnail}
          alt={props.favoriteRecipe.title}
          className='recipe-image'
        />
      </div>
    </div>
  );
};

export default FavoriteItem;
