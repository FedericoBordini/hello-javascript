/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
/* for (let i = 1; i <= 20; i++) {
    console.log(`Numero ${i}`)
} */
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
/* let sum = 0
for (let i = 1; i <= 100; i++) {
    sum += i
}
console.log(`la suma es: ${sum}`) */
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

/* for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(`Pares: ${i}`)
    }
} */
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
/* let nombres = new Set(["Fede", "Pablo", "Agus", "Ana"])
for (let value of nombres) {
    console.log(value)
} */
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
/* const PALABRA = "Hola mundo de JavaScript gracias por todo"
let contadorVocales = 0

for (let i = 0; i < PALABRA.length; i++) {
    const CARACTER = PALABRA[i].toLowerCase();
    if (CARACTER === 'a' || CARACTER === 'e' || CARACTER === 'i' || CARACTER === 'o' || CARACTER === 'u') {
        contadorVocales++;
    }
} 
console.log(`Cantidad de vocales: ${contadorVocales}`)
*/
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
/* let numero = [1, 2, 3, 4, 5]
let producto = 1
for (let i = 0; i < numero.length; i++) {
    producto *= numero[i]
} 
console.log(`El producto es ${producto}`)
*/
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
/* for (let i = 0; i < 15; i++) {
    console.log(i * 5)
} */
// 8. Usa un bucle para invertir una cadena de texto
let cadena = "Dando vuelta un string investigando"
let cadenaInvertida = ""

for (let i = cadena.length - 1; i >= 0; i--) {
    cadenaInvertida += cadena[i]
}

console.log(cadenaInvertida)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let n = 10;
let a = 0;
let b = 1;
let siguiente;

console.log(a);
console.log(b);

for (let i = 2; i < n; i++) {
    siguiente = a + b;
    console.log(siguiente);
    a = b;
    b = siguiente;
}
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

const NUMBER_ARRAY = [5, 30, 2, 20, 50, 1, 4, 90]
const ARRAY_MAYORES = []
for (let i = 0; i < NUMBER_ARRAY.length; i++) {
    if (NUMBER_ARRAY[i] > 10) {
        ARRAY_MAYORES.push(NUMBER_ARRAY[i])
    }
}
console.log(`De la lista de ${NUMBER_ARRAY} los mayores de 10 son: ${ARRAY_MAYORES}`)