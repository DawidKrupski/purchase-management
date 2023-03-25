import { Recipe } from "../Recipe/Recipe";
import { RecipeList } from "../RecipeList/RecipeList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Recipe />
      <RecipeList />
    </div>
  );
}

export default App;
