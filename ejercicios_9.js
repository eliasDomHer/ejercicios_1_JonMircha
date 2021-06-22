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
  constructor(id, titulo, director, año, origen, genero, calificacion) {
    console.log('Se ha registrado una nueva película');
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.año = año;
    this.origen = origen;
    this.genero = genero;
    this.calificacion = calificacion;
    this.validar = true;
  }
  

  static generosAceptados() {
    return console.log(GENEROS_ACEPTADOS);
  }

  validacion() {
    for (let i = 0; i < 7; i++){
      if (Object.entries(this)[i][1] === undefined) {
        this.validar = false;
        return console.error(this.titulo,': Favor de llenar su objeto');
      }
    }

    let imdbValido = /^[a-z]{2}[0-9]{7}$/i
    if (!imdbValido.test(this.id)) {
      this.validar = false;
      return console.warn(this.titulo,': Recuerde ingresar el "id" con dos números letras seguidas de 7 números');
    }

    if (this.titulo.length > 100) {
      this.validar = false;
      return console.warn(this.titulo,': El título no debe ser mayor de 100 Caracteres');
    }

    if (this.director.length > 50) {
      this.validar = false;
      return console.warn(this.titulo,': El director no debe ser mayor de 50 Caracteres');
    }

    if (this.año.length && typeof this.año !== 'number') {
      this.validar = false;
      return console.warn(this.titulo,': El año de estreno debe ser un número de 4 dígitos');
    }

    if (!(this.origen instanceof Array)) {
      this.validar = false;
      return console.warn(this.titulo,': El lugar/es de origen debe ser ingresado como un arreglo');
    }

    if (!(this.genero instanceof Array)) {
      this.validar = false;
      return console.warn(this.titulo,': Los géneros de la pelicula deben ser ingresados como un arreglo');
    }

    for (let i = 0; i < this.genero.length; i++) {
      if (GENEROS_ACEPTADOS.indexOf(this.genero[i]) === -1) {
        this.validar = false;
        return console.warn(this.titulo,`: El genero ${this.genero[i]} no está dentro de los géneros aceptados`)
      }
    }

    this.calificacion = this.calificacion.toFixed(1)
    if (this.calificacion > 10 || this.calificacion < 0) {
        this.validar = false;
        return console.warn(this.titulo,': La calificación debe ser en un rango de 0 a 10 y con posibilidad de un decimal')
    }   

    return console.info(`"${this.titulo}" ha sido validada correctamente, puede verificar su ficha técnica más adelante`);
  }

  fichaTecnica() {
    return (this.validar === true) 
      ? console.info(`La película "${this.titulo}" con el ID "${this.id}", dirigida por "${this.director}", producida en el año "${this.año}" los países de "${this.origen}" es del género "${this.genero}" y obtuvo una calificación de "${this.calificacion} estrellas"`)
      : console.error(`La película "${this.titulo}" no fue registrada correctamente, favor de verificar`)
  }

}

const arregloPeliculas = [
  new Pelicula('lo1901234', 
  'League of Legends',
  'Zac Efron',
  2021,
  ['Corea del Sur','Francia'],
  ['Action', 'Adventure'],
  9.87),

  new Pelicula('wz9977551',
  'Warzone',
  'Chespirito',
  2018,
  ['Japón','Australia'],
  ['War','History'],
  11),

  new Pelicula('av1234567', 
  'Avengers', 
  'Tarantino', 
  2020, 
  ['México','Estados Unidos'], 
  ['Comics','Sci-Fi'], 
  9.5)
];

arregloPeliculas.forEach(pelicula => {
  pelicula.validacion();
  pelicula.fichaTecnica();
  console.log('------------------------------------------------')
})