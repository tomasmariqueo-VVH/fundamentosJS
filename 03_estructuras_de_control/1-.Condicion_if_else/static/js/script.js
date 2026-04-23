console.log("conexión con JS correcta...!")

/*
============================
¿Qué es una condición en JS?
============================
Una condición nos permite tomar decisiones en el código. 
Separando 2 caminos, el si(if) y el no(else).

Estructura básica:( Sintáxis --> Reglas del lenguaje de programación. )

if (condición) {
    //código que se ejecuta si la condición es verdadera.
} else {
    //código que se ejecuta si la condición es falsa.
}
*/

//Ejemplo 1: (numérico)
let edad = 18;

if(edad >= 18){ //condición si
    console.log(`Eres mayor de edad`);
}

//ejemplo 2: Dos caminos posinles
let temperatura = 10;
if(temperatura > 20){
    console.log(`Hace calor`)
} else {
    console.log(`Hace frío`)
}

//Ejemplo 3: IF -ELSE IF - ELSE (multiples condiciones).
let nota = 5.5;

if(nota >= 6.0){ //Primera condición
    console.log(`Excelente`)
} else if(nota >= 5.0){ //Segunda condición
    console.log(`Aprovado`)
} else { //Si el valor no cumple
    console.log(`Reprobado`)
}

//Ejemplo 4: Condiciones con  STRING.
let nombre = "Pan";

//Comparacion exacta (===)
if(nombre === "Pan"){
    console.log("Hola, " +  nombre)
} else {
    console.log("Tu no eres Pan")
}

/*
OPERADORES DE COMPARACION   

> mayor que
< mejor que
>= mayor o igual que
<= menor o igual que
=== estricta igualdad
!== distinto estricto
== igualdad
!= distinto
*/

//Ejemplo de distinto
let num1 = 10;
let num2 = 5
if (num1 !== num2){ //Comparación con distinto
    console.log(`El número: ${num1} es distinto que ${num2}`)
} else{
    console.log("Son iguales!")
}