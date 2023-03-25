import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRecipeAction } from "../Redux/Operations";

export const AddRecipe = () => {
  const dispatch = useDispatch();

  const [recipeName, setRecipeName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addRecipeAction({ recipeName }));
    setRecipeName("");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "recipeName") {
      setRecipeName(value);
      console.log(recipeName);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Recipe Name</label>
        <input
          type="text"
          value={recipeName}
          onChange={handleInputChange}
          name="recipeName"
        ></input>
        <button type="submit">Add Recipe</button>
      </form>
    </>
  );
};
