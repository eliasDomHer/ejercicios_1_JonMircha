//Ejercicio 12
const primo = (numero = 0) => {
  if (!numero || typeof numero !== 'number') return console.warn('Favor de ingresar un numero')

  if (numero === 0 || numero === 1 || numero === 4) return console.log(`${numero} no es primo`)

  for (let i = 2; i < numero/2; i++){
    if (numero % i === 0) return console.log(`${numero} no es primo`)
  }
  return console.log(`${numero} es primo`)
}
//Pruebas Ejercicio 12
console.log('Pruebas Ejercicio 12')
primo(7)
primo(9)
primo(4)
primo('')
console.log('----------------------------------------------------------------------')

//Ejercicio 13
const parONo = (num) => {
  if (!num || typeof num !== 'number') return console.warn('Favor de ingresar un numero')

  return (num % 2 === 0)
    ? console.log(`${num} es par`)
    : console.log(`${num} no es par`)
}
//Pruebas Ejercicio 13
console.log('Pruebas Ejercicio 13')
parONo(29)
parONo()
parONo('')
parONo(10)
console.log('----------------------------------------------------------------------')

//Ejercicio 14
const convertir = (num = 0, escala = '') => {
  if (!num || typeof num !== 'number') return console.warn('Favor de ingresar sus grados como número')
  if (!escala ) return console.warn('Favor de ingresar su escala')
  if (escala !== 'F' && escala !== 'C') return console.warn('Favor de ingresar su escala como "F" o "C"')

  if (escala === 'C') {
    let numConvertido = (num*9/5)+32
    return console.log(`Sus ${num}°C son equivalentes a ${numConvertido}°F`)
  }

  if (escala === 'F') {
    let numConvertido = (num-32)*5/9
    return console.log(`Sus ${num}°F son equivalentes a ${numConvertido}°C`)
  }
}
//Prueba Ejercicio 14
console.log('Pruebas Ejercicio 14')
convertir(10,'F')
convertir(10)
convertir(30,'C')
convertir('F')
convertir(50,'A')
console.log('----------------------------------------------------------------------')