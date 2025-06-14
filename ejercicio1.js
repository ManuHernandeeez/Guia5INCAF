/**EJERCICIO 1. Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que
obtenga el título, color y fuente de la página, el segundo método que indique como desea que
aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las
propiedades.  */
var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina(titulo, color, fuente, alineacion) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = alineacion;
    }
    CabeceraPagina.prototype.obtenerInformacion = function () {
        console.log("Titulo: ".concat(this.titulo));
        console.log("Color: ".concat(this.color));
        console.log("Fuente: ".concat(this.fuente));
    };
    CabeceraPagina.prototype.indicarTitulo = function (alineacion) {
        this.alineacion = alineacion;
        console.log("El titulo esta alineado a la ".concat(this.alineacion, "."));
    };
    CabeceraPagina.prototype.imprimirPropiedades = function () {
        console.log("Propiedades de la cabecera de la página:");
        console.log("Titulo: ".concat(this.titulo));
        console.log("Color: ".concat(this.color));
        console.log("Fuente: ".concat(this.fuente));
        console.log("Alineacion: ".concat(this.alineacion));
        console.log("--------------------------------------------------\n");
    };
    return CabeceraPagina;
}());
// 🧪 Ejemplo de uso
var miCabecera = new CabeceraPagina("Guia de POO", "Azul", "Arial", "centro");
miCabecera.obtenerInformacion();
miCabecera.indicarTitulo("izquierda");
miCabecera.imprimirPropiedades();
