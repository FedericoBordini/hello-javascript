/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
//Mi comentario de una linea
// 2. Escribe un comentario en varias líneas
/* Mi comentario
para mas de una 
linea de codigo
*/
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let str = "Hola soy un String"
let miNumber = 29
let miBoolean = true
let miUndefined = undefined
let miNull = null
let miBigInt = BigInt(9402934092305492035923)
let miSymbol = Symbol("miSimboloHermoso")
// 4. Imprime por consola el valor de todas las variables
console.log(str)
console.log(miNumber)
console.log(miBoolean)
console.log(miUndefined)
console.log(miNull)
console.log(miBigInt)
console.log(miSymbol)
// 5. Imprime por consola el tipo de todas las variables
console.log(typeof str)
console.log(typeof miNumber)
console.log(typeof miBoolean)
console.log(typeof miUndefined)
console.log(typeof miNull)
console.log(typeof miBigInt)
console.log(typeof miSymbol)
// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
str = "Soy otro string"
miNumber = 30
miBoolean = false
miUndefined = undefined
miNull = null
miBigInt = BigInt(505690599845949584453332)
miSymbol = Symbol("miOtroSimbolo")
// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
str = 27
miNumber = "Hola"
miBoolean = null
miUndefined = true
miNull = Symbol("miSimboloNulo")
miBigInt = undefined
miSymbol = BigInt(459393437847932894287934758)
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const constStrig = "Soy un string constante"
const constNumber = 20
const constBoolean = false
const constUndefined = undefined
const constNull = null
const constBigInt = BigInt(4328938459834952)
const constSymbol = Symbol("miSimboloConstante")
// 9. A continuación, modifica los valores de las constantes
constStrig = "Soy un string constante distinto"
constNumber = 26
constBoolean = true
constUndefined = undefined
constNull = null
constBigInt = BigInt(43289384553434232235452)
constSymbol = Symbol("miSimboloConstanteCambiado")
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
/*
TypeError: Assignment to constant variable. -> constStrig
TypeError: Assignment to constant variable. -> constNumber
TypeError: Assignment to constant variable. -> constBoolean
TypeError: Assignment to constant variable. -> constUndefined
TypeError: Assignment to constant variable. -> constNull
TypeError: Assignment to constant variable. -> constBigInt
TypeError: Assignment to constant variable. -> constSymbol 
*/