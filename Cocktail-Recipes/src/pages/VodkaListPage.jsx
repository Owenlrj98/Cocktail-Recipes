import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

async function getDataVodka() {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka";
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

export default function VodkaListPage() {
  const [vodka, setVodka] = useState({ drinks: [] });

  useEffect(() => {
    const loadVodka = async () => {
      const dataVodka = await getDataVodka();
      setVodka(dataVodka);
    };
    loadVodka();
  }, []);

  return (
    <>
      <h1>Vodka List</h1>
      <Link to="/browse">
        <button>Back</button>
      </Link>
      <div>
        {vodka.drinks.map((vodka) => (
          <li key={vodka.idDrink}>{vodka.strDrink}</li>
        ))}
        ;
      </div>
    </>
  );
}
