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

// 3. Retornar True si un número es menor que 60 sino devolver False

// 4. Retornar True si un numero es par sino devolver False

// 5. Retornar True si un numero es impar sino devolver False

// 6. calcular el area de un triangulo y mostrar su resultado si tenemos los valores base y altura
