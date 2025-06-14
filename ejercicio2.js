/**EJERCICIO 2: Crear una clase Calculadora que contendrá los siguientes métodos:
• Sumar
• Restar
• Multiplicar
• Dividir
• Potencia
• Factorial  */
var Calculadora = /** @class */ (function () {
    function Calculadora(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
        this.resultado = 0;
        this.base = 0;
        this.exponente = 0;
        this.nFactorial = 0;
    }
    //metodo sumar
    Calculadora.prototype.sumar = function () {
        return this.num1 + this.num2;
    };
    //metodo restar
    Calculadora.prototype.restar = function () {
        return this.num1 - this.num2;
    };
    //metodo multiplicar
    Calculadora.prototype.multiplicar = function () {
        return this.num1 * this.num2;
    };
    //metodo dividir 
    Calculadora.prototype.dividir = function () {
        if (this.num2 === 0) {
            throw new Error("No se puede dividir por cero.");
        }
        return this.num1 / this.num2;
    };
    //metodo potencia
    Calculadora.prototype.potencia = function (base, exponente) {
        this.base = base;
        this.exponente = exponente;
        return Math.pow(this.base, this.exponente);
    };
    //metodo factorial
    Calculadora.prototype.factorial = function (n) {
        if (n < 0) {
            throw new Error("El factorial no puede ser negativo");
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        this.nFactorial = n;
        var resultado = 1;
        for (var i = 2; i <= this.nFactorial; i++) {
            resultado *= i;
        }
        return resultado;
    };
    return Calculadora;
}());
//Prueba
var miCalculadora = new Calculadora(5, 10);
console.log("Suma:", miCalculadora.sumar());
console.log("Resta:", miCalculadora.restar());
console.log("Multiplicación:", miCalculadora.multiplicar());
console.log("División:", miCalculadora.dividir());
console.log("Potencia:", miCalculadora.potencia(2, 3));
console.log("Factorial de 5:", miCalculadora.factorial(5));
console.log("--------------------\n");
