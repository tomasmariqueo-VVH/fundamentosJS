console.log(`Conexión con JS exitosa!`)

// EJERCICIO 11
// Resultado esperado en alert:
// `El estudiante Juan tiene nota 6.5 y su resultado es: Excelente rendimiento`

function ejercicio11() {
    let nota = 6.0;
    if (nota >= 6.0) {
        alert(`Excelente rendimiento`)
    } else if (nota >= 5.0) {
        alert(`Estudiante aprovado`)
    } else {
        alert(`Estudiante reprobado`)
    }
}


// EJERCICIO 12
// Resultado esperado en alert:
// `El nombre convertido es: DANIEL PÉREZ y tiene 12 caracteres`

function ejercicio12() {
    let nombre = "Daniel pérez";
    alert(`El nombre convertido es: ${nombre.toUpperCase()} y contiene ${nombre.length} caracteres`);
}


// EJERCICIO 13
// Resultado esperado en alert:
// `El correo convertido es: ejemplo@gmail.com y el resultado es: correo válido`

function ejercicio13() {
    let correo = "ToMAsmaRIQueo@liceoVVH.cl";
    if (correo.length >= 15) {
        alert(`El correo antes se veía así: ${correo}
            \nEl correo convertido es: ${correo.toLowerCase()} y el resultado es: correo válido`);
    } else {
        (`El correo convertido es: ${correo.toLowerCase()} y el resultado es: Correo demasiado corto`);
    }
}

// EJERCICIO 14
// Resultado esperado en alert:
// `La frase "Estoy aprendiendo JavaScript" tiene 28 caracteres y corresponde a una frase larga`

function ejercicio14() {
    let frase = "Estoy aprendiendo en JavaScript"
if(frase.length >= 20) {
    alert(`La frase "${frase}" contiene ${frase.length} caracteres y corresponde a una frase larga`)
} else if(frase.length >= 11) {
    alert(`La frase "${frase}" contiene ${frase.length} caracteres y corresponde a una frase mediana`)
} else {
    alert(`La frase "${frase}" contiene ${frase.length} caracteres y corresponde a una frase corta`)
}
}


// EJERCICIO 15
// Resultado esperado en alert:
// `El producto TECLADO tiene un precio final de $45000`

function ejercicio15() {
    let teclado = "teclado";
    let producto = 45000;
    if(producto >= 50000){
        alert(`El producto ${teclado.toUpperCase()} tiene un precio final de ${producto - (producto * 0.2)}`)
    } else if(producto >= 20000) {
        alert(`El producto ${teclado.toUpperCase()} tiene un precio final de ${producto - (producto * 0.1)}`)
    } else {
        alert(`El producto ${teclado.toUpperCase()} tiene un precio final de ${producto}`)
    }
}
