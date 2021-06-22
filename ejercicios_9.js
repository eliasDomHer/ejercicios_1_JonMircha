//Ejercicio 27
const GENEROS_ACEPTADOS = [
  "Action",
  "Adult",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "Game-Show",
  "History",
  "Horror",
  "Musical",
  "Music",
  "Mystery",
  "News",
  "Reality-TV",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Talk-Show",
  "Thriller",
  "War",
  "Western",
];
class Pelicula {
  constructor({id, titulo, director, año, origen, genero, calificacion}) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.año = año;
    this.origen = origen;
    this.genero = genero;
    this.calificacion = calificacion;

    this.validarObjeto(titulo);
    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(año);
    this.validarOrigen(origen);
    this.validarGeneros(genero);
    this.validarCalificacion(calificacion);
  }

  validarObjeto(titulo) {
    for (let i = 0; i < 7; i++){
      if (Object.entries(this)[i][1] === undefined) 
        return console.error(`El objeto : ${titulo} está vacío`);
    }

    return console.info(`Se ha registrado la pelicula "${titulo}"`)
  }

  validarCadena(prop, valor) {
    if (!valor) return console.warn(`${prop} "${valor}" está vacío`);

    if (typeof valor !== 'string') return console.error(`${valor} no fue ingresado como cadena`);

    return true;
  }

  validarArreglo(prop, valor) {
    if (!valor) return console.warn(`${prop} "${valor}" está vacío`)

    if (!(valor instanceof Array)) return console.error(` ${valor} no es un arreglo`);

    return true;
  }

  validarIMDB(id) {
    if (this.validarCadena("IMDB id",id))
      if (/^[a-z]{2}[0-]{7}$/.test(this.id))
        return console.warn(`IMDB id "${id}" no es válido, debe tener 9 caracteres, los 2 primeros letras minúsculas y los restantes números`);
  }

  validarTitulo(titulo) {
    if (this.validarCadena("Título", titulo))
      if (titulo.length > 100)
        return console.warn(`El titulo "${titulo}" no es válido, debe tener menos de 100 caracteres`);
  }

  validarDirector(director) {
    if (this.validarCadena("Director", director))
      if (director.length > 50) 
        return console.warn(`El director "${director}" no es válido, debe tener menos de 50 caracteres`);
  }

  validarEstreno(año) {
    if (typeof año === 'number') {
      if (!(/^[0-9]{4}$/.test(año)))
        return console.warn(`El año de estreno "${año}" no es válido, debe ser un número de 4 dígitos entero`);
      } else return console.error('El año debe ser ingresado como tipo numérico')
      
  }

  validarOrigen(origen) {
    if (!(this.validarArreglo("País de grabación", origen))) return console.warn(`El país/es de grabación "${origen}" no válido, debe ser ingresado como arreglo`);
  }

  validarGeneros(genero) {
    if (!(this.validarArreglo("G+eneros", genero))) return console.warn(`El/los géneros "${genero}" no válido, debe ser ingresado como arreglo`)

    for (let i = 0; i < genero.length; i++) {
      if (GENEROS_ACEPTADOS.indexOf(genero[i]) === -1) {
        return console.warn(`El genero ${genero[i]} no está dentro de los géneros aceptados`)
      }
    }
  }

  validarCalificacion(calificacion) {
    if (typeof calificacion === 'number') {
      return (calificacion < 0 || calificacion > 10) ? console.warn('La calificacion debe estar en un rango de 0 a 10') : this.calificacion = calificacion.toFixed(1);
    } else return console.error('La calificacion debe ser ingresada como tipo numérico')
  }

  static generosAceptados() {
    return console.log(GENEROS_ACEPTADOS);
  }


  fichaTecnica() {
    return console.info(`La película "${this.titulo}" con el ID "${this.id}", dirigida por "${this.director}", producida en el año "${this.año}" los países de "${this.origen}" es del género "${this.genero}" y obtuvo una calificación de "${this.calificacion} estrellas"`)
  }

}

const arregloPeliculas = [
  new Pelicula({id: 'lo1901234', 
  titulo: 'League of Legends',
  director: 'Zac Efron',
  año: 2029,
  origen: ['Corea del Sur', 'Francia'],
  genero: ['Action', 'Adventure'],
  calificacion: 9.87}),

  new Pelicula({id: 'wz9977551',
  titulo: 'Warzone',
  director: 'Chespirito',
  año: 2018,
  origen: ['Japón', 'Australia'],
  genero: ['War', 'History'],
  calificacion: 1}),

  new Pelicula({id: 'av1234567', 
  titulo: 'Avengers', 
  director: 'Tarantino', 
  año: 2020, 
  origen: ['México', 'Estados Unidos'], 
  genero: ['Sci-Fi'], 
  calificacion: 9.5}),

  new Pelicula({id: 'tt1234567',
  titulo: 'Eskere',
  director: 'Mihael',
  año: 1978,
  origen: ['Azteca', 'Peru'],
  genero: ['Crime', 'Drama'],
  calificacion: 6})
];

arregloPeliculas.forEach(pelicula => {
  pelicula.fichaTecnica();
  console.log('------------------------------------------------')
})