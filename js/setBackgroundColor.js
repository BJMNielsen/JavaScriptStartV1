console.log("jeg er i setbackgroundcolor")

const input = document.querySelector(".inputColor")
console.log(input)

const button = document.querySelector("button")
console.log(button)

const colorPicker = document.querySelector(".colorPicker")
console.log(colorPicker)

function setBackgroundColor(e) {
    const body = document.querySelector("body")
    let color = input.value
    console.log(color)
    body.style.backgroundColor = color
    console.log(e)

}

function setBackgroundColorPicker() {
    const body = document.querySelector("body")
    let color = colorPicker.value
    console.log(color)
    body.style.backgroundColor = color
}

button.addEventListener('click', setBackgroundColor)
input.addEventListener('keyup', setBackgroundColor)
colorPicker.addEventListener('input', setBackgroundColorPicker)