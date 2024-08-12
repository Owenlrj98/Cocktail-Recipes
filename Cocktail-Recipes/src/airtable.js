import debug from "debug";

const headers = {
  "Content-Type": "application/json",
  Authorization:
"Bearer patQDKlxNE021MmLH.68309b6fe59605b71b9b1cfd849058c958aa5601cd9d88508656e7cfe7e9d5f1"
};

export async function getData() {
  const url = "https://api.airtable.com/v0/appP6Mdy6FnbvrTke/Table%201";
  try {
    const response = await fetch(url, {
      headers,
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json.records.map((record) => {
      return {
        id: record.id,
        ...record.fields,
      };
    });
  } catch (error) {
    console.error(error.message);
  }
}

export const createPet = async (formData) => {
  const url = "https://api.airtable.com/v0/appP6Mdy6FnbvrTke/Table%201";
  log("formData, %o", formData);
  const payload = { fields: { ...formData, age: Number(formData.age) } };
  log("payload, %o", payload);
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
    log("result %o", result);
    return result;
  } catch (error) {
    console.error(error.message);
  }
};
