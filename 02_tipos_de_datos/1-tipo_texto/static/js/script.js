console.log("Conexión con js correcta...");
/*
Dato: tipo texto (string)
1.- Concantenación de texto con el signo (+)
Podemos unir texto y variables
*/
//Concatenación: unir texto y/o variables.
const nombre = "Tomás";
const apellido = "Mariqueo";
//Unimos ambas constantes con  un texto extra (con el signo +).
console.log("Hola, mi nombre es: " + nombre + " " + apellido);

/*
2.- Ver el tipo de dato (typeof)
*/
console.log("La variable nombre es un tipo de dato: " + typeof nombre);

// Template literals (Forma moderna de concatenar texto)
console.log(`Hola, mi nombre es: ${nombre} ${apellido}`);

//Mostrar el largo de un string(texto) - contar los caracteres.
// -length es una propiedad que nos devuelve el número de caracteres de un string.
let palabra = "Paralelepipedo";
console.log(`La palabra ${palabra} tiene ${palabra.length} caracteres.`);

//Crea una frase para contar sus caracteres.
let pan = "El pan con queso es bueno";
console.log(`La frase "${pan}" tiene ${pan.length} caracteres.`);

// Métodos comunes en JS para formatear texto
// Transformar texto a mayúscula (toUpperCase)
let texto1 = "JaVaScRiPt Es Lo MeJoR";
console.log(texto1.toUpperCase());

// Transformar texto a minúscula (toLowerCase)
console.log(texto1.toLowerCase());

//Buscar un texto dentro de un string (includes).
let texto2 = "Leche, azucar, peras y pan";
console.log(texto2.includes("azucar")); //true

//Convertir una variable a texto (toString).
let telefono = 123456789;
let telefono_texto = String(telefono);
console.log(`Mi número de teléfono ${telefono_texto} es de tipo: ${typeof telefono_texto}`);