const API = "https://rickandmortyapi.com/api/character";

const getData = async (id) => {
  const apiURL = id ? `${API}/${id}` : API;

  try {
    const res = await fetch(apiURL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export default getData;
