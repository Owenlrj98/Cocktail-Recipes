
const headers = {
  "Content-Type": "application/json",
  Authorization:
`Bearer ${import.meta.env.VITE_APIKEY}`
};

export const addCocktail = async (name, thumb, id) => {
  const url = "https://api.airtable.com/v0/appxzEJlWbr8OBPcp/Table%201";
  const payload = { 
    fields: {
        strDrink: name,
        strDrinkThumb: thumb,
        idDrink: id
   } 
};
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers,
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    const result = { id: json.id, ...json.fields };

    return result;
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteCocktail = async (cocktailId) => {
    const url = `https://api.airtable.com/v0/appxzEJlWbr8OBPcp/Table%201/${cocktailId}`;
    try {
            const response = await fetch(url, {
            method: "DELETE",
            headers,
                });
                if (!response.ok) {
                  throw new Error(`Response status: ${response.status}`);
                }
            
                await response.json();
              } catch (error) {
                console.error(error.message);
              }
            };
        