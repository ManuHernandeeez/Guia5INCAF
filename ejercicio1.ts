/**EJERCICIO 1. Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que 
obtenga el título, color y fuente de la página, el segundo método que indique como desea que 
aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las 
propiedades.  */



class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: string;

    constructor(titulo: string, color: string, fuente: string, alineacion: string) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = alineacion;
    }

    obtenerInformacion(): void {
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Color: ${this.color}`);
        console.log(`Fuente: ${this.fuente}`);
    }

    indicarTitulo(alineacion: "centro" | "derecha" | "izquierda"): void {
        this.alineacion = alineacion;
        console.log(`El titulo esta alineado a la ${this.alineacion}.`);
    }

    imprimirPropiedades(): void {
        console.log("Propiedades de la cabecera de la página:");
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Color: ${this.color}`);
        console.log(`Fuente: ${this.fuente}`);
        console.log(`Alineacion: ${this.alineacion}`);
        console.log("--------------------------------------------------\n");
    }
}

// 🧪 Ejemplo de uso
const miCabecera = new CabeceraPagina("Guia de POO", "Azul", "Arial", "centro");

miCabecera.obtenerInformacion();
miCabecera.indicarTitulo("izquierda");
miCabecera.imprimirPropiedades();
