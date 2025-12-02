const commander = document.getElementById("commander")
const counter = document.querySelector(".counter")
const btnHome = document.getElementById("home")
const btnCold = document.getElementById("cold")
const btnHot = document.getElementById("hot")
const path = require("path")

const diractory = path(__direname, 'home.html')


btnHome.addEventListener("click", (e) => {
    e.target ? directory : ""
})

let increment = 0

function ajouter() {
    increment++
    counter.textContent = increment
}

function acheter() {
    increment = ""
    counter.textContent = increment

}