/**EJERCICIO 2: Crear una clase Calculadora que contendrá los siguientes métodos: 
• Sumar 
• Restar 
• Multiplicar 
• Dividir 
• Potencia 
• Factorial  */


class Calculadora {

    private num1: number;
    private num2: number;
    private resultado: number;
    private base: number;
    private exponente: number;
    private nFactorial: number;

    constructor(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;
        this.resultado = 0;
        this.base = 0;
        this.exponente = 0;
        this.nFactorial = 0;

    }

    //metodo sumar
    public sumar(): number {
        return this.num1 + this.num2;
    }

    //metodo restar
    public restar(): number {
        return this.num1 - this.num2;

    }

    //metodo multiplicar
    public multiplicar(): number {
        return this.num1 * this.num2;

    }

    //metodo dividir 
    public dividir(): number {
        if (this.num2 === 0) {
            throw new Error("No se puede dividir por cero.");
        }
        return this.num1 / this.num2;

    }

    //metodo potencia
    public potencia(base: number, exponente: number): number {
        this.base = base;
        this.exponente = exponente;
        return Math.pow(this.base, this.exponente);
    }


    //metodo factorial
    public factorial(n: number): number {

        if (n < 0) {
            throw new Error("El factorial no puede ser negativo");
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        this.nFactorial = n;
        let resultado = 1;
        for (let i = 2; i <= this.nFactorial; i++) {
            resultado *= i;
        }
        return resultado;
    }


}


//Prueba
const miCalculadora = new Calculadora(5, 10);
console.log("Suma:", miCalculadora.sumar());
console.log("Resta:", miCalculadora.restar());
console.log("Multiplicación:", miCalculadora.multiplicar());
console.log("División:", miCalculadora.dividir());
console.log("Potencia:", miCalculadora.potencia(2, 3));
console.log("Factorial de 5:", miCalculadora.factorial(5));
console.log("--------------------\n");


