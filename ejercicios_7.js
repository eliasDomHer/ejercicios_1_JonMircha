//Ejercicio 21
const elevacion = (arreglo = null) => {

  if (!arreglo || typeof arreglo !== 'object') return console.warn('Ingrese de manera correcta su arreglo');

  for (elemento of arreglo) {
    if (typeof elemento !== 'number') return console.warn('Verifique que todos los elementos de su arreglo sean de tipo numérico');
  }

  let arregloElevado = arreglo.map(function(num) {
    return num**2;
  })

  return console.log(`Su arreglo: [${arreglo}] elevado al cuadrado es: [${arregloElevado}]`);

}
//Pruebas Ejercicio 21
console.info('Pruebas Ejercicio 21')
elevacion([1, 2, 4]);
elevacion();
elevacion('Hola');
elevacion([1,2,'a']);
console.log('------------------------------------------------------------------')

//Ejercicio 22
const limites = (arreglo = null) => {
  if (!arreglo || typeof arreglo !== 'object') return console.warn('Ingrese de manera correcta su arreglo');
  for (elemento of arreglo) {
    if (typeof elemento !== 'number') return console.warn('Verifique que todos los elementos de su arreglo sean de tipo numérico');
  }

  let arregloLimite = [Math.max(...arreglo),  Math.min(...arreglo)];

  return console.log(`Los límites de: [${arreglo}] son: [${arregloLimite}]`);

}
//Pruebas Ejercicio 22
console.info('Pruebas Ejercicio 22')
limites([1, 4, 5, 99, -60]);
limites();
limites([1, 2, '3', 7]);
console.log('------------------------------------------------------------------')

//Ejercicio 23
const separacionParImpar = (arreglo = null) => {

  if (!arreglo || typeof arreglo !== 'object') return console.warn('Ingrese de manera correcta su arreglo');
  for (elemento of arreglo) {
    if (typeof elemento !== 'number') return console.warn('Verifique que todos los elementos de su arreglo sean de tipo numérico');
  }

  let arregloImpares = [], arregloPares = []

  arreglo.map(function(num) {
    (num % 2 === 0)
      ? arregloPares.push(num)
      : arregloImpares.push(num)
  })

  return console.log(`La separación de su arreglo [${arreglo}] en pares es: [${arregloPares}] y en impares es: [${arregloImpares}]`)
}
//Prueba Ejercicio 23
console.info('Pruebas Ejercicio 23')
separacionParImpar([1,2,3,4,5,6,7,8,9,0])
separacionParImpar()
separacionParImpar([1,2,3,'a'])
console.log('------------------------------------------------------------------')