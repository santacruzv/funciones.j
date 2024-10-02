// 3-funciones.js

// 1. Tu primera función
// 1.1 Escribe una función llamada `despedir` que imprima "Adiós" en la consola.
function despedir() {
  console.log("Adiós");
}
despedir();

// 1.2 Crea una función llamada `multiplicarPorDos` que tome un número como parámetro y devuelva el doble de ese número.
function multiplicarPorDos(numero) {
  return numero * 2;
}
const resultado = multiplicarPorDos(5); // Esto devolverá 10
console.log(resultado);
// 1.3 Crea una función llamada `esMayorDeEdad` que tome un número como parámetro y devuelva `true` si es mayor de 18, o `false` en caso contrario.
function esMayorDeEdad(edad) {
  if (edad > 18) {
    return true; // Si la edad es mayor de 18, devuelve true
  } else {
    return false; // En caso contrario, devuelve false
  }
}
console.log(esMayorDeEdad(20)); // en este caso va ser true, y si le ponemos 15 por ej seria false

// 2. Parámetros
// 2.1 Crea una función llamada `multiplicar` que reciba dos parámetros, los multiplique y devuelva el resultado.
function multiplicar(a, b) {
  return a * b; // aca multiplica los dos parámetros y devuelve el resultado
}
console.log(multiplicar(5, 3)); // el resultado es 15,  pero si fuera 10,2= 10*2 sería 20

// 2.2 Escribe una función llamada `saludarPersonalizado` que reciba dos parámetros: `nombre` y `apellido`. La función debe devolver "Hola, [nombre] [apellido]".
function saludarPersonalizado(nombre, apellido) {
  return "Hola, " + nombre + " " + apellido; //Concatenamos
}
console.log(saludarPersonalizado("Dahiana", "Santacruz")); // resultado "Hola, Dahiana Santacruz"
// 2.3 Crea una función llamada `calcularPotencia` que reciba dos parámetros: base y exponente. La función debe devolver el resultado de elevar la base al exponente.
function calcularPotencia(b, e) {
  return Math.pow(b, e);
}
console.log(calcularPotencia(2, 3)); // sería 8 :D

// 2.4 Escribe una función llamada `restar` que reciba dos parámetros y devuelva la diferencia entre ellos.
function restar(a, b) {
  return a - b;
}
console.log(restar(10, 5)); // sería 5
// 2.5 Crea una función llamada `dividir` que reciba dos parámetros y devuelva el resultado de la división del primer parámetro por el segundo.
function dividir(numero1, numero2) {
  return numero1 / numero2;
}
console.log(dividir(15, 3)); // Devuelve 5
// 3. Function Expression
// 3.1 Crea una **function expression** que multiplique dos números y asígnala a la variable `funcionMultiplicar`.
const funcionMultiplicar = function (numero1, numero2) {
  return numero1 * numero2;
};
console.log(funcionMultiplicar(7, 2)); // Devuelve 14
// 3.2 Escribe una **function expression** llamada `saludar` que acepte un parámetro `nombre` y devuelva "Hola, [nombre]".
const saludar = function (nombre) {
  return "Hola, " + nombre; // concatenamos
};
console.log(saludar("Fiorella")); // Devuelve "Hola, Fiorella"

// 3.3 Crea una **function expression** llamada `esPar` que acepte un número como parámetro y devuelva `true` si el número es par, o `false` en caso contrario.
const esPar = function (numero) {
  if (numero % 2 === 0) {
    return true; // El número es par
  } else {
    return false; // El número no es par
  }
};
console.log(esPar(4)); // Devuelve true, pero si fuera un 7 por ej diría false

// 4. Funciones Flecha
// 4.1 Convierte la siguiente función en una función flecha llamada multiplicarFlecha:
// function multiplicar(a, b) {
//     return a * b;
// }
const multiplicarFlecha = (a, b) => {
  return a * b;
};
console.log(multiplicarFlecha(7, 2)); // seria 14

// 4.2 Crea una función flecha llamada `saludarFlecha` que reciba un parámetro `nombre` y devuelva "Hola [nombre]".
const saludarFlecha = (nombre) => "Hola, " + nombre;
console.log(saludarFlecha("Dahiana")); // Devuelve "Hola Dahiana"

// 4.3 Escribe una función flecha llamada `calcularArea` que reciba el radio de un círculo y devuelva el área del círculo. Usa la fórmula A = π * r².
const calcularArea = (radio) => {
  return Math.PI * radio * radio; // sería lo mismo que A = π * r²
};

const area = calcularArea(5); // puedo cambiar al radio que quiera
console.log(area); //  se imprime el área del círculo

// 5. Recursividad
// 5.1 Escribe una función que calcule la suma de los primeros n números enteros de forma recursiva. Por ejemplo: `suma(3) -> 1 + 2 + 3 = 6`
function suma(n) {
  //  si n es 0, la suma es 0
  if (n === 0) {
    return 0;
  }
  // aca ocurre la recursividad qie suma el número actual n y la suma de los números anteriores
  return n + suma(n - 1);
}

console.log(suma(3)); // aca tendria que salir 6, pero si por ejem fuera 5 tendria que salir 15 :D

// 5.2 Escribe una función que calcule la sucesión de Fibonacci de forma recursiva. La sucesión de Fibonacci es una serie de números que empieza por 0 y 1 y cada número es la suma de los dos anteriores. Por ejemplo: `fibonacci(6) -> 8`
function fibonacci(n) {
  //  los dos primeros números de la serie
  if (n === 0) {
    return 0; // Fibonacci(0) es 0
  }
  if (n === 1) {
    return 1; // Fibonacci(1) es 1
  }
  // ocurre ls recursividad que seria la suma de los dos anteriores
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6)); // el resultado es 8
// 5.3 Crea una función recursiva llamada `factorial` que calcule el factorial de un número. El factorial de n (n!) es el producto de todos los números enteros positivos menores o iguales a n.
function factorial(n) {
  //  el factorial de 0 es 1
  if (n === 0) {
    return 1;
  }
  // recursividad  n * factorial(n - 1)
  return n * factorial(n - 1);
}

console.log(factorial(5)); // seria 120
// 5.4 Escribe una función recursiva que calcule la potencia de un número dado el exponente. Por ejemplo: `potencia(2, 3) -> 8`
function potencia(base, exponente) {
  //  cualquier número elevado a 0 es 1
  if (exponente === 0) {
    return 1;
  }
  //  recursividad la  base multiplicada por la potencia(base, exponente - 1)
  return base * potencia(base, exponente - 1);
}
console.log(potencia(2, 3)); // sería 8

// Exportar las funciones para que puedan ser probadas
module.exports = {
  despedir,
  multiplicarPorDos,
  esMayorDeEdad,
  multiplicar,
  saludarPersonalizado,
  calcularPotencia,
  restar,
  dividir,
  funcionMultiplicar,
  saludar,
  esPar,
  calcularArea,
  suma,
  fibonacci,
  factorial,
  potencia,
  saludarFlecha,
  multiplicarFlecha,
};
