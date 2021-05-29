function size(string) {

  if (typeof string === 'string') {

    return string.length
    
  } else {
    return 'Favor de ingresar una cadena'
  }

}

function cut(string,cutNum) {

  if (typeof string === 'string') {

    if (typeof cutNum === 'number') {

      return string.slice(0,cutNum)

    } else {
      return 'Favor de ingresar un número para cortar la cadena'
    }

  } else {
    return 'Favor de ingresar una cadena'
  }

}

function toArr(string,sign) {

  if (typeof string === 'string') {

    return string.split(sign)

  } else {
    return 'Favor de ingresar una cadena'
  }

}

function repeat(string,reps) {

  if (typeof string === 'string') {
    if (typeof reps === 'number') {

      let stringF = ''
      for (let i = 0; i < reps; i++) {

        stringF += `${string} `

      }
      return stringF

    } else {
      return 'Favor de ingresar una cadena'
    }
  } else {
    return 'Favor de ingresar una cadena'
  }

}

console.log('Prueba ejercicio 1:',size('Hola Mundo'))
console.log('Prueba ejercicio 2:',cut('Holamundo',4))
console.log('Prueba ejercicio 3:',toArr('Hola como estas',' '))
console.log('Prueba ejercicio 4:',repeat('Eskeler',3))