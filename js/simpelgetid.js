const fruits = ["æbler", "pærer", "bananer", "juice"]

function myFunc1(item) {
    const pTagDemo = document.getElementById("demo")
    console.log(pTagDemo)
    pTagDemo.innerHTML += item + "<br>"
}

function myFunc2(item, index) {
    const pTagDemo = document.getElementById("demo")
    pTagDemo.innerHTML += "<br>" + index + ":" + item

}

// for hver item i vores array, skal vi kalde den funktion.
fruits.forEach(myFunc2)