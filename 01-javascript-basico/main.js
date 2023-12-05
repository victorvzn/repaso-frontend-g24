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

