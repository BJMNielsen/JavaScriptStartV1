// Der er 3 JavaScript keywords der bruges til tildeling af variabel.

// const kræver at du declare en værdi når du laver den.
// Den vil altid have den værdi du giver den når du først laver den,
// den er "Constant".
const a = 5
console.log (a)

// let tildeler du en variabel en værdi, som GODT kan ændres senere.
let b = 6
console.log(b)

// var's scope er større end let og const. Const og let er restricted til block scope,
// og var har function scope, og kan derfor kaldes uden for block scopet, hvilket ikke er skide godt.
// Derfor undgår man at bruge var nutildags.

var c = 3

function testScope() {
    let a1 = "xjeg er lokal"
    var v1 = "jeg var lokal"
    if(a1>v1) {
        let a2 = "a1 var større end v1"
        console.log(a2)
        if (3==3) {
            let a3 = 3
            var v3 = 3.3
            console.log("3=3")
        }
        //console.log(a3)
        console.log(v3) // Block scope virker ikke med var, vi can access v3 uden for if blocken
    }
}

testScope()
//console.log(a2)function scope virker, da vi ikke kan få fat på a2, a1 eller v1
