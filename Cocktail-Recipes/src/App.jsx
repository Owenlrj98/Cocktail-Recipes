import { Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/NavBar";
import GinListPage from "./pages/GinListPage";
import VodkaListPage from "./pages/VodkaListPage";
import CocktailSearch from "./pages/CocktailSearch";
import CocktailSearchResult from "./pages/CocktailSearchResult";
import { useEffect, useState } from "react";
import FavouriteCocktailPage from "./pages/FavouriteCocktailPage";
import Random from "./pages/Random";
import BrowseCategory from "./pages/BrowseCategory"

function App() {
  const [cocktails, setCocktails] = useState({ drinks: [] });

  return (
    <>
      <h1>Cocktail Recipes</h1>
      <Navbar />
      <CocktailSearch setCocktails={setCocktails}/>
      {/* navigation bar */}
      <h2>Featuring: </h2>
      <Random />
      <Routes>
        {/* <Route path="/search" element={<CocktailSearch setCocktails={setCocktails}/>} /> */}
        <Route path="/search-results" element={<CocktailSearchResult cocktails={cocktails}/>} />
        <Route path="/gin" element={<GinListPage />} />
        <Route path="/vodka" element={<VodkaListPage />} />
        <Route path="/favourites" element={<FavouriteCocktailPage />} />
        {/* <Route path="/random" element={<Random />} /> */}
        <Route path="/browse" element={<BrowseCategory />} />
      </Routes>
    </>
  );
}

export default App;
