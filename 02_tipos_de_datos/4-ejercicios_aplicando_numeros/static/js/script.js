console.log("Conexión con JS exitosa!")

//🔹 Ejercicio 1: Edad proyectada
//Declara tu edad actual y calcula:
//Tu edad en 5 años
//Tu edad hace 10 años
//Muestra ambos resultados en consola.
function edadProyectada() {
    let edad = 16;
    alert(`Mi edad es: ${edad}
        \nEn 5 años tendré ${edad + 5}
        \nHace 10 años tenía ${edad - 10}`);
}


//🔹 Ejercicio 2: Compra con descuento
//Un producto cuesta $25.000 y tiene un descuento del 20%.
//Calcula el precio final
//Muestra el resultado

function comprarDescuento() {
let producto = 25000;
alert(`El producto cuesta: ${producto}
    \nEl descuento es de: ${producto * 0.2}
    \nY con el descuento vale: ${producto - (producto * 0.2)}`)
}

//🔹 Ejercicio 3: Promedio de notas
//Declara 3 notas decimales:
//Calcula el promedio
//Redondea el resultado usando Math.round()

function promedioNotas() {
let nota1 = 6.3;
let nota2 = 5.9;
let nota3 = 5.6;
let suma = nota1 + nota2 + nota3;
let promedio = suma / 3;
alert(`Las notas del estudiante son: ${nota1}, ${nota2}, ${nota3}
    \nEl promedio sería: ${suma / 3}
    \nY el redondeado sería ${Math.round(promedio)}`);
}

//🔹 Ejercicio 4: Temperatura
//Declara una temperatura actual en grados Celsius:
//Auméntala en 3 grados
//Luego disminúyela en 5 grados
//Muestra el resultado final

function calcularTemperatura() {
let temperatura = 25;
let temperaturaNueva = temperatura + 3;
alert(`La temperatura actual es de: ${temperatura} grados
    \nDespués será de: ${temperatura + 3} grados
    \nY más tarde será de ${temperaturaNueva - 5}`)
}

//🔹 Ejercicio 5: Sueldo 
//Un trabajador gana $8.000 por hora y trabaja 45 horas:
//Calcula su sueldo
//Si trabaja 5 horas extra, agrégalas usando incremento
//Muestra el nuevo sueldo

function calcularSueldo() {
let sueldo = 8000;
let horas = 45;
alert(`El sueldo del trabajador es de: ${sueldo * horas}
    \nSi se agregaran más horas sería de: ${sueldo * 50}`)
}

//🔹 Ejercicio 6: División y resto
//Declara dos números:
//Calcula la división
//Calcula el módulo (%)
//Explica el resultado en consola

function calcularResto() {
    let num1 = 9;
    let num2 = 2;
    alert(`La división es: ${num1 / num2}
        \nEl módulo es: ${num1 % num2} porque es lo que sobra de una división impar.`)
}

//🔹 Ejercicio 7: Comparación de números
//Declara dos números:
//Muestra si el primero es mayor que el segundo
//Verifica si uno de ellos es igual a 10

function calcularComparacion() {
    let num1 = 10;
    let num2 = 2;
    alert(`Num1 es mayor que 2? ${num1 > num2}
        \nEs num1 igual que 10? ${num1 === 10}`)
}

//🔹 Ejercicio 8: Notación científica aplicada
//Declara:
//Una población usando notación científica (ej: 1e6)
//Divide esa población en 4 grupos
//Muestra el resultado

function calcularNotacionCientifica() {
let poblacion = 2e6;
alert(`la población es de ${2e6}
    \nSe dividiran en grupos de 4
    \nEl resultado es de ${poblacion / 4} en 4 grupos`)
}

//🔹 Ejercicio 9: Potencia y cálculo combinado
//Calcula:
//3 elevado a 4
//Luego multiplícalo por 2
//Resta 10 al resultado final

function calcularPotenciaCalculo() {
    let elevacion = 3 ** 4;
    let multi = elevacion * 2;
    alert(`El resultado de 3 elevado a 4 es ${3 ** 4}
        \nSe multiplica por 2 y es ${multi}
        \nY después se resta 10 y es ${multi - 10}`)
}

//🔹 Ejercicio 10: Dado aleatorio 🎲
//Simula el lanzamiento de un dado:
//Genera un número entre 1 y 6
//Muestra el resultado
//Indica si el número es mayor o igual a 4 (gana) o menor (pierde)

function calcularAleatorio() {
let dado = Math.floor(Math.random()*6) + 1;
alert(`Lanzar un dado: ${dado}
    \nEs mayor a 4? ${dado > 4}`);
}