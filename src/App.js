import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

// TODO: Add the ability for the <RecipeList /> component to list, edit and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  const RecipeDelete = (indexToDelete) => {
    const filteredList = recipes.filter(
      (recipe,index) => index !== indexToDelete
    )
    setRecipes(filteredList)
  }
  return (
    <div className="App">
      <header><h1>Recipe Keeper</h1></header>
      <RecipeList recipes={recipes} RecipeDelete={RecipeDelete}/>
      <RecipeCreate recipes={recipes} setRecipes={setRecipes}/>
    </div>
  );
}

export default App;
