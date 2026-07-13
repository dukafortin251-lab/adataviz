import { getData } from './utils.js';

const containerCulture = document.getElementById("container-culture");

const afficherActivites = (activites) => {
  console.log("Données reçues dans la fonction afficherActivites :", activites);
};

const printData = async () => {
  const resultData = await getData(); 
  
  afficherActivites(resultData);
  
  if (!containerCulture) return;
  
  containerCulture.innerHTML = ""; 

  for (let i = 0; i < resultData.length; i++) {
    const event = resultData[i];
    
    const article = document.createElement("article");
    article.classList.add("card"); 

    const titre = event.title || event.titre_descriptif || "Événement sans titre";
    const image = event.cover_url || "https://placehold.co/600x400?text=Paris";
    const description = event.lead_text || "Découvrez cet événement à Paris.";

   article.innerHTML = `
  <figure>
    <img src="${image}" alt="${titre}">
    <figcaption>
      <h3>${titre}</h3>
      <p>${description}</p>
    </figcaption>
  </figure>
`;
    
    containerCulture.appendChild(article);
  }
};

printData();