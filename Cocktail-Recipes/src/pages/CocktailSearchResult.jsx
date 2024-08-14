import { Link, useLocation } from "react-router-dom";
import { addCocktail } from "../airtable";

//https://reactrouter.com/en/main/hooks/use-location

export default function CocktailSearchResult() {
  const location = useLocation();
  const { cocktails } = location.state || { cocktails: { drinks: [] } };
  // in case some cocktails are undefined, which is why page crash
  // by right, format should have {drinks: []}
  // keeps giving error that some data are not objects
  const drinks = cocktails?.drinks || []; //magic

  const handleAdd = async (name, thumb, id) => {
    try {
      await addCocktail(name, thumb, id);
  } catch (error) {
      console.error(error.message);
  }
};
// duplicated this function from cocktaildetails

  return (
    <>
      <Link to="/search">
        <button>Back</button>
      </Link>
      <div>
        <ul>
          {drinks.length === 0 ? (
            <p>No recipes found</p>
          ) : (
            drinks.map((ct) => (
              <li key={ct.idDrink}>
                <h2>{ct.strDrink}</h2>
                <img src={ct.strDrinkThumb} alt={ct.strDrink} width="300" />
                <p>
                  <strong>Instructions:</strong> {ct.strInstructions}
                </p>
                <p>
                  <strong>Ingredients:</strong>
                </p>
                <ul>
                  {/* create array with 15 values as there are 15 values */}
                  {/* loop and transform each value into new array*/}
                  {Array.from({ length: 15 }).map((_, index) => {
                    const ingredient = ct[`strIngredient${index + 1}`];
                    const measurement = ct[`strMeasure${index + 1}`];
                    {
                      /*index+1 as the strIngrededient and */
                    }
                    {
                      /* strMeasurement starts from 1 return if ingredient exist (not null) */
                    }
                    return ingredient ? (
                      <li key={index}>
                        {measurement ? `${measurement} ` : ""}
                        {ingredient}
                      </li>
                    ) : null;
                  })}
                  <button onClick={() => handleAdd(ct.strDrink, ct.strDrinkThumb, ct.idDrink)}>Add to Favourites</button>
                </ul>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
}

