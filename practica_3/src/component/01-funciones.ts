

// Practica 3: Definición Básica de Función

//#region Ejercicio 1: Definición Básica de Función
// Objetivo: Crea una función que sume dos números y retorne el resultado

function sumar(a:number, b:number){

    return a + b;
}
//#endregion


//#region Ejercicio 2: Parámetros Opcionales
/* Objetivo: Escribe una función que tome dos números como argumentos;
 el segundo número debe ser opcional. Si el segundo número no se proporciona,
  simplemente devuelve el primer número.
*/

function sumarDosNumeros(a:number, b?:number | undefined){

    return a ;
}
//#endregion


//#region Ejercicio 3: Valor por Defecto para Parámetros
/*
Objetivo: Desarrolla una función que tome dos números como parámetros,
 con el segundo parámetro teniendo un valor por defecto de 10. 
 La función debe retornar la multiplicación de ambos números.*/

 function multiplicar(a:number, b:number=10){

    return a * b;
}

//#endregion

//#region Ejercicio 4: Tipos de Retorno
// Objetivo: Implementa una función que reciba dos números y retorne su suma como un string.-

function sumarTostring(a:number, b:number){

    return  console.log((a+b).toString());
}

//#endregion

export{};