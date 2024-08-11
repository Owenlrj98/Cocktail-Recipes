import { useLocation } from "react-router-dom";
//https://reactrouter.com/en/main/hooks/use-location

export default function CocktailSearchResult() {
  const location = useLocation();
  const { cocktails } = location.state || { cocktails: { drinks: [] } };

  return (
    <div>
      <ul>
        {cocktails.drinks && cocktails.drinks.length === 0 ? (
          <p>No recipes found</p>
        ) : (
          cocktails.drinks.map((ct) => (
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
                  {
                    /* otherwise, render nothing */
                  }
                })}
              </ul>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
