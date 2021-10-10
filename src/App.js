import bookImg from "./1.jpg";
import bandLogo from "./2.jpg";
import recipeImg from "./3.png";
import "./App.css";

const FavoriteBook = {
  name: "The Dark Elf Trilogy",
  genre: "Epic fantasy",
  pages: 1200,
  author: "R. A. Salvatore",
  review:
    "Sublime world-building and a very very angry culture of backstabbing and self-aggrandizement make atypical dark elf Drizzt Do'Urden the D&D legend that he is under Salvatore's masterful touch. Fraught with visceral combat and plenty of politics, it is the kill or be killed cauldron of morality that makes Drizzt's exciting character study and adventures so good. Excellent trilogy for fans of dark fantasy.",
};

const FavoriteBand = {
  name: "Wardruna",
  poster: <img src={bandLogo} />,
  genres: "Nordic folk, ambient, dark folk",
  discography:
    "Runaljod – Gap Var Ginnunga (2009), Runaljod – Yggdrasil (2013),Runaljod – Ragnarok (2016),Skald (2018),Kvitravn (2021)",
};

const FavoriteRecipe = {
  name: "Bacon Pancakes",
  img: recipeImg,
  ingredients:
    "12 slices thick bacon,2 cups Original Bisquick mix, 1 cup milk,2 eggs,Syrup for topping",
  steps:
    "Preheat griddle or skillet. Cook bacon until crispy and drain on paper towels.Prepare pancake batter by mixing Bisquick mix, milk, and eggs in a medium bowl. Place bacon strips on griddle or skillet, leaving plenty of room in between them. Pour pancake mix all around the bacon strip.Cook for 2-3 minutes per side or until golden brown.Serve with syrup.",
};

function App() {
  return (
    <>
      <div className="favorite">
        <div className="div">
          FavoriteBook:
          <h3>{FavoriteBook.name}</h3>
          <img src={bookImg} width="300" height="150" />
          <p>{FavoriteBook.genre}</p>
          <p>{FavoriteBook.pages} pages</p>
          <p>{FavoriteBook.review}</p>
        </div>
        <div className="div">
          FavoriteBand:
          <h3>{FavoriteBand.name}</h3>
          <img src={bandLogo} width="100" height="100" />
          <p>{FavoriteBand.genres}</p>
          <p>{FavoriteBand.discography}</p>
        </div>
        <di className="div">
          FavoriteRecipe:
          <h3>{FavoriteRecipe.name}</h3>
          <img src={recipeImg} width="100" height="100" />
          <p>Ingredients: {FavoriteRecipe.ingredients}</p>
          <p>Steps: {FavoriteRecipe.steps}</p>
        </di>
      </div>
    </>
  );
}

export default App;
