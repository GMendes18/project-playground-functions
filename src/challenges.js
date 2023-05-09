// Desafio 1 - Crie a função compareTrue
const compareTrue = (palavra1,palavra2) => (
  palavra1 === true && palavra2 === true? true : false
);
const girafa = true;
const elefante = true;
const macaco = false;

console.log(compareTrue(girafa,elefante));
console.log(compareTrue(girafa,macaco));
console.log(compareTrue(elefante,macaco));
 
// Desafio 2 - Crie a função splitSentence
const splitSentence = (frase) => {
  return frase.split(' ');
}
console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 3 - Crie a função concatName
const concatName = (array) => {
  for (index = 0; index = array.length; index += 1){
    return `${array[array.length -1]}, ${array[0]}`
  }
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));
// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins,ties) => {
  let pontos = (wins*3)+(ties*1);
  return pontos;
}
console.log(footballPoints(14,8));
console.log(footballPoints(1,2));
console.log(footballPoints(0,0));
// Desafio 5 - Crie a função highestCount

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

// Desafio 7 - Crie a função catAndMouse

// Desafio 8 - Crie a função fizzBuzz

// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
