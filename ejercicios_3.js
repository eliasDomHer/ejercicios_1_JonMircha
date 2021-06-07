//Ejercicio 9
const aleatorio = (min = 0,max = 0) => {
  if (!max) return console.warn('Ingrese el máximo límite')
  if (!min) return console.warn('Ingrese el mínimo límite')

  return console.log(Math.round(Math.random() * (max - min) + min))
}
//Pruebas Ejercicio 9
console.info('Pruebas Ejercicio 9')
aleatorio(500,600)
aleatorio('',100)
aleatorio()
console.info('------------------------------------------------------------------')

//Ejercicio 10
const capicua = (numero = 0) => {
  if (!numero || typeof numero !== 'number') return console.warn('Favor de ingresar correctamente el número')

  let numCadena = numero.toString(),
    numReverso = numCadena.split('').reverse().join('')

  return (numCadena === numReverso) ? console.log(`El numero ${numero} es capicúa`) : console.log(`El numero ${numero} no es capicúa`)
}
//Pruebas Ejercicio 10
console.info('Pruebas Ejercicio 10')
capicua(2002)
capicua(1234)
capicua()
console.info('------------------------------------------------------------------')

//Ejercicio 11
const factorial = (numero = 0) => {
  if (!numero || typeof numero !== 'number' || numero < 0) return console.warn('Favor de ingresar correctamente el número')

  let fact = 1

  for (let i = 1; i <= numero; i++){
    fact *= i
  }

  return console.log(`El factorial de ${numero} es ${fact}`)
}
//Pruebas Ejercicio 11
console.info('Pruebas Ejercicio 11')
factorial(5)
factorial(4)
factorial()
console.info('------------------------------------------------------------------')