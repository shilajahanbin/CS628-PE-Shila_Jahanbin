import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://cautious-telegram-r6rv4gr77v93pxvx-5050.app.github.dev/recipe";

const Recipe = (props) => (
  <tr>
    <td>{props.recipe.name}</td>
    <td>{props.recipe.ingredients}</td>
    <td>{props.recipe.instructions}</td>
    <td>
      <Link className="btn btn-link" to={`/edit/${props.recipe._id}`}>
        Edit
      </Link>
      |
      <button
        className="btn btn-link"
        onClick={() => {
          props.deleteRecipe(props.recipe._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function getRecipes() {
      const response = await fetch(API_URL);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const recipes = await response.json();
      setRecipes(recipes);
    }

    getRecipes();
  }, [recipes.length]);

  async function deleteRecipe(id) {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    const newRecipes = recipes.filter((el) => el._id !== id);
    setRecipes(newRecipes);
  }

  function recipeList() {
    return recipes.map((recipe) => {
      return (
        <Recipe
          recipe={recipe}
          deleteRecipe={() => deleteRecipe(recipe._id)}
          key={recipe._id}
        />
      );
    });
  }

  return (
    <div>
      <h3>Recipe List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ingredients</th>
            <th>Instructions</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{recipeList()}</tbody>
      </table>
    </div>
  );
}