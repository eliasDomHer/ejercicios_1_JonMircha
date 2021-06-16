//Ejercicio 24
const sortArray = (array = undefined) => {

  if (!(array instanceof Array)) return console.warn('Ingrese de manera correcta su arreglo');
  for (num of array) {
    if (typeof num !== 'number') return console.warn('Verifique que todos los elementos de su arreglo sean de tipo numérico');
  }
  if (array.length === 0) return console.warn('El arreglo está vacío')

  return console.log(`Su arreglo ascendente es: [${array.sort((a,b)=> a-b)}] y su arreglo descendente es: [${array.sort((a,b)=> a-b).reverse()}]`) 

}
//Pruebas Ejercicio 24
console.info('Pruebas Ejercicio 24')
sortArray(['a',1,2,3,4])
sortArray([])
sortArray()
sortArray([7,5,8,6,7,2])
console.log('-----------------------------------------')

//Ejercicio 25
const removeDuplies = (array = undefined) => {

  if (!(array instanceof Array)) return console.warn('Ingrese de manera correcta su arreglo');
  if (array.length === 0) return console.warn('El arreglo está vacío');
  
  let removedArray = array.filter((item,index)=>{
    return array.indexOf(item) === index;
  })
  
  return console.log(removedArray)

}
//Pruebas Ejercicio 25 
console.info('Pruebas Ejercicio 25')
removeDuplies([1,2,6,1,2,5,9,'33','33'])
removeDuplies()
removeDuplies([])
console.log('-----------------------------------------')

//Ejercicio 26
const promedio = (arreglo = undefined) => {

  if (!(arreglo instanceof Array)) return console.warn('Ingrese de manera correcta su arreglo');
  for (num of arreglo) {
    if (typeof num !== 'number') return console.warn('Verifique que todos los elementos de su arreglo sean de tipo numérico');
  }
  if (arreglo.length === 0) return console.warn('El arreglo está vacío')

  let prom = 0
  for (number of arreglo) {
    prom += number
  }

  return console.log(`El promedio de: [${arreglo}] es: ${prom/arreglo.length}`)
}
//Pruebas Ejercicio 26
console.log('Pruebas Ejercicio 26')
promedio([5,5,5,5,5])
promedio([9,8,7,6,5,4,3,2,1,0])
promedio()
promedio([])
console.log('-----------------------------------------')