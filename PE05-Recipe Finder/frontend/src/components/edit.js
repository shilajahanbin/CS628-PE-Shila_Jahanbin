import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

const API_URL =
  "https://cautious-telegram-r6rv4gr77v93pxvx-5050.app.github.dev/recipe";

export default function Edit() {
  const [form, setForm] = useState({
    name: "",
    ingredients: "",
    instructions: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${API_URL}/${params.id}`);

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const recipe = await response.json();

      if (!recipe) {
        window.alert(`Recipe with id ${params.id} not found`);
        navigate("/");
        return;
      }

      setForm(recipe);
    }

    fetchData();
  }, [params.id, navigate]);

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    const editedRecipe = {
      name: form.name,
      ingredients: form.ingredients,
      instructions: form.instructions,
    };

    await fetch(`${API_URL}/${params.id}`, {
      method: "PATCH",
      body: JSON.stringify(editedRecipe),
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate("/");
  }

  return (
    <div>
      <h3>Update Recipe</h3>

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Recipe Name</label>
          <input
            type="text"
            className="form-control"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>

        <br />

        <div className="form-group">
          <label>Ingredients</label>
          <textarea
            className="form-control"
            rows="4"
            value={form.ingredients}
            onChange={(e) =>
              updateForm({ ingredients: e.target.value })
            }
          />
        </div>

        <br />

        <div className="form-group">
          <label>Instructions</label>
          <textarea
            className="form-control"
            rows="6"
            value={form.instructions}
            onChange={(e) =>
              updateForm({ instructions: e.target.value })
            }
          />
        </div>

        <br />

        <div className="form-group">
          <input
            type="submit"
            value="Update Recipe"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}