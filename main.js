// const commander = document.getElementById("commander")
const counter = document.querySelector(".counter")
const btnHome = document.getElementById("home")
const funcAdd = document.querySelectorAll(".funcAdd")
// const btnCold = document.getElementById("cold")
// const btnHot = document.getElementById("hot")
// const path = require("path")

// const diractory = path(__direname, 'home.html')



let increment = 0

funcAdd.addEventListener("click", () => {
    increment += 1
    counter.textContent = `+ ${increment}`
})

function ajouter() {
    increment++
    counter.textContent = `+ ${increment}`
}

function acheter() {
    increment = ""
    counter.textContent = increment

}