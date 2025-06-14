/*EJERCICIO 3. Crea una clase llamada Canción:
Atributos: título, género de la canción y un atributo privado que se llame autor.
Métodos:
• Crear un constructor que reciba como parámetros el título y género de la canción.
• Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
• Crea un método para mostrar los datos de la canción.  */
var Cancion = /** @class */ (function () {
    function Cancion(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = "";
    }
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    Cancion.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Cancion.prototype.mostrarDatos = function () {
        console.log("Titulo: ".concat(this.titulo));
        console.log("Genero: ".concat(this.genero));
        console.log("Autor: ".concat(this.autor));
        console.log("--------------------\n");
    };
    return Cancion;
}());
//creamos un objeto 
var miCancion = new Cancion("The Show Must Go On", "Rock");
miCancion.setAutor("Queen");
miCancion.mostrarDatos();
