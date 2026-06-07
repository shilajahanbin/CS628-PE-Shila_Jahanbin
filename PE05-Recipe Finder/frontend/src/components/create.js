import React, { useState } from "react";
import { useNavigate } from "react-router";

const API_URL =
  "https://cautious-telegram-r6rv4gr77v93pxvx-5050.app.github.dev/recipe";

export default function Create() {
  const [form, setForm] = useState({
    name: "",
    ingredients: "",
    instructions: "",
  });

  const navigate = useNavigate();

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    const newRecipe = { ...form };

    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({
      name: "",
      ingredients: "",
      instructions: "",
    });

    navigate("/");
  }

  return (
    <div>
      <h3>Create New Recipe</h3>

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
            value="Create Recipe"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}