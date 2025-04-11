/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
class PrimeraClass {
    constructor(name, year) {
        this.name = name
        this.year = year
    }
    sayHi() {
        console.log(this.name)
    }

    clean() {
        console.log("Estoy limpiando...")
    }

    static rest(a, b) {
        return a - b
    }
}
// 2. Añade un método a la clase que utilice las propiedades
let user = new PrimeraClass("Fede")
let user2 = new PrimeraClass("Pablo")
user.sayHi()
user2.sayHi()
// 3. Muestra los valores de las propiedades e invoca a la función
let PrimeraClass2 = new PrimeraClass("Fede", 29)
PrimeraClass2.clean()
// 4. Añade un método estático a la primera clase
// ---- Ya esta declarado. ----
// 5. Haz uso del método estático
console.log(PrimeraClass.rest(30, 10))
// 6. Crea una clase que haga uso de herencia
class Jugada {
    constructor(name) {
        this.name = name
    }
    llamado() {
        console.log("La jugada es...")
    }
}

class Lakers extends Jugada {
    llamado() {
        console.log("cuerno")
    }

    defensa() {
        console.log("zonal")
    }
}

let myLakers = new Lakers("Exitoso")
myLakers.llamado()
myLakers.defensa()
// 7. Crea una clase que haga uso de getters y setters
class User {

    constructor(name) {
        // invoca el setter
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log("Nombre demasiado corto.");
            return;
        }
        this._name = value;
    }

}

let user1 = new User("Federico");
console.log(user1.name); // John



// 8. Modifica la clase con getters y setters para que use propiedades privadas
class GetSetprivateTeam {
    #name
    #city
    #stadio

    constructor(name, city, stadio) {
        this.#name = name
        this.#city = city
        this.#stadio = stadio
    }

    get name() {
        return this.#name
    }

    set stadio(stadio) {
        this.#stadio = stadio
    }
}
// 9. Utiliza los get y set y muestra sus valores
let teamView2 = new GetSetprivateTeam("Lakers", "Los Angeles", "Crypto.comArena")
console.log(teamView2.name)

/* teamView2.stadio = "Staple Center"
console.log(teamView2.stadio) */
// 10. Sobrescribe un método de una clase que utilice herencia 
class OtherTeam extends Jugada {
    constructor(name, rolPlay) {
        super(name)
        this.rolPlay = rolPlay
    }
}

let myOtherTeam = new Jugada("Triangulo")
console.log(myOtherTeam.name)
