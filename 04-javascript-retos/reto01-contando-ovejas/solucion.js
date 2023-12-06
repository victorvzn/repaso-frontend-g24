/*
Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.
*/

export default function contarOvejas(ovejas) {
  return ovejas.filter(
    function(oveja) {
      const nameLowered = oveja.name.toLowerCase()

      const isRedColor = oveja.color === 'rojo'
      const hasLetterN = nameLowered.includes('n')
      const hasLetterA = nameLowered.includes('a')

      return isRedColor && hasLetterN && hasLetterA
    }
  )
}

// AND -> &&