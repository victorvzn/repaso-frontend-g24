console.log('Hola JS')

// Arrays

const numero = 399
const cadena = 'Victor'
const esMayor = true

// Un arreglo acepta elementos de cualquier tipo: cadena, número, boolean, undefined, null, arrays, objetos, etc

// DEFINIENDO UN ARRAY -> []

const listaDeValores = [1, 2, 3, 'Victor', 'Villazón', true]

console.log(listaDeValores)

// Lectura de los elementos de un arreglo (se leen por su indice que empieza por 0)

console.log(listaDeValores[0]) // 1
console.log(listaDeValores[3]) // Victor
console.log(listaDeValores[5]) // true
console.log(listaDeValores[100]) // Undefined

// Escritura en un arreglo

listaDeValores[2] = 99

console.log(listaDeValores)

// Insertar nuevos elementos en un arreglo (push)

listaDeValores.push('javascript')

console.log(listaDeValores)

// Remover elementos del final del arreglo

listaDeValores.pop()

console.log(listaDeValores)

// Eliminar un elemento en una posición específica

// VALOR ACTUAL DE LISTADEVALORES = [1, 2, 99, 'Victor', 'Villazón', true]

listaDeValores.splice(4, 1)

console.log(listaDeValores)

// Obtener el tamaño de una arreglo

console.log('bienvenido'.length)
console.log(listaDeValores.length)


// METODOS DE ARREGLOS

// Método INCLUDES, nos indica si el valor que se pasa como parámetro se encuentra en el arreglo y devuelve un booleano

const numeros = [1, 2, 3, 4, 5]

console.log(numeros.includes(3)) // true
console.log(numeros.includes(99)) // false

// Método MAP, nos ayuda a transformar un arreglo devolviendo siempre la misma longitud del arreglo

const numeroPares = [2, 4, 6, 8]

console.log(
  numeroPares.map(function (numero) {
    return numero * 2
  })
)

// Método FILTER, nos ayuda a ubicar uno o varios elementos dentro de un arreglo usando una condición y devuelve un arreglo con los resultados

const languages = ['javascript', 'php', 'python', 'C', 'c++', 'java', 'python']

console.log(
  languages.filter(function (language) {
    // return language === 'python' // ['python', 'python']
    // return language.includes('python')
    return language.toLowerCase().includes('c') // ['javascript', 'C', 'c++']
  })
)