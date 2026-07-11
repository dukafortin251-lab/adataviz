
export const getData = async () => {
  try {
    const data = await fetch("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=20");
    const Jsondata = await data.json();
    return Jsondata.results; 
  } catch (error) {
    console.error("Erreur de fetch dans utils.js :", error);
    return [];
  } finally {
    console.log("c'est terminé dans utils.js");
  } 
};