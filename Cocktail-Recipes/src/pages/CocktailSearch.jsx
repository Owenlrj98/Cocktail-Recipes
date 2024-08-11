import { useState } from "react";

async function getCocktailData (searchName) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchName}`;
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

export default function CocktailSearch({ setCocktails }) {
    // const [searchName, setSearchName] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const searchName = event.target.searchName.value;
        const data = await getCocktailData(searchName);
        setCocktails(data);
    };    

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Search</legend>
                <label>
                    Search Cocktail Name:  
                    <input type="search" name="searchName" />
                </label>
                <button type="submit">Search</button>
            </fieldset>
        </form>
    );
}