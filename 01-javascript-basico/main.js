console.log('Hola desde otro archivo!')

// COMENTARIOS

// Esto es un comentario en una línea
// Esto es un comentario en una línea
// Esto es un comentario en una línea

/* Esto
es un
comentario
más
largo
*/

// TIPOS DE DATOS (Primitivos)

// Undefined

let nombre
console.log(nombre)
console.log(typeof nombre)

// Null

let apellido = null
console.log(apellido)
console.log(typeof apellido)

// Boolean -> false o true2

const encendido = true
console.log(encendido)

// Number

const numero1 = 20
const numero2 = 20.50
const numero3 = -36

console.log(typeof numero1)
console.log(typeof numero2)
console.log(typeof numero3)

// Strings o Cadenas de texto

const alumno = 'Christofer'
const alumna = "Mariana"
const numero11 = '200'
const numero22 = 200

console.log(typeof alumno)
console.log(typeof alumna)
console.log(typeof numero11)
console.log(typeof numero22)
console.log('hola'.length)
console.log(alumno.length)

// Object
// Function
// BigInt
// Symbol

// VARIABLES Y CONSTANTES

// var -> ES5
// const, let -> ES6 (Lo recomendable)

const edad = 55

// edad = 22 // Uncaught TypeError: Assignment to constant variable.

let edad2 = 24

edad2 = 18
edad2 = 22

console.log(edad2)

// OPERADORES MATEMÁTICOS

console.log(1 + 2)
console.log(3 - 2)
console.log(2 * 2)
console.log(1 / 2)
console.log(1 % 2) // Op. Residuo
console.log(2 ** 3)

// OPERADORES DE ASIGNACIÓN

const genero = 'femenino'

// OPERADOR DE IGUALDAD Y DESIGUALDAD NO ESTRICTA
// Compara los valores

console.log(1 == 1)
console.log(1 == '1')
console.log(1 != 1) // ! =

// OPERADOR DE IGUALDAD Y DESIGUALDAD ESTRICTA (RECOMENDABLE)
// Compara los valores y los tipo de datos

console.log(1 === 1)
console.log(1 === '1')
console.log(1 !== 1) // ! = =

// OPERADORES DE COMPARACIÓN, siempre devuelven boolean

console.log(8 > 5)
console.log(8 < 5)
console.log(8 >= 5) // > =
console.log(8 <= 5) // < =

// OPERADORES LÓGICOS (AND, OR, NEGACIÓN), devuelve boolean

console.log(true && false) // and
console.log(true || false) // or
console.log(!false) // negación

// OPERADORES DE CADENA (Concatenación)

const saludo = 'Hola '

const nombreCompleto = 'Victor' + ' ' + 'Villazón'

const saludoAmigo = saludo + nombreCompleto + ' tengo ' + 37

console.log(nombreCompleto)
console.log(saludoAmigo)

// TEMPLATE STRINGS

const saludoAmigo2 = `${saludo} ${nombreCompleto} tengo 37`
console.log(saludoAmigo2)

// OPERADOR TERNARIO

const edad1 = 24
const soyMayorOMenor = edad1 > 18 ? 'mayor de edad' : 'menor de edad'
console.log(soyMayorOMenor)

// EJERCICIOS:

// 1. Retorna True si dos strings tienen la misma longitud sino devolver False

const cadena1 = 'codigo'
const cadena2 = 'cadaga'
const cadena3 = 'javascript'

console.log(cadena1.length)
console.log(cadena2.length)

console.log(cadena1.length === cadena3.length)
console.log(cadena1.length === cadena2.length)

// 2. Retornar True si un número es menor que 40 sino devolver False

const numero222 = 85
console.log(numero222 < 40) // false

// 3. Retornar True si un número es menor que 60 sino devolver False

const numero333 = 86
console.log(numero333 < 60) // false

// 4. Retornar True si un numero es par sino devolver False

const numero444 = 5
const numero555 = 6

console.log(numero444 % 2 === 0) // false
console.log(numero555 % 2 === 0) // true

