// Desafio 1 - Crie a função compareTrue
const compareTrue = (palavra1, palavra2) => (
  palavra1 === true && palavra2 === true ? true : false
);
const girafa = true;
const elefante = true;
const macaco = false;

console.log(compareTrue(girafa, elefante));
console.log(compareTrue(girafa, macaco));
console.log(compareTrue(elefante, macaco));

// Desafio 2 - Crie a função splitSentence
const splitSentence = (frase) => {
  return frase.split(' ');
}
console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 3 - Crie a função concatName
const concatName = (array) => {
  for (index = 0; index = array.length; index += 1) {
    return `${array[array.length - 1]}, ${array[0]}`
  }
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));
// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => {
  let pontos = (wins * 3) + (ties * 1);
  return pontos;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));
// Desafio 5 - Crie a função highestCount
const highestCount = (arrayNumeros) => {
  // let maiorNumero = Math.max.apply(0, arrayNumeros);
  let maiorNumero = arrayNumeros[0]
  let contador = 0;
  for (index = 0; index < arrayNumeros.length; index += 1) {
    if (arrayNumeros[index] > maiorNumero) {
      maiorNumero = arrayNumeros[index]
    }
  }
  for (index = 0; index < arrayNumeros.length; index += 1) {
    if (maiorNumero === arrayNumeros[index]) {
      contador += 1
    }
  }
  return contador
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([-2, -2, -1]));
console.log(highestCount([0, 0, 0]));

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, height) => {
  return (base * height) / 2;
}
const calcRectangleArea = (base, height) => {
  return base * height;
}
const calcAllAreas = (base, height, form) => {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`
  } else if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`
  } else {
    return `Não foi possível fazer o cálculo, insira uma forma geométrica válida`
  }
}
console.log(calcTriangleArea(10, 50));
console.log(calcRectangleArea(10, 50));
console.log(calcAllAreas(10, 50, 'triângulo'));
console.log(calcAllAreas(10, 50, 'retângulo'));
console.log(calcAllAreas(10, 50, 'quadrado'));

// Desafio 7 - Crie a função catAndMouse
const catAndMouse = (mouse, cat1, cat2) => {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return `cat1`;
  } else if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    return `cat2`;
  } else {
    return `os gatos trombam e o rato foge`;
  }
}
console.log(catAndMouse(3, 6, 7));
// Desafio 8 - Crie a função fizzBuzz
const fizzBuzz = (array) => {
  let arrayFizzBuzz = []
  for (index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrayFizzBuzz.push(`fizzBuzz`);
    } else if (array[index] % 5 === 0) {
      arrayFizzBuzz.push(`buzz`);
    } else if (array[index] % 3 === 0) {
      arrayFizzBuzz.push(`fizz`);
    } else{
      arrayFizzBuzz.push(`bug!`);
    }
  }
  return arrayFizzBuzz
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => { }),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => { }),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => { }),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => { }),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => { }),
  concatName: typeof concatName === 'function' ? concatName : (() => { }),
  decode: typeof decode === 'function' ? decode : (() => { }),
  encode: typeof encode === 'function' ? encode : (() => { }),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => { }),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => { }),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => { }),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => { }),
  techList: typeof techList === 'function' ? techList : (() => { }),
};
