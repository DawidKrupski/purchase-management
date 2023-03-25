import { useSelector } from "react-redux";
import { selectRecipe } from "../Redux/Selectors";

export const RecipeList = () => {
  const recipeList = useSelector(selectRecipe);

  const ListOfRecipe = recipeList;
  console.log(ListOfRecipe);

  return (
    <div>
      <ul>
        {recipeList?.map((recipe) => (
          <li key={recipe.id}>
            <div>{recipe.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
