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

//Ejercicio 16: Boleta de compra con clasificación de cliente

//Crear una función que almacene el nombre de un cliente, el nombre de un producto y el precio. Luego:
//Convertir el nombre del cliente a mayúsculas
//Determinar el tipo de cliente según el precio:
//Mayor o igual a 100.000 → Cliente Premium (20% descuento)
//Mayor o igual a 50.000 → Cliente Frecuente (10% descuento)
//Menor a 50.000 → Cliente Normal (sin descuento)

//Mostrar:
//Nombre del cliente en mayúsculas
//Producto en minúsculas
//Precio original
//Precio final
//Tipo de cliente

function ejercicio16(){
    let producto = "InserteTexto"
    let precio = 100000;
    let cliente = "Tomás Mariqueo";
    if(precio >= 100000){
        alert(`El cliente ${cliente.toUpperCase()} lleva un ${producto.toLowerCase()} con un precio de: ${precio}
        \nPero como es un cliente premium obtiene un descuento del 20%, así que ahora cuesta: ${precio - (precio * 0.2)}`)
    } else if(precio >= 50000){
        alert(`El cliente ${cliente.toUpperCase()} lleva un ${producto.toLowerCase()} con un precio de: ${precio}
        \nPero como es un cliente frecuente obtiene un descuento del 10%, así que ahora cuesta: ${precio - (precio * 0.1)}`)
    } else {
        alert(`El cliente ${cliente.toUpperCase()} lleva un ${producto.toLowerCase()} con un precio de: ${precio}
        \nPero como es un cliente normal no obtiene un descuento`)
    }
}

//Ejercicio 17: Análisis de frase con puntuación
//Crear una función que almacene una frase y un puntaje numérico. Luego:
//Convertir la frase a minúsculas
//Contar la cantidad de caracteres
//Clasificar el puntaje:
//90 o más → Excelente
//70 o más → Bueno
//Menor a 70 → Insuficiente

//Mostrar:
//Frase transformada
//Largo de la frase
//Puntaje
//Clasificación

function ejercicio17(){
    let frase = "Amigos estoy comiendo mortadela"
    if(frase.length >= 90){
        alert(`La frase "${frase.toLowerCase()}" contiene ${frase.length} caracteres y por ello tiene una puntuación de "Excelente".`)
    } else if(frase.length >= 70){
        alert(`La frase "${frase.toLowerCase()}" contiene ${frase.length} caracteres y por ello tiene una puntuación de "Bueno".`)
    } else {
        alert(`La frase "${frase.toLowerCase()}" contiene ${frase.length} caracteres y por ello tiene una puntuación de "Insuficiente".`)
    }
}

//Ejercicio 18: Evaluación de tres notas con estado final

//Crear una función que almacene el nombre de un estudiante y tres notas. Luego:

//Calcular el promedio
//Convertir el nombre a mayúsculas
//Determinar el estado:
//Promedio ≥ 6.0 → Destacado
//Promedio ≥ 4.0 → Aprobado
//Promedio < 4.0 → Reprobado

//Además:
//Contar la cantidad de caracteres del nombre

//Mostrar:
//Nombre en mayúsculas
//Cantidad de caracteres del nombre
//Promedio
//Estado final

function ejercicio18(){
    let estudiante = "Tomás Mariqueo"
    let notas = 6.0 + 5.5 + 7;
    let promedio = notas / 3;
    if(promedio > 6.0){
        alert(`El estudiante de nombre ${estudiante.toUpperCase()} tiene ${estudiante.length} caracteres y un promedio de: "${Math.round(promedio)}" de un estudiante Destacado.`)
    } else if(promedio > 4.0){
        alert(`El estudiante de nombre ${estudiante.toUpperCase()} tiene ${estudiante.length} caracteres y un promedio de: "${Math.round(promedio)}" de un estudiante Aprobado.`)
    } else{
        alert(`El estudiante de nombre ${estudiante.toUpperCase()} tiene ${estudiante.length} caracteres y un promedio de: "${Math.round(promedio)}" de un estudiante Reprobado.`)
    }
}