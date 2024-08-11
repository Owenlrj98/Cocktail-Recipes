import { Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/NavBar";
import GinListPage from "./pages/GinListPage";
import VodkaListPage from "./pages/VodkaListPage";
import CocktailSearch from "./pages/CocktailSearch";
import { useEffect, useState } from "react";
import CocktailSearchResult from "./pages/CocktailSearchResult";

function App() {
  const [cocktails, setCocktails] = useState([]);

  return (
    <>
      <h1>Cocktail Recipes</h1>
      <Navbar />
      {/* navigation bar */}
      <CocktailSearch setCocktails={setCocktails} />
      <ul>
        {cocktails.length === 0 ? (
          <p>No recipes found</p>
        ) : (
          cocktails.drinks.map((ct) => (
            <li key ={ct.idDrink}>
              <h2>{ct.strDrink}</h2>
              <img src={ct.strDrinkThumb} alt={ct.strDrink} width="200"/>
              <p></p>
            </li>
          ))
        )}
      </ul>
      {/* if there is a match with searchname, return list of cocktails with that name */}
      <div>
          <Link to="/gin">
            <button>Gin</button>
          </Link>
      </div>
      {/* return list of cocktailnames with gin as ingredient */}
      <div>
          <Link to="/vodka">
            <button>Vodka</button>
          </Link>
      </div>
      {/* return list of cocktailnames with vodka as ingredient */}
      <Routes>
        <Route path="/gin" element={<GinListPage />} />
        <Route path="/vodka" element={<VodkaListPage />} />
      </Routes>
    </>
  );
}

export default App;
