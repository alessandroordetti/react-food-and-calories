import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = '09724cce';
  const APP_KEY = '79f26a4279732816dfdefb4037c8a8cc';

  const [recipes, setRecipes] = useState([]);

  const[search, setSearch] = useState('');

  const [query, setQuery] = useState('chicken')


  /* useEffect viene invocata la prima volta al mounted della pagina */
  useEffect ( () =>{
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  /* Questa funzione serve per riempire la ricerca useStae ('') che altrimenti resterebbe vuota*/
  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  /* Questa funzione viene invocata quando il form viene submittato */
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className='App'>
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type="text" value={search} onChange={updateSearch} />
        <button type='submit'>Search</button>
      </form>

      <div className='cards'>
        {recipes.map(recipe => (
          <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}/>
        ))}
      </div>
    </div>
  );
}

export default App;

