
/*EJERCICIO 3. Crea una clase llamada Canción: 
Atributos: título, género de la canción y un atributo privado que se llame autor. 
Métodos:  
• Crear un constructor que reciba como parámetros el título y género de la canción. 
• Utiliza los métodos get y set para recibir e imprimir la propiedad autor.  
• Crea un método para mostrar los datos de la canción.  */


class Cancion {

    private titulo: string;
    private genero: string;
    private autor: string;

    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = "";
    }

    getAutor(): string {
        return this.autor;
    }

    setAutor(autor: string): void {
        this.autor = autor;
    }

    mostrarDatos(): void {
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Genero: ${this.genero}`);
        console.log(`Autor: ${this.autor}`);
        console.log("--------------------\n");
    }
}

//creamos un objeto 
const miCancion = new Cancion("The Show Must Go On", "Rock");

miCancion.setAutor("Queen");
miCancion.mostrarDatos();
