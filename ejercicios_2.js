//Ejercicio 5
const intercambiar = (cadena = '') => {
  if (!cadena) return console.warn('Favor de ingresar una cadena de texto')

  let cadenaInvertida = ''
  let controlador = cadena.length

  for (let i = 0; i <= cadena.length; i++) {
    cadenaInvertida += cadena.charAt(controlador)
    controlador--
  }
  return console.info(cadenaInvertida)
}
//Pruebas ejercicio 5
console.log('Pruebas Ejercicio 5')
intercambiar('Hola amiguitos')
intercambiar()
console.log('--------------------------------------------')

//Ejercicio 6
const contar= (cadena = '',palabra = undefined) => {
  if (!cadena) return console.warn('Favor de ingresar una cadena de texto')
  if (palabra === undefined || typeof palabra != 'string') return console.warn('Favor de ingresar el segundo parámetro de la manera correcta')

  let reps = 0

  arrCadena = cadena.split(' ')
  arrCadena.forEach(elemento => {
    if (elemento === palabra) reps++
  });

  return console.info(`La cantidad de veces que se repite ${palabra} es ${reps}`)
}
//Pruebas ejercicio 6
console.log('Pruebas Ejercicio 6')
contar('perro Perro gato Gato perro','perro')
contar()
contar('perro Perro gato Gato perro','perros')
contar('perro Perro gato Gato perro',5)
contar('perro Perro gato Gato perro')
console.log('--------------------------------------------')


//Ejercicio 7
const palindromo = (cadena = '') => {
  if (!cadena) return console.warn('Favor de ingresar una cadena de texto')

  arrCadena = cadena.split('')
  let i2 = cadena.length-1
  let checador = undefined
  
  for (let i = 0; i < cadena.length; i++){
    (arrCadena[i] === arrCadena[i2])
      ? checador = true
      : checador = false
    i2--
  } 

  (checador) 
    ? console.info(`La cadena ${cadena} es un palíndromo`) 
    : console.info(`La cadena ${cadena} no es un palíndromo`)
}
//Pruebas Ejercicio 7
console.log('Pruebas Ejercicio 7')
palindromo('salas')
palindromo()
palindromo('patatas')
console.log('--------------------------------------------')

//Ejercicio 8
const eliminar = (cadena = '',eliminado = undefined) => {
  if (!cadena) return console.warn('Favor de ingresar una cadena de texto')
  if (eliminado === undefined || typeof eliminado != 'string') return console.warn('Favor de ingresar correctamente la subcadena a eliminar')

  let nuevaCadena = cadena.split(eliminado).join('')

  return console.log(nuevaCadena)

}
//Pruebas Ejercicio 8
console.log('Pruebas Ejercicio 8')
eliminar('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xyz')
eliminar()
eliminar('xyz1, xyz2, xyz3, xyz4 y xyz5')
eliminar('xyz1, xyz2, xyz3, xyz4 y xyz5',8)
