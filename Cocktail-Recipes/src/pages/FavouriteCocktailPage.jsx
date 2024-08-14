import { useState, useEffect } from "react";
import { deleteCocktail } from "../airtable";
import { Link } from "react-router-dom";

const headers = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer patK91PcHhQ6JyNIO.8d4dd38feb7b4aed2d34001682dd1a7628d5651fa441c076d805081351f41b32",
};

async function getFavouriteData() {
  const url = "https://api.airtable.com/v0/appxzEJlWbr8OBPcp/Table%201";
  try {
    const response = await fetch(url, {
      headers,
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json.records.map((record) => {
      return {
        id: record.id,
        ...record.fields,
      };
    });
  } catch (error) {
    console.error(error.message);
  }
}

export default function FavouriteCocktailPage() {
  const [favourite, setFavourite] = useState([]);

  useEffect(() => {
    const loadFavourite = async () => {
      const dataFavourite = await getFavouriteData();
      setFavourite(dataFavourite);
    };
    loadFavourite();
  }, []);

  const handleDelete = async (cocktailId) => {
    setFavourite(favourite.filter((cocktail) => cocktail.id !== cocktailId));
    await deleteCocktail(cocktailId);
  };
  return (
    <>
      <h1>Favourite Cocktails</h1>
      <div>
        <ul>
          {favourite.length === 0 ? (
            <p>No recipes found</p>
          ) : (
            favourite.map((ct) => (
              <li key={ct.id}>
                <Link to={`/cocktails/${ct.idDrink}`}>
                  <h2>{ct.strDrink}</h2>
                </Link>
                <img src={ct.strDrinkThumb} alt={ct.strDrink} width="300" />
                <button onClick={() => handleDelete(ct.id)}>
                  Remove from favourites
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
}
