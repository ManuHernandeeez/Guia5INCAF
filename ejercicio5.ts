/* Crear una clase abstracta Persona y va contener lo siguiente: 
Atributos: nombre, apellido, dirección, teléfono y edad. 
Métodos:  
• Crear un método constructor para recibir los datos. 
• Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no. 
• Crea un método para mostrar todos los datos personales (será el método abstracto). 
• Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo. 
• En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo. 
• La clase Empleado va heredar de la clase Persona. 
• Define un objeto de la clase Empleado y que se imprima los datos del empleado y su sueldo. */

abstract class Persona {

    protected nombre: string;
    protected apellido: string;
    protected direccion: string;
    protected telefono: string;
    protected edad: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    //metodo para verificar si es mayor de edad

    public mensajeEdad(): string {

        if (this.edad >= 18) {
            return `${this.nombre} ${this.apellido} es mayor de edad.`;
        } else {
            return `${this.nombre} ${this.apellido} no es mayor de edad.`;
        }

    }

    //metodo abstracto para mostrar datos
    public abstract mostrarDatos(): void;


}

//clase empleados heredada

class Empleado extends Persona {
    private sueldo: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }

    //metodo para cargar sueldo 

    public cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;


    }

    //metodo para imprimir sueldo
    public imprimirSueldo(): string {
        return `El sueldo de ${this.nombre} ${this.apellido} es $${this.sueldo.toFixed(2)}.`;
    }

    public mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellido: ${this.apellido}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Edad: ${this.edad}`);
        console.log(this.mensajeEdad());
        console.log(this.imprimirSueldo());
        console.log("--------------------\n");

    }

}


        //objeto de la clase Empleado
        const empleado1 = new Empleado("Manuel", "Hernández", "Calle Los Zapotes", "6209-4333", 23, 400);
        empleado1.cargarSueldo(300);
        empleado1.mostrarDatos();