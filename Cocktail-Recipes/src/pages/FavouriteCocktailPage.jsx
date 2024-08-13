import { useState, useEffect } from "react";

export default function FavouriteCocktailPage() {
    const [favouriteCocktail, setFavouriteCocktail] = useState({ drinks: [] });
    return (
        <>
        <h1>Favourite Cocktails</h1>
        {favouriteCocktail.drinks.map((fc) => (
            <li key={favouriteCocktail.idDrink}>
                {favouriteCocktail.strDrink}
                </li>
        ))}
        </>
    )
}

