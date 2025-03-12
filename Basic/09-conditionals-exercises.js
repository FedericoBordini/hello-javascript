/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let myName = "Federico"
if (myName == "Federico") {
    console.log(`El nombre de la variable es: ${myName}`)
} else {
    console.log("El nombre no coincide..")
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let userName = "Fede"
let passWord = 1234

if (userName == "Martin" && passWord == 1234) {
    console.log("El usuario y contraseña son correctos")
} else {
    console.log("El usuario y contraseña no son correctos")
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let myNumber = 0
if (myNumber > 0) {
    console.log("El numero es positivo")
} else if (myNumber < 0) {
    console.log("El numero es negativo")
} else {
    console.log("El numero es 0")
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 10
const MAYOR_EDAD = 18
if (age >= 18) {
    console.log("Esa persona puede votar")
} else {
    console.log(`Esa persona es menor de edad y le falta ${MAYOR_EDAD - age} años para poder votar`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let checkAge = 15

const mensaje = checkAge >= 18 ? "Es adulto" : "Es menor"

console.log(mensaje)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = "Febrero"

if (mes == "Diciembre" || mes == "Enero" || mes == "Febrero" || mes == "Marzo") {
    console.log("Estamos en verano")
} else if (mes == "Marzo" || mes == "Abril" || mes == "Mayo" || mes == "Junio") {
    console.log("Estamos en Otoño")
} else if (mes == "Junio" || mes == "Julio" || mes == "Agosto" || mes == "Septiembre") {
    console.log("Estamos en Invierno")
} else {
    console.log("Estamos en primavera")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (mes == "Enero" || mes == "Marzo" || mes == "Mayo" || mes == "Julio" || mes == "Agosto" || mes == "Octubre" || mes == "Diciembre") {
    console.log(`${mes} tiene 31 días`)
} else if (mes == "Abril" || mes == "Junio" || mes == "Septiembre" || mes == "Noviembre") {
    console.log(`${mes} tiene 30 días`)
} else {
    console.log(`${mes} tiene 28 dias`)
}


// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "Estonio"
let saludar

switch (idioma) {
    case "Ingles":
        saludar = "Hi my name is Fede"
        break
    case "Estonio":
        saludar = "Tere, minu nimi on Fede"
        break
    case "Aleman":
        saludar = "Hallo mein Name ist Fede"
        break
    default:
        saludar = "Hola mi nombre es Fede"
}
console.log(saludar)

// 9. Usa un switch para hacer de nuevo el ejercicio 6
let mesSwitch = "Septiembre"
let estacionDelAño



switch (mesSwitch) {
    case "Diciembre":
    case "Enero":
    case "Febrero":
        estacionDelAño = "Estamos en verano"
        break;
    case "Marzo":
    case "Abril":
    case "Mayo":
        estacionDelAño = "Estamos en otoño"
        break;
    case "Junio":
    case "Julio":
    case "Agosto":
        estacionDelAño = "Estamos en invierno"
        break;
    default:
        estacionDelAño = "Estamos en primavera"
}
console.log(estacionDelAño)

// 10. Usa un switch para hacer de nuevo el ejercicio 7

mes == "Abril" || mes == "Junio" || mes == "Septiembre" || mes == "Noviembre"

switch (mesSwitch) {
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        console.log(`${mesSwitch} tiene 31 dias`)
        break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        console.log(`${mesSwitch} tiene 30 dias`)
        break;
    default:
        console.log(`${mesSwitch} tiene 28 dias`)
}