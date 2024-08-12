// export async function getFavouriteData() {
//     const url = "https://api.airtable.com/v0/appP6Mdy6FnbvrTke/Table%201";
//     try {
//       const response = await fetch(url, {
//         headers,
//       });
//       if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//       }
  
//       const json = await response.json();
//       return json.records.map((record) => {
//         return {
//           id: record.id,
//           ...record.fields,
//         };
//       });
//     } catch (error) {
//       console.error(error.message);
//     }
//   }
  
export default function FavouriteCocktailPage() {
    // const handleAddFavourites = (cocktail) => {
    //     setCocktails([...cocktails, cocktail]);
    // }
    return (console.log("hi")); 
}