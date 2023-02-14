// Function, tager parameter s. Vi laver en funktion med et kort navn der bare kalder console.log,
// så vi slipper for at skrive console.log() hver gang
function out(s) {console.log(s)}

let a = 5
let b = 6
console.log("Sum is " + (a+b))

console.log("Hej " + 5)
console.log(5 + " Hej")

//NaN fejl. Not a number. Runtime fejl.
console.log("Hej " -5)

out("Jeg er i out metoden" + 4 > 5)

const c = "hej"
const d = 5

let f
out(f)

let g = null
out(g)

// mere end 2 linjer, brug tuborg klammer ligesom java
if (c>d) {out("c er større end d")}
if (c) out ("c er noget")


out("Print arrays")
let arr = [5, 5.5, "hej", 5>4, f, g, [1, "array2"], {"erik" : 5}]

arr.forEach(out)
arr.forEach(s => console.log(s))
