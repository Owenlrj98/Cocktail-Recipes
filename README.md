## API Choice
TheCocktailDB
https://www.thecocktaildb.com/api.php

## User Stories
This website serves as a cocktail encyclopedia for users.
1. At the homepage, the website should display categories by spirit type, which will return a list of cocktails corresponding to the category.
2. Users should be able to search for cocktails by name, which will return a brief recipe on ingredients and measurement required.
3. Users should be able to search for cocktails by main spirit, which will return a list of cocktail names.
4. There should be a component where users can get a random cocktail suggestion from the website.
5. There should be a component where users can save cocktail recipes as favourite.


## Sample of API routes
Search by cocktail name: 
www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

Search by ingredient name:
www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka

Suggest a random cocktail:
www.thecocktaildb.com/api/json/v1/1/random.php

## Wireframes
-Paired with react-router routes
-Identify Components / state / fetch

HomePage    - Consist of different categories ( By spirits ) -> like a nav bar
            - One Button that says "SUGGEST A DRINK!" / "DRINK OF THE DAY"
            - Search name button
            - Favourite button
            - Create your own recipe?

## Existing libraries / css

## Identify Data to CUD
Favourited drinks?
