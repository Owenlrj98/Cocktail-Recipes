export default function CocktailSearchResult({ cocktails }) {
    return ( 
        <>
        <ul>
        {cocktails.drinks.length === 0 ? (
          <p>No recipes found</p>
        ) : (
          cocktails.drinks.map((ct) => (
            <li key ={ct.idDrink}>
              <h2>{ct.strDrink}</h2>
              <img src={ct.strDrinkThumb} alt={ct.strDrink} width="200"/>
              <p>{ct.strInstructions}</p>
              <ul></ul>
            </li>
          ))
        )}
      </ul>
      </>
    )}