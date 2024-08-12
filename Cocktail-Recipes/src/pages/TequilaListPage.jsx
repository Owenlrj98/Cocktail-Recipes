import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

async function getDataTequila() {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=tequila`;
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

export default function TequilaListPage() {
  const [tequila, setTequila] = useState({ drinks: [] }); //reminder: api is an object with drinks array in it

  useEffect(() => {
    const loadTequila = async () => {
      const dataTequila = await getDataTequila();
      setTequila(dataTequila);
    };
    loadTequila();
  }, []);

  return (
    <>
      <h1>Tequila Cocktails</h1>
      <Link to="/browse">
        <button>Back</button>
      </Link>
      <div>
        {tequila.drinks.map((tequila) => (
          <li key={tequila.idDrink}>
            <Link to={`/cocktails/${tequila.idDrink}`}>{tequila.strDrink}</Link>
          </li>
        ))}
      </div>
    </>
  );
}
