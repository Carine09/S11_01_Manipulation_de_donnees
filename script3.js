
/* Ci-dessous deux fichiers annexes à intégrer dans ton projet

data.json

script.js

Pour commencer, affiche dans ta console le type de data pour vérifier qu’il corresponde bien au type object et non string

Affiche dans la console, le premier objet du tableau d’objets

Résultat attendu:
{
  "candidate": "Afrodite Amour",
  "age": 27,
  "city": "Lyon",
  "region": "Auvergne-Rhône-Alpes",
  "ranking": 10
}

Affiche dans la console, le nombre d’objects contenu dans le tableau
Résultat attendu: 10

Affiche dans la console, les informations de la candidate arrivée au 4e rang
Résultat attendu:

{
  "candidate": "Lula Strega",
  "age": 27,
  "city": "Paris",
  "region": "Île-de-France",
  "ranking": 4
}

Affiche dans la console, l’âge moyen des candidates
Résultat attendu : 27.3 */

const fs = require('fs');
const filepath = 'data.json';

const content = fs.readFileSync(filepath, {encoding: 'utf8', flag: 'r'});
const data = JSON.parse(content);
let sum = 0

// console.log(typeof data);
// console.log(data[0]);
// console.log(data[0].age);
console.log(data.length);
// console.log(data[4]);

data.forEach(element => {
    // let count = element.age;
    // console.log(count);
    // console.log(typeof count);
    let result = (sum += element.age);
    console.log(result);
    let average = result/data.length;
    console.log(average);
});