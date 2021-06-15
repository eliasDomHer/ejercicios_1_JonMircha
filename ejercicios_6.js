//Ejercicio 18
const contarVocalesConsonantes = (cadena = '') => {
  if (!cadena || typeof cadena !== 'string') return console.warn('Favor de ingresar correctamente la cadena')

  let vocales = 0, consonantes = 0,
    arregloCadena = cadena.replace(/ /g,'').split(''),
    vocal = /a|e|i|o|u/i
    numero =/[1-9]/

  arregloCadena.forEach(letra => {
    if (vocal.test(letra)) {
      
      vocales++
      } else if (!vocal.test(letra) && !numero.test(letra)) consonantes++
  });

  return console.info(`Su cadena consta de ${vocales} vocales y ${consonantes} consonantes`)

}
//Pruebas Ejercicio 18
console.info('Pruebas Ejercicio 18 --------------------------------------------------')
contarVocalesConsonantes('Hola mundo')
contarVocalesConsonantes()
contarVocalesConsonantes('aAa Bb Oo zZZ')
contarVocalesConsonantes('123Hola')
console.info('-----------------------------------------------------------------------')

//Ejercicio 19
const validarNombre = (nombre = '') => {
  if (!nombre || typeof nombre !== 'string') return console.warn('Favor de ingresar su nombre')

  let arregloNombre = nombre.split(' '),
    nombreValido = true,
    caracteresValidos = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre)
  
  for (elemento of arregloNombre) {
    if (typeof elemento !== 'string' || elemento.length <= 2 || !caracteresValidos) nombreValido = false
  }

  return (nombreValido) 
    ? console.log(`${nombre} es un nombre VÁLIDO`)
    : console.log(`${nombre} es un nombre INVÁLIDO`)
}
//Pruebas Ejercicio 19
console.info('Pruebas Ejercicio 19 --------------------------------------------------')
validarNombre('Jonathan MirCha')
validarNombre()
validarNombre('El perro se ahogó')
validarNombre('Tú y yo')
validarNombre('Elías Isaac Domínguez Hernández06')
console.info('-----------------------------------------------------------------------')

//Ejercicio 20
const validarCorreo = (correo = '') => {
  if (!correo || typeof correo !== 'string') return console.warn('Favor de ingresar su correo')

  let patronValido = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(correo)

    return (patronValido)
      ? console.info(`${correo} es un correo VÁLIDO`)
      : console.error(`${correo} es un correo INVÁLIDO`)
}
//Pruebas Ejercicio 20
console.info('Pruebas Ejercicio 20 --------------------------------------------------')
validarCorreo('descafi116@gmail.com')
validarCorreo()
validarCorreo('Lotzo.hola@gmail.qwerty')
validarCorreo('ali.com@gmail')
validarCorreo(123)
validarCorreo('jonathan.mirchagmail.com')
console.info('-----------------------------------------------------------------------')