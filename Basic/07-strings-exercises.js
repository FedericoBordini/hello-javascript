/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let myName = "Hola, " + "mi nombre es Fede"
console.log(myName)
// 2. Muestra la longitud de una cadena de texto
console.log(myName.length)
// 3. Muestra el primer y último carácter de un string
console.log(myName[0])
console.log(myName[22])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(myName.toUpperCase())
console.log(myName.toLowerCase())
// 5. Crea una cadena de texto en varias líneas
let mensaje = `Esta es 
mi cadena de texto
en muchas lineas.
`
console.log(mensaje)
// 6. Interpola el valor de una variable en un string
let saludo = `Hola, ${mensaje}para el mundo`
console.log(saludo)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(mensaje.replace(/ /g, "-"))
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(mensaje.includes("texto"))
// 9. Comprueba si dos strings son iguales
console.log(mensaje == myName)
console.log("hola" == "hola")
// 10. Comprueba si dos strings tienen la misma longitud
let cadenaLongitud = "Probando mi cadena"
let cadenaLongitudPrueba = "Otra cadena prueba"
console.log(mensaje.length == myName.length)
console.log(cadenaLongitud.length == cadenaLongitudPrueba.length)