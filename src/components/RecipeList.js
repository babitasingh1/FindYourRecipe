import React from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';

const RecipeList = (props) => {
  console.log(props);

  return (
    <div className='col-md-6'>
      <h3>RecipeList:</h3>
      {props.recipes.map((recipe, index) => {
        return <RecipeItem key={index} recipe={recipe} />;
      })}
    </div>
  );
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(RecipeList);