// 5. Retornar True si un numero es impar sino devolver False

const numero666 = 5
const numero777 = 6

console.log(numero666 % 2 !== 0) // true
console.log(numero777 % 2 !== 0) // false

// 6. calcular el area de un triangulo y mostrar su resultado si tenemos los valores base y altura

const base = 10
const altura = 5

const area = (base * altura) / 2

console.log(area)

// 7. (TODO) Almacenar en una constante un número de 3 cifras y mostrar la suma de sus cifras elevada al cubo.

// 8. (TODO) Almacenar en una constante un monto de dinero, luego mostrar cuanto le toca a cada socio según la siguiente tabla:
// SOCIO A = 30%, SOCIO B = 20%, SOCIO C = 60%


// CONDICIONALES (IF)

if (true) {
  // Este bloque se ejecuta solamente si la condición en verdadera(true)
  console.log('¡Me ejecuté!')
}

const numero = 33

const esPar = numero % 2 === 0

if (esPar) {
  console.log('Este número es par')
}

// CONDICIONALES (IF, ELSE)

if (true) {
  // Verdadero
} else {
  // Falso
}

if (esPar) {
  console.log('Este número es par')
} else {
  console.log('Este número es impar')
}

// CONDICIONALES (IF, ELSE IF, ELSE)


/* 
if (true) {
  // Verdadero
} else if (true) {
  // Verdarero
} else if (true) {
  // Verdarero
} else {
  // Se ejecuta si o si
}
*/

const heroe = 'Spiderman'
// const heroe = 'Victor'

if (heroe === 'Batman') {
  console.log('Hola soy Bruce')
} else if (heroe === 'Spiderman') {
  console.log('Hola soy Peter')
} else if (heroe === 'Ironman') {
  console.log('Hola soy Tony')
} else {
 console.log('No soy un heroe aún') 
}

// CONDICIONALES (SWITCH)

switch (heroe) {
  case 'Batman':
    console.log('Hola soy Bruce')
    break
  case 'Spiderman':
    console.log('Hola soy Peter')
    break
  case 'Ironman':
    console.log('Hola soy Tony')
    break
  default:
    console.log('No soy un heroe aún')
}

// ESTRUCTURAS REPETITIVAS

// FOR (Sirve para repetir una o varias instrucciones)

for (let i = 0; i < 5; i = i + 1) {
  console.log(i)
}

// WHILE

let j = 0

while (j < 10) {
  console.log(j)
  // j = j + 1
  j++
}

// DO WHILE

let k = 0

do {
  console.log(k)
  // k = k + 1
  k++
} while (k < 10)

// EJERCICIOS:

// 01. Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido en cada uno de los 6 años? Realice el algoritmo y representan la solución, utilizando el ciclo apropiado.

const incremento = 0.10
const incrementos = 6

// let acumulador = (1500 + (1500 * 0.10))
// console.log(acumulador)

// acumulador = acumulador + (acumulador * 0.10)
// console.log(acumulador)

// acumulador = acumulador + (acumulador * 0.10)
// console.log(acumulador)

// acumulador = acumulador + (acumulador * 0.10)
// console.log(acumulador)

// acumulador = acumulador + (acumulador * 0.10)
// console.log(acumulador)

// acumulador = acumulador + (acumulador * 0.10)
// console.log(acumulador) // 2657.3415000000005

// Respuesta 01

let acumuladorDeSueldo = 1500

for (let i = 1; i <= incrementos; i = i + 1) {
  acumuladorDeSueldo = acumuladorDeSueldo + (acumuladorDeSueldo * 0.10)
}

console.log(acumuladorDeSueldo.toFixed(2))

// Respuesta 02

const salarioInicial = 1500;
const incrementoAnual = 0.10;
const añosTrabajo = 6;
let salarioActual = salarioInicial;

for (let año = 1; año <= añosTrabajo; año++) {
  salarioActual += salarioActual * incrementoAnual;
  console.log(`Salario después del año ${año}: $${salarioActual.toFixed(2)}`);
}
console.log(`Salario después de ${añosTrabajo} años: $${salarioActual.toFixed(2)}`);

