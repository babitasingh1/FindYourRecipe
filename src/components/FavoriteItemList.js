import React from 'react';
import { connect } from 'react-redux';
import FavoriteItem from './FavoriteItem';

const FavoriteItemList = (props) => {
  console.log(props);
  return (
    <div className='col-md-6'>
      <h3>FavoriteRecipes:</h3>
      {props.favoriteRecipes.map((favoriteRecipe, index) => {
        return <FavoriteItem key={index} favoriteRecipe={favoriteRecipe} />;
      })}
    </div>
  );
};

function mapSatateToProps(state) {
  return {
    favoriteRecipes: state.favoriteRecipes,
  };
}

export default connect(mapSatateToProps, null)(FavoriteItemList);
