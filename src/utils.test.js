import { expect, test } from 'vitest';
import { getData } from './utils.js';

test('Vérifie si l\'API renvoie bien des données', async () => {
  // 1. On appelle ta vraie fonction
  const resultats = await getData();

  // 2. Le test : est-ce que c\'est bien un tableau ? (vrai ou faux)
  const estUnTableau = Array.isArray(resultats);
  expect(estUnTableau).toBe(true);

  // 3. Le test : est-ce qu\'il contient des événements ? (vrai ou faux)
  const aDesElements = resultats.length > 0;
  expect(aDesElements).toBe(true);
  
  // Petit log pour toi dans le terminal
  console.log(` -> Test réussi ! Nombre d'événements reçus : ${resultats.length}`);
});