// Creamos un Objeto persona
function persona (Nombre,Age,Gender,Interest) {
    this.Nombre = Nombre 
    this.Age = Age
    this.Gender = Gender
    this.Interest = Interest
}
const usuario1 = new persona(['Dayhania','Obando'],20,'F',['Trabajar','Estudiar'])
const usuario2 = new persona(['Pedro','Martinez'],26,'M',['Viajar','Estudiar'])

//Como crear un funcion que herede las propiedades del padre
function Estudiantes (Nombre,Age,Gender,Aula) {
    this.datos = persona
    this.datos(Nombre,Age,Gender)
    this.Aula = Aula
}
//Estudiantes esta heredando de persona
Estudiantes.prototype = new persona()
Estudiantes.prototype.constructor = Estudiantes

// Como agregar metodos a los objetos heredados
Estudiantes.prototype.saludo = function() {
    console.log(`Hola soy un estudiante del Aula: ${this.Aula}`)
}
const estudiante1 = new Estudiantes(['Lucia','Cruz'],23,'F','A-II-4')
estudiante1.saludo()

//Clases en JavaScript ==> Es igual a una funcion constructora
class Persona {
    constructor(Nombre,Apellido,Edad){
        this.Nombre = Nombre
        this.Apellido = Apellido
        this.Edad = Edad
        this.Datos = `Mi nombre es: ${Nombre} ${Apellido}`
    }
    // Para agregar metodos deben estar fuera del constructor
    helloWorld(){
        console.log('Hola Mundo')
    }
}
Persona.prototype.saludar = function () {
    console.log('Hola un gusto en conocerte, nos pondremos en contacto pronto...')
}
// Guardamos los datos que cuelguen de una varible
const Juan = new Persona('Juan','Martinez',33)
const Dayhania = new Persona('Dayhania','Obando',22)

//como aplicar la herencia en clases 
class teacher extends Persona{
    constructor(Nombre,Apellido,Edad,Materia){
        super(Nombre,Apellido,Edad)
        this.Materia = Materia
    }
    // Sobreescritura de metodos
    helloWorld(){
        console.log('Este mensaje esta sobreescrito y herendando del padre')
    }

    //Grupo de pertenencia y metodo getter (get)
    get MateriasImpartacion(){
        return this.Materia
    }
}
const Gustavo = new teacher('Gustavo','Cruz',34,['Calculo I','Calculo II'])
const Ana = new teacher('Ana','Padia',26,['Sociología','Cultura de paz'])
console.log(Gustavo.MateriasImpartacion)
console.log(Ana.MateriasImpartacion)

// Otra forma de usar metodo getter
const Intervalo = {
    valorMinimo: 7,
    valorMaximo: 37,
    get obtenerIntervalo () {
        let contenidos = []
        for (let i = this.valorMinimo; i <= this.valorMaximo; i++) {
            contenidos.push(i)
        }
        return contenidos
    },
    set valoresObtenidos(arrayValores){
        arrayValores.sort()
        this.valorMinimo = arrayValores[0]
        this.valorMaximo = arrayValores[arrayValores.length -1]        
    }
}
let resultado = Intervalo.obtenerIntervalo
console.log(resultado)
const send = Intervalo.valoresObtenidos

//Creamo un nuevo array
const frutas = ['Guidas','Manzana','Bananas']
frutas.sort()
console.log(frutas)