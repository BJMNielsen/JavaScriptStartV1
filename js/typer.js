// Der er 7 (3+2+2) primitive typer i JavaScript
// Number, String, Boolean
// Undefined, Null
// Symbol, og BigInt

// Der er yderligere 2 typer
// Object, og Function

function showTypes(lst) {
    console.log("STARTER Udskrivning")
    for (const obj of lst) {
        console.log(obj + " er af typen = " + typeof obj)
    }
}

const a = 5.5
const b = 3
const c = "Benjamin"

const arr = []

// en metode der ligger objekter ind i array
arr.push(a,b,c)
showTypes(arr)
console.log(arr[0])

let d
const arr2 = [1, "Lars", true, 34.02, null, d, 0/0]
arr2.push(23)
showTypes(arr2)