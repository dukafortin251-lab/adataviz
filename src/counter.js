const getData = async () => {
  try {
    const data = await fetch("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=20");

    const Jsondata = await data.json();
    console.log(Jsondata);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("c'est terminé");
  } 
};

getData();


//Ton objectif : Déclare une nouvelle fonction nommée afficherActivites. Elle doit accepter un paramètre (appelons-le activites).
//  Pour l'instant, fais en sorte que cette fonction fasse simplement un console.log(activites) pour vérifier qu'elle 
// reçoit bien les données.
//Action : Écris cette fonction et appelle-la à l'intérieur de ton try (juste après avoir reçu Jsondata).
const afficherActivites = (activites) => {
  console.log("Données reçues dans la fonction :", activites);
};

//Étape
