//Ejercicio 15
const cambioDeBase = (numero = 0, base = 0) => {

  if (!numero || typeof numero !== 'number') return console.log('Favor de ingresar su número correctamente')
  if (!base || typeof base !== 'number') return console.warn('Favor de ingresar su base correctamente')

  if (base !== 2 && base !== 10) return console.warn('Favor de ingresar sólo base binaria o decimal "2 ó 10"')

  if (base === 10) {

    let cociente = numero/2
    let arregloDecimal = [numero % 2]

    while (cociente > 0.5) {

        arregloDecimal.push(Math.floor(cociente % 2))
        cociente = cociente / 2
      }

      let numeroBinario = parseInt(arregloDecimal.reverse().join(''))
      return console.log(`El número ${numero} base 10 es equivalente a ${numeroBinario} base 2`)
    }

    if (base === 2) {

      let checadorBinario = true
      arregloBinario = numero.toString().split('').reverse()
      arregloBinario.forEach(num => {
        if (num !== '0' && num !== '1') checadorBinario = false
      });

      if (checadorBinario) {

        let numeroDecimal = 0

        for (let i = 0; i < arregloBinario.length; i++) {

          arregloBinario[i] = parseInt(arregloBinario[i]) * (2**i)
          numeroDecimal += arregloBinario[i]
        }

        return console.log(`El número ${numero} base 2 es equivalente a ${numeroDecimal} base 10`)
      } else return console.info('Su número no fue ingresado en binario')
    }
  }
//Pruebas Ejercicio 15 (base 10)
console.log('Pruebas Ejercicio 15')
cambioDeBase()
cambioDeBase(4,10)
cambioDeBase(9,10)
cambioDeBase(16,10)
cambioDeBase(79,10)
//Pruebas Ejercicio 15 (base 2)
cambioDeBase(10110,2)
cambioDeBase(110,2)
cambioDeBase(99,2)
cambioDeBase(102,2)
cambioDeBase(10110,5)
console.log('------------------------------------------------------------------------------------')

//Ejercicio 16
const rebaja = (cantidad = 0,descuento = 0) => 
  (!cantidad || !descuento || typeof cantidad !== 'number' || typeof descuento !== 'number' )

    ? console.warn('Favor de ingresar la cantidad y el porcentaje de descuento correctamente')

    : console.log(`$${cantidad} con un descuento del ${descuento}% es: $${cantidad*((100-descuento)/100)}`)
//Pruebas Ejercicio 16
console.info('Pruebas Ejercicio 16')
rebaja()
rebaja('','')
rebaja(100)
rebaja(1000,20)
rebaja(5000,10)
console.log('------------------------------------------------------------------------------------')

//Ejercicio 17
const reloj = (año = 0, mes = 0, dia = 0) => {
  if (!año) return console.warn('Favor de ingresar el año')
  if (!mes) return console.warn('Favor de ingresar el mes')
  if (!dia) return console.warn('Favor de ingresar el dia')

  let fecha = new Date(`${mes}-${dia}-${año}`)
  let tiempo = (Date.now()-fecha)/(3.154e10)
  return (tiempo > 0)
    ? console.log(`Han pasado ${Math.trunc(tiempo)} años desde ${fecha.toDateString()} hasta hoy`)
    : console.log(`Faltan ${Math.trunc(tiempo*-1)} años para llegar a ${fecha.toDateString()}`)
}
//Pruebas Ejercicio 17
console.info('Pruebas Ejercicio 17')
reloj(1984,4,23)
reloj(2030,5,12)
reloj()
reloj(2020)
reloj(2020,4)
console.log('------------------------------------------------------------------------------------')