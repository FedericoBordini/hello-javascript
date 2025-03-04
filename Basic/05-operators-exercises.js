/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let suma = 3 + 3
let resta = 5 - 2
let multi = 2 * 3
let divi = 10 / 5
let mod = 10 % 3
let expo = 2 ** 3
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
suma += 3
console.log(suma)
resta -= 2
console.log(resta)
multi *= 4
console.log(multi)
divi /= 2
console.log(divi)
mod %= 2
console.log(mod)
expo **= 2
console.log(expo)
// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(5 == 5)
console.log(10 > 5)
console.log(5 < 10)
console.log(7 >= 4)
console.log(4 <= 7)
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(5 == 4)
console.log(1 > 5)
console.log(5 < 1)
console.log(2 >= 4)
console.log(4 <= 2)
// 5. Utiliza el operador lógico and
console.log(4 > 2 && 2 > 1)
// 6. Utiliza el operador lógico or
console.log(4 > 2 || 2 > 4)
// 7. Combina ambos operadores lógicos
console.log(10 < 5 && 7 > 10 || 5 > 10)
// 8. Añade alguna negación
console.log(!(10 < 5 && 7 > 10 || 5 > 10))
// 9. Utiliza el operador ternario
const regarPlanta = true;
regarPlanta ? console.log("Ya lo hice") : console.log("No lo hice")
// 10. Combina operadores aritméticos, de comparáción y lógicas
let sum = 4 + 2
let res = 6 - 2

let mul = 2 * 2
let div = 4 / 2

console.log(sum > res && mul < div)
console.log(sum > res || mul < div)