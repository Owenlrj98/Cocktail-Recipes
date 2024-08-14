
const headers = {
  "Content-Type": "application/json",
  Authorization:
"Bearer patK91PcHhQ6JyNIO.8d4dd38feb7b4aed2d34001682dd1a7628d5651fa441c076d805081351f41b32"
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
        