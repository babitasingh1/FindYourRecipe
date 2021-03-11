import React, { useState } from 'react';
import { connect } from 'react-redux';
import setRecipes from '../actions';
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from 'react-bootstrap';

const SearchRecipes = (props) => {
  const [ingredients, setingedients] = useState('');
  const [dish, setdish] = useState('');

  const Search = async () => {
    let url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
    console.log(url);

    const response = await fetch(url, {
      method: 'GET',
    });

    const data = await response.json();
    props.setRecipes(data.results);
  };

  return (
    <Form inline>
      <FormGroup>
        <FormLabel className='inputLabel'>Ingredients</FormLabel>{' '}
        <FormControl
          type='text'
          placeholder='garlic,onion'
          onChange={(event) => {
            setingedients(event.target.value);
          }}
        ></FormControl>
      </FormGroup>{' '}
      <FormGroup>
        <FormLabel className='inputLabel'>Dish</FormLabel>{' '}
        <FormControl
          type='text'
          placeholder='pizza'
          onChange={(event) => {
            setdish(event.target.value);
          }}
        ></FormControl>
      </FormGroup>
      <Button className='searchButton' onClick={Search}>
        Find Recipes
      </Button>
    </Form>
  );
};

export default connect(null, { setRecipes })(SearchRecipes);
