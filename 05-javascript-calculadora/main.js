// console.log('Hola JS!')

let numeroActual = 0
let operador = ''
let operando = ''

const inputDisplay = document.querySelector('.inputDisplay')

console.log(inputDisplay)

const buttons = document.querySelectorAll('button')

console.log(buttons)

buttons.forEach(function (button) {
  // console.log(button)
  button.addEventListener('click', function(event) {
    // console.log('Click!')
    const buttonText = event.target.textContent
    // console.log(buttonText)

    if ('+-*'.includes(buttonText)) {
      // console.log('PResione la operación', buttonText)
      // Asignamos el operador actual
      operador = buttonText
      operando = Number(numeroActual)
      numeroActual = '0'
    } else if (buttonText === '=') {
      // Aquí realizo las opraciones matemáticas en base al numero actual y el operando
      if (operador === '+') {
        numeroActual = Number(operando) + Number(numeroActual)
      } else if (operador === '-') {
        numeroActual = Number(operando) - Number(numeroActual)
      } else if (operador === '*') {
        numeroActual = Number(operando) * Number(numeroActual)
      }
    } else if (buttonText === 'AC') {
      numeroActual = '0'
      operador = ''
      operando = ''
    } else {
      // Cuando hemos presionado los números
      numeroActual = numeroActual + Number(buttonText)
    }

    inputDisplay.value = numeroActual
  })
})