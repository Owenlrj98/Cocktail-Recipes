import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

async function getCocktailDetails(cocktailsId) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${cocktailsid}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

export default function CocktailDetails() {
    const [cocktailDetails, setCocktailDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const { cocktailsId } = useParams();

  useEffect(() => {
    const loadCocktailDetails = async () => {
      const dataDetails = await getCocktailDetails(cocktailsId);
      if (data) {
      setCocktailDetails(dataDetails.drinks[0]);
      } else { 
        setCocktailDetails(null);
      }
      setLoading(false);
    };

    loadCocktailDetails();
  }, [cocktailsId]);

  if (loading) {
    return <p></p>;
  }

  if (!cocktailDetails) {
    return <p>Cocktail not found!</p>;
  }

  return (
    <>
      <h1>{cocktailDetails.strDrink}</h1>
      <p>{cocktailDetails.strInstructions}</p>
      <Link to="/">
        <button>Back</button>
      </Link>
    </>
  );
}


