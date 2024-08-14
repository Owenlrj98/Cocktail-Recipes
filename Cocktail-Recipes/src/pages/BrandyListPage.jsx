import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

async function getDataBrandy() {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=brandy";
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

export default function BrandyListPage() {
  const [brandy, setBrandy] = useState({ drinks: [] }); //reminder: api is an object with drinks array in it

  useEffect(() => {
    const loadBrandy = async () => {
      const dataBrandy = await getDataBrandy();
      setBrandy(dataBrandy);
    };
    loadBrandy();
  }, []);

  return (
    <>
        <h1>Brandy Cocktails</h1>
        <Link to="/browse">        
        <button>Back</button>
        </Link>
        <div>
            {brandy.drinks.map((brandy) => (
                <li key={brandy.idDrink}>
                  <Link to={`/cocktails/${brandy.idDrink}`}>{brandy.strDrink}</Link>
                  </li>
            ))}
        </div>
    </>
  );
}
