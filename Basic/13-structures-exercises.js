/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let myAnimals = ["Perro", "Gato", "Pato", "Leon", "Conejo"]
console.log(myAnimals)
// 2. Añade dos más. Uno al principio y otro al final
myAnimals.push("Elefante")
myAnimals.unshift("Cangrejo")
console.log(myAnimals)
// 3. Elimina el que se encuentra en tercera posición
myAnimals.splice(3, 1)
console.log(myAnimals)
// 4. Crea un set que almacene cinco libros
let mySetBook = new Set(["El principito", "Noches Blancas", "Feliz", "Noel Gris", "Ciencia que Baila"])
// 5. Añade dos más. Uno de ellos repetido
mySetBook.add("Aura", "Noches Blancas")
console.log(mySetBook)
// 6. Elimina uno concreto a tu elección
mySetBook.delete("Ciencia que Baila")
console.log(mySetBook)
// 7. Crea un mapa que asocie el número del mes a su nombre
let myMapMes = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])


// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (myMapMes.has(5)) {
    console.log(myMapMes.get(5))
} else {
    console.log("No existe")
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano

let summerArray = ["Enero", "Febrero", "Marzo"];
myMapMes.set("Verano", summerArray);
console.log(myMapMes)


// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let arrayJuegos = ["The last of us", "Naruto", "God of War"]

let mySetJuegos = new Set(arrayJuegos)
console.log(mySetJuegos)

let mapaJuegos = new Map([
    ["arrayJuegos", mySetJuegos]
])

console.log(mapaJuegos)