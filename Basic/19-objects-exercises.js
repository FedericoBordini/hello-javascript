/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
let personaje = {
    name: "Kratos",
    play: "God Of War",
    creation: 2005
}
// 2. Accede y muestra su valor
for (let key in personaje) {
    console.log(key + ": " + personaje[key])
}
// 3. Agrega una nueva propiedad
personaje.weapon = "Espadas del kaos"
// 4. Elimina una de las 3 primeras propiedades
delete personaje.creation
// 5. Agrega una función e invócala
let personaje2 = {
    name: "Kratos",
    play: "God Of War",
    creation: 2005,
    attak: function () {
        console.log("Kratos esta atacando")
    }
}
personaje2.attak()
// 6. Itera las propiedades del objeto
for (let key in personaje2) {
    console.log(key + ": " + personaje[key])
}
// 7. Crea un objeto anidado
let personaje3 = {
    name: "Kratos",
    play: "God Of War",
    creation: 2005,
    attak: function () {
        console.log("Kratos esta atacando")
    },
    son: {
        name: "Atreus",
        skill: "different languages"
    }
}
// 8. Accede y muestra el valor de las propiedades anidadas
console.log(personaje3.son.name)
// 9. Comprueba si los dos objetos creados son iguales
console.log(personaje === personaje2)
// 10. Comprueba si dos propiedades diferentes son iguales
console.log(personaje.name === personaje.play)