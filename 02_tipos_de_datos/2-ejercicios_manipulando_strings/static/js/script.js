console.log("Conexión correcta con js...");
//1️⃣ Presentación completa
//Crea las variables:
//nombre: Camila
//edad: 25
//Debes mostrar un mensaje que:
//Presente a la persona
//Indique su edad
//Indique el tipo de dato de edad
//👉 Todo en un solo mensaje.

let nombre = "Camila";
let edad = 25;
console.log(`Su nombre es ${nombre}, tiene ${edad} años y su edad es de tipo ${typeof edad}.`);

//2️⃣ Ubicación con transformación
//Crea las variables:
//comuna: Maipú
//region: Metropilitana
//Debes mostrar un mensaje que:
//Indique dónde vive la persona
//Muestre la comuna en MAYÚSCULAS
//Muestre la región en minúsculas

let comuna = "Maipú";
let region = "Metropolitana";
console.log(`Vive en la comuna de ${comuna.toUpperCase()} en la región ${region.toLowerCase()}`);

//3️⃣ Análisis de palabra
//Crea la variable:
//lenguaje: Python
//Debes mostrar un mensaje que:
//Indique cuántos caracteres tiene
//Muestre la palabra en MAYÚSCULAS
//Indique el tipo de dato

let lenguaje = "Python";
console.log(`La palabra "${lenguaje.toUpperCase()}" tiene ${lenguaje.length} caracteres}, y su tipo de dato es ${typeof lenguaje}.`);

//4️⃣ Frase completa analizada
//Crea la variable:
//mensaje: Me encanta programar en JavaScript
//Debes mostrar un mensaje que:
//Indique la cantidad de caracteres
//Verifique si contiene la palabra "JavaScript"
//Muestre el mensaje completo en minúsculas

let mensaje = "'Me encanta programar en JavaScript'";
console.log(`El mensaje ${mensaje.toLowerCase()} contiene ${mensaje.length} caracteres y contiene el texto "JavaScript": ${mensaje.includes("JavaScript")}`);

//5️⃣ Lista con búsqueda y transformación
//Crea la variable:
//compras: arroz, fideos, aceite, sal
//Debes mostrar:
//Si existe la palabra "aceite"
//l texto completo en MAYÚSCULAS
//La cantidad total de caracteres

let compras = "arroz, fideos, aceite, sal";
console.log(`La lista de compras ${compras.toUpperCase()} contiene "aceite" ${compras.includes("aceite")} y contiene ${compras.length} caracteres.`);

//6️⃣ Conversión + análisis
//Crea las variables:
//numeroCasa: 456
//numeroCasaTexto (vacía)
//Debes:
//Convertir el número a texto
//Mostrar el número convertido
//Indicar su tipo de dato
//Indicar cuántos caracteres tiene

let numeroCasa = 456;
let numeroCasaTexto = numeroCasa.toString();
console.log(`El número convertido a texto es "${numeroCasaTexto}"
y su tipo de dato es ${typeof numeroCasaTexto} y contiene ${numeroCasaTexto.length} caracteres en total.`)

//7️⃣ Identificación personal extendida
//Crea las variables:
//nombre: Diego
//apellido: Rojas
//Debes mostrar un mensaje que:
//Muestre el nombre completo
//Indique cuántos caracteres tiene el nombre completo (incluyendo espacio)
//Muestre todo en MAYÚSCULAS

let nombre2 = "diego";
let apellido2 = "rojas";
let nomnbreCompleto = `${nombre2} ${apellido2}`;
console.log(`El nombre completo es ${nomnbreCompleto.toUpperCase()} 
y contiene ${nomnbreCompleto.length} caracteres incluyendo el espacio.`);

//8️⃣ Verificación de contenido
//Crea la variable:
//frase: Hoy aprenderemos sobre strings
//Debes mostra
//Si contiene la palabra "strings"
//La frase en MAYÚSCULAS
//La cantidad de caracteres

let frase = "Hoy aprenderemos sobre strings";
console.log(`La frase ${frase.toUpperCase()} 
contiene la palabra strings ${frase.includes("strings")} y lleva ${frase.length} caracteres en total.`);

//9️⃣ Comparación de formatos
//Crea la variable:
//texto: Programar es divertido
//Debes mostrar en un solo mensaje:
//El texto original
//El texto en minúsculas
//El texto en mayúsculas
//La cantidad de caracteres

let texto = "Programar es divertido";
console.log(`El texto original es: "${texto}"
en minúsculas: "${texto.toLowerCase()}"
en mayúsculas: "${texto.toUpperCase()}"
y lleva ${texto.length} caracteres en total.`);

//🔟 Desafío completo integrado
//Crea las variables:
//curso: 4C
//anio: 2026
//Debes mostrar un mensaje que:
//Indique el curso y año
//Convierta el año a texto
//Indique el tipo de dato del año convertido
//Muestre todo el mensaje en MAYÚSCULAS

let curso = "4C";
let año = 2026;
let añoTexto = año.toString();
console.log(`El curso es ${curso} y el año es ${añoTexto}, 
y el tipo de dato del año convertido es ${typeof añoTexto}`.toUpperCase());

