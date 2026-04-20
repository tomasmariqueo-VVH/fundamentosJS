console.log("Conexión con js correcta...");
//Tipos de datos númericos en JS

//1.- Declaración de números (creación de variables con números).
let edad = 31;
let temperatura = -5;
let pi = 3.1416;
let descuento = 0.25;

//2.- Operaciones con números.
let suma = 10 + 5;
let resta = 10 - 5;
let multiplicacion = 10 * 5;
let division = 25 / 5;
let modulo = 10 % 3; //Resto de la división
let potencia = 2 ** 3; //2 elevado a la 3
console.log(`sumar:&{suma}, restar: ${resta}, multiplicar: ${multiplicacion},
dividir: ${division}, resto: ${modulo}, potencia: ${potencia}`);

//3.- Incremento y decremento /suma [++] o resta [--] de 1.

let number = 10;
number++; //11
number--; //9

//4.- Números con decimales.
let promedio = 6.5;
let altura = 1.67;
let peso = 90.3;

//5.- Números grandes y notación científica.
let poblacion = 1e6; //1.000.000 (un millón)
console.log(`numero grande (1e6): ${poblacion}`);
let numero = 5e-3;
console.log(`numero pequeño (5e-3): ${numero}`);

//6.- Operaciones conbinadas.
//Calculo de precios.
let precioProducto = 1000;
let iva = 0.19;
let total = precioProducto + (precioProducto * iva);
console.log(`el valor final del producto es: ${total}`);

//Calculo de valor de la hora trabajada.
let horas = 40;
let valorHora = 13400;
let sueldo = horas * valorHora;
console.log(`el sueldo del trabajador es ${sueldo}`);

//Redondeo de números decimales.
console.log("Redondeando 4.6: " + Math.round(4.6)); //5
console.log("Redondeando 4.6: " + Math.floor(4.6)); //4