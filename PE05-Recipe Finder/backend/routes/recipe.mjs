import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// Get all recipes
router.get("/", async (req, res) => {
  let collection = await db.collection("recipes");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// Get one recipe by id
router.get("/:id", async (req, res) => {
  let collection = await db.collection("recipes");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// Create a new recipe
router.post("/", async (req, res) => {
  let newDocument = {
    name: req.body.name,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
  };

  let collection = await db.collection("recipes");
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

// Update a recipe by id
router.patch("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const updates = {
    $set: {
      name: req.body.name,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
    },
  };

  let collection = await db.collection("recipes");
  let result = await collection.updateOne(query, updates);

  res.send(result).status(200);
});

// Delete a recipe
router.delete("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const collection = db.collection("recipes");
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

export default router;