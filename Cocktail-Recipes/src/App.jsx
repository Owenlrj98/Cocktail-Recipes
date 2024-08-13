import { Route, Routes, Link, useLocation } from "react-router-dom";
import Navbar from "./components/NavBar";
import GinListPage from "./pages/GinListPage";
import VodkaListPage from "./pages/VodkaListPage";
import TequilaListPage from "./pages/TequilaListPage";
import CocktailSearch from "./pages/CocktailSearch";
import CocktailSearchResult from "./pages/CocktailSearchResult";
import { useEffect, useState } from "react";
import FavouriteCocktailPage from "./pages/FavouriteCocktailPage";
import Random from "./pages/Random";
import BrowseCategory from "./pages/BrowseCategory";
import CocktailDetails from "./pages/CocktailDetails";

function App() {
  const [cocktails, setCocktails] = useState({ drinks: [] });
  const location = useLocation(); //find current location
  const [formData, setFormData] = useState({
    name: "",
  });
  const isHomePage = location.pathname === "/";
  // checks if route is at homepage

  return (
    <>
      <h1>Cocktail Recipes</h1>
      <Navbar />
      <CocktailSearch setCocktails={setCocktails} />
      {/* navigation bar */}
      {isHomePage && (
        <>
          <h2>Featured Cocktail: </h2>
          <Random />
        </>
      )} 
      {/* for making the featured cocktail invisible after clicking other links */}
      <Routes>
        <Route
          path="/search-results"
          element={<CocktailSearchResult cocktails={cocktails} />} />
        <Route path="/gin" element={<GinListPage />} />
        <Route path="/vodka" element={<VodkaListPage />} />
        <Route path="/tequila" element={<TequilaListPage />} />
        <Route path="/favourites" element={<FavouriteCocktailPage />} />
        <Route path="/browse" element={<BrowseCategory />} />
        <Route path="/cocktails/:id" element={<CocktailDetails cocktails={cocktails} />} />
      </Routes>
    </>
  );
}

export default App;
