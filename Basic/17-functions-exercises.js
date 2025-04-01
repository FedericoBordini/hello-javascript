/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a, b) {
    console.log(a + b)
}
suma(15, 30)
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let miArray = [4, 6, 10, 60, 1, 50]
let max = 0


function mayorArray() {
    for (let miArrayDevuelto of miArray) {
        if (max < miArrayDevuelto)
            max = miArrayDevuelto
    }
    console.log(max)
}
mayorArray()

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
const PALABRA = "Estamos de vuelta con este ejercicio"

let contadorVocales = 0

function misVocales() {
    for (let i = 0; i < PALABRA.length; i++) {
        const CARACTER = PALABRA[i].toLocaleLowerCase()
        if (CARACTER === 'a' || CARACTER === 'e' || CARACTER === 'i' || CARACTER === 'o' || CARACTER === 'u') {
            contadorVocales++
        }
    }
    console.log(`Cantidad de vocales: ${contadorVocales}`)
}
misVocales()
// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

const funcionFecha = (arrayMayusculas) => {
    return arrayMayusculas.map(elemento => elemento.toUpperCase())
}

const primerArray = ["Agus", "pablo", "fede"]
const arrayEnMayusculas = funcionFecha(primerArray)
console.log(arrayEnMayusculas)
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function miPrimo(numero) {
    if (numero <= 1) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false
        }
    }
    return true
}
console.log(miPrimo(3))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
const elemento1 = [2, "Naruto", true, "Academia"]
const elemento2 = ["Naruto", false, "Academia", 40]

function numerosEnComun(elemento1, elemento2) {
    const coincidencias = []
    for (let i = 0; i < elemento1.length; i++) {
        for (let j = 0; j < elemento2.length; j++) {
            if (elemento1[i] === elemento2[j]) {
                coincidencias.push(elemento1[i])
                break
            }
        }
    }
    return coincidencias
}

console.log(numerosEnComun(elemento1, elemento2))
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumaPares(arrayBuscando) {
    let suma = 0
    for (let i = 0; i < arrayBuscando.length; i++) {
        if (arrayBuscando[i] % 2 === 0) {
            suma += arrayBuscando[i]
        }
    }
    return suma
}

const arrayDePares = [3, 8, 2, 4, 9, 7]
const sumaTotalPares = sumaPares(arrayDePares)
console.log(sumaTotalPares)
// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function elevandoAlCuadrado(numeros) {
    return numeros.map(numero => numero * numero)
}

const numeros = [2, 4, 6, 8]
const cuadrados = elevandoAlCuadrado(numeros)
console.log(cuadrados)
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function invertiendoPalabras(cadena) {
    const palabras = cadena.split(" ")

    palabras.reverse()

    const cadenaInvertida = palabras.join(" ")

    return cadenaInvertida
}

let cadenaDeTexto = "Hola mundo"
const cadenaInvertida = invertiendoPalabras(cadenaDeTexto)
console.log(cadenaInvertida)

// 10. Crea una función que calcule el factorial de un número dado
function factorializandoRecursivo(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorializandoRecursivo(n - 1)
    }
}

console.log(factorializandoRecursivo(5))