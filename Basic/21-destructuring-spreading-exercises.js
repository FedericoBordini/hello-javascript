/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let myArray = ["Fede", "Play", 29, "Lebron"]
/* 
let [myValue0, myValue1, myValue3, myValue4, myValue5] = myArray

console.log(myValue0)
console.log(myValue1) */
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
/* let [myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0, myValue00 = 0] = myArray
console.log(myValue00) */
// 3. Usa desestructuración para extraer dos propiedades de un objeto
let persona = {
    name: "Fede",
    email: "federicobordini.info@gmail.com",
    juegoFav: "God Of War",
    gym: {
        name: "integralfit",
        profe: "Juan",
        dias: function () {
            console.log("Los dias que voy son Lunes, Miercoles y Viernes.")
        }
    }
}

let { name, email, juegoFav } = persona

console.log(name)
console.log(email)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let { name: name2, email: email2, juegoFav: juegoFav2 } = persona

console.log(name2)
console.log(email2)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let { gym: { name: gymName, profe: gymProfe } } = persona
console.log(gymName)
console.log(gymProfe)
// 6. Usa propagación para combinar dos arrays en uno nuevo
let myArray2 = [1, 2, 3, 4]
let myArray3 = [5, 6, 7]

let myArray4 = [...myArray2, ...myArray3]

console.log(myArray4)
// 7. Usa propagación para crear una copia de un array
let myArray5 = [...myArray2]
console.log(myArray5)
// 8. Usa propagación para combinar dos objetos en uno nuevo
let myObject = {
    name: "Pablo",
    email: "pablo@pablo.com",
    age: 57
}

let myObject1 = {
    bussnes: "Volley Coaching",
    expe: 7
}

let myObject3 = { ...myObject, ...myObject1 }
console.log(myObject3)
// 9. Usa propagación para crear una copia de un objeto
let myObject4 = { ...persona }
console.log(myObject4)
// 10. Combina desestructuración y propagación
let myNumbers = [30, 40, 10, 20]

let [primero, segundo, ...resto] = myNumbers

console.log(primero)
console.log(segundo)
console.log(resto)