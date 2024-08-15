import { useNavigate } from "react-router-dom"; 

//https://www.geeksforgeeks.org/reactjs-usenavigate-hook/

async function getCocktailData(searchName) {
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
    const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const searchName = event.target.searchName.value;
    const data = await getCocktailData(searchName);
    setCocktails(data);
    navigate("/search-results", { state: { cocktails: data } }); //the magic
  };

  return (
    <div className="container mt-4">
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend className="mb-3">Search</legend>
        <label className="form-label">
          Cocktail Name:
          <input type="search" name="searchName" className="form-control"/>
        </label>
          <button type="submit" className="btn btn-secondary">Search</button>
      </fieldset>
    </form>
        </div>
  );
}
