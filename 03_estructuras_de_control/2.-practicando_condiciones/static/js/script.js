console.log(`Conexión con JS exitosa!`)

// EJERCICIO 1
// Resultado esperado en alert:
// "Bienvenido Juan"

function ejercicio1() {
    let nombre = "Tomás";
    alert(`Bienvenido ${nombre}`);
}


// EJERCICIO 2
// Resultado esperado en alert:
// "La suma es: 15"

function ejercicio2() {
    let num1 = 7;
    let num2 = 8;
    alert(`La suma de ${num1} y ${num2} es: ${num1 + num2}`);
}


// EJERCICIO 3
// Resultado esperado en alert:
// "La resta es: 12"

function ejercicio3() {
    let num1 = 33;
    let num2 = 21;
    alert(`La resta de ${num1} y ${num2} es: ${num1 - num2}`);
}


// EJERCICIO 4
// Resultado esperado en alert:
// "La multiplicación es: 24"

function ejercicio4() {
    let num1 = 6;
    let num2 = 4;
    alert(`La multiplicacíon de ${num1} y ${num2} es: ${num1 * num2}`);
}


// EJERCICIO 5
// Resultado esperado en alert:
// "El promedio es: 5.7"

function ejercicio5() {
    let num1 = 7.0;
    let num2 = 6.0;
    let num3 = 5.0;
    let suma = num1 + num2 + num3;
    alert(`Las notas son: ${num1}, ${num2} y ${num3}
    \nEl promedio es: ${suma / 3}`);
}


// EJERCICIO 6
// Resultado esperado en alert:
// "Es mayor de edad"

function ejercicio6() {
    let edad = 19;
    if (edad >= 18) {
        alert(`Eres mayor de edad`)
    } else {
        alert(`No eres mayor de edad`)
    }
}


// EJERCICIO 7
// Resultado esperado en alert:
// "El número es par"

function ejercicio7() {
    let num1 = 6;
    let num2 = 3;
    let resto = 6 % 2;
    if (resto == 0) {
        alert(`El número es par`)
    } else {
        alert(`El número es impar`);
    }
}

// EJERCICIO 8
// Resultado esperado en alert:
// "Estudiante aprobado"

function ejercicio8() {
    let nota = 6.0;
    if (nota >= 6.0) {
        alert(`Estudiante aprovado`)
    } else {
        alert(`Estudiante reprobado`)
    }
}


// EJERCICIO 9
// Resultado esperado en alert:
// "Precio final con descuento: $18000"

function ejercicio9() {
    let producto = 20000;
    alert(`El producto cuesta: ${producto}
    \nEl descuento es de ${producto * 0.2}
    \nEntonces, el precio final con el descuento es: ${producto - (producto * 0.2)}`)
}


// EJERCICIO 10
// Resultado esperado en alert:
// "El número mayor es: 22"

function ejercicio10() {
    let num1 = 22;
    let num2 = 12;
    if (num1 > num2) {
        alert(`El número mayor es: ${num1}`)
    } else {
        alert(`El número mayor es: ${num2}`)
    }
}