/// Respuesta 03

console.log('>>>>>>>>>>>')
function incrementoSueldo(sueldo, añosTrabajo){
  let salarioActual = sueldo;
  const incrementoAnual = 0.10;
  for (let año = 1; año <= añosTrabajo; año++) {
    salarioActual += salarioActual * incrementoAnual;
    console.log(`Salario después del año ${año}: $${salarioActual.toFixed(2)}`);
  }
  console.log(`Salario después de ${añosTrabajo} años: $${salarioActual.toFixed(2)}`);
  // let y1 = sueldo + (sueldo*0.1);
  // let y2 = y1 + (y1*0.1);
  // let y3 = y2 + (y2*0.1);
  // let y4 = y3 + (y3*0.1);
  // let y5 = y4 + (y4*0.1);
  // let y6 = y5 + (y5*0.1);
  // return "El Primer año gano:" + y1 + ", el segundo año gano:"+ y2 + ",el tercer año gano:"+ y3 + ",el cuarto año gano:" +y4 + ", el quinto año gano: "+ y5.toFixed(2) + ", el sexto año gano: "+ y6.toFixed(2);
}
console.log(incrementoSueldo(1500, 3));


// EJERCICIOS PARTE 2

// 1. Determinar si la edad de una persona es mayor de edad o menor de edad mostrando 'Mayor de edad' o 'Menor de edad'
// 2. Retornar un saludo en tres diferentes lenguajes:
//    - si es español mostrará 'Hola'
//    - si es inglés mostrará 'Hello'
//    - si es aimara mostrará 'kamisaraki'
// 3. Si un numero es divisible entre 3 y 5 devolver 'fizzbuzz'
//    Si un numero es divisible entre 3 devolver 'fizz'
//    Si un numero es divisible entre 5 devolver 'buzz'
//    De lo contrario devolver el mismo número
// 4. Retornar true si un numero es primo sino devolver false
//    Pista: un numero primo es divisible por sí mismo y por 1
// 5. Devolver un valor que se incremente de dos en dos y devuelva los menores a 10

// FUNCIONES (Sirven para reutilizar código)

// Definiendo una función

function nombreDeLaFuncion() {
  // Cuerpo de la función y aquí va la lógica a ejecutar
}
nombreDeLaFuncion()

// Funciones sin parámetros sin retorno

function imprimirMiNombre() {
  console.log('Hola soy Victor')
  console.log('Y soy Frontend')
}

imprimirMiNombre()

// Funciones con parámetros sin retorno

function imprimirUnNombre(nombre) {
  console.log('Hola soy ' + nombre)
}

imprimirUnNombre()
imprimirUnNombre('Victor')

// EJERCICIOS

// 1. Usando funciones determinar si la edad de una persona es mayor de edad o menor de edad mostrando 'Mayor de edad' o 'Menor de edad'

// Funciones sin retorno de valor

function esMayorOMenorDeEdad(edad) {
  if (edad >= 18) {
    console.log('Mayor de edad')
  } else {
    console.log('Menor de edad')
  }
}

esMayorOMenorDeEdad(37)
esMayorOMenorDeEdad(7)
esMayorOMenorDeEdad(3)

// Funciones con retorno de valor

function esMayorOMenorDeEdadConRetorno(edad) {
  if (edad >= 18) {
    return 'Mayor de edad'
  } else {
    return 'Menor de edad'
  }
}

const resultado = esMayorOMenorDeEdadConRetorno(35)

console.log(resultado)

console.log(esMayorOMenorDeEdadConRetorno(15))

//

function esMayorOMenorDeEdadConRetorno2(edad) {
  let resultado = ''
  if (edad >= 18) {
    resultado = 'Mayor de edad'
  } else {
    resultado = 'Menor de edad'
  }
  return resultado
}

console.log(esMayorOMenorDeEdadConRetorno2(19))


// PROMPT para leer valores del usuario

// const tuEdad = prompt('Ingresa tu edad')

// console.log(tuEdad)